/**
 * @file usePagePreloader.js
 * @module preloading/usePagePreloader
 * @desc Provides a hook for handling page navigation with optional preloading logic, cancelable promises, 
 *       NProgress animations, and react-hot-toast feedback.
 *       Ensures smooth UX transitions for heavy pages by waiting for assets/data to load before navigating.
 * 
 * @author Chace Nielson
 * @created Mar 28, 2025
 * @updated Mar 29, 2025
 *
 * @features
 * - Preloads assets or data before navigating to specific routes.
 * - Supports cancellation of preloading when a different route is selected mid-load.
 * - Integrates NProgress progress bar feedback.
 * - Integrates react-hot-toast promise feedback for loading/success/error.
 * - Global loading state integration using LoadingContext.
 * 
 * @dependencies
 * - react-router-dom: useNavigate
 * - nprogress: Loading bar
 * - react-hot-toast: Toast feedback
 * - makeCancelablePromise: Promise wrapper to support cancellation
 * - LoadingContext: Global loading state (optional visual loading screen)
 */

import { useNavigate } from "react-router-dom";
import nprogress from "nprogress";
import "nprogress/nprogress.css";
import "@/styles/nprogress.css"; // Custom styles for nprogress
import { useLoading } from "@/preloading/LoadingContext";
import { showLoadingToast } from "@/components/common/toasts/LoadingToast";
import { makeCancelablePromise } from "@/preloading/makeCancelablePromise";

// Holds the current preload operation so it can be cancelled
let currentPreload = null;

export const usePagePreloader = () => {
  const navigate = useNavigate();
  const { setIsLoading } = useLoading();

  /**
   * Cancels any active preload operation.
   * Prevents navigation or data loading when the user switches routes mid-load.
   */
  const cancelPreload = () => {
    if (currentPreload?.cancel) {
      currentPreload.cancel();
    }
  };

  /**
   * Handles preloading logic and navigation.
   * Displays progress bar and toast feedback, and waits until assets/data are ready.
   *
   * @param {Object} item - The navigation item data (path, preLoadFunc, showToast, etc.).
   */
  const preloadAndNavigate = async (item, useNavigate = true) => {
    const { path, preLoadFunc, showToast, toastMessage, toastDescription } = item;

    // If no preloading required → navigate immediately
    if (!preLoadFunc && !showToast) {
      navigate(path);
      return;
    }

    // Show loading splash screen and start progress bar
    setIsLoading(true);
    nprogress.start();

    // Cancel flag to prevent navigation after cancellation
    let isCancelled = false;
    const cancel = () => {
      isCancelled = true;
      currentPreload?.cancel();
    };

    // Initialize preload promise
    let preloadPromise = Promise.resolve();

    if (typeof preLoadFunc === "function") {
      preloadPromise = preLoadFunc();
    }

    // Make preload cancellable
    const { promise: cancellablePromise, cancel: cancelPromise } = makeCancelablePromise(preloadPromise);
    currentPreload = { cancel: cancelPromise };

    // Set up progress bar and toast feedback

    try {
      // If toast feedback enabled → show loading toast
      if (showToast) {
        await showLoadingToast(cancellablePromise, {
          loadingMessage: toastMessage || "Loading...",
          description: toastDescription || "",
          successMessage: `${item.title} loaded!`,
          errorMessage: `${item.title} cancelled.`,
        });
      } else {
        await cancellablePromise;
      }

      // Only navigate if preload not cancelled
      if (!isCancelled) {
        // Complete process and navigate to page using path
        nprogress.done();

        // navigate 
        if (useNavigate) navigate(path);

      } else {
        // fail gracefully if cancelled
        console.log(`Preload cancelled for ${path}`);
        nprogress.done();
      }
    } catch (err) {
      if (err?.isCanceled) {
        console.log(`Preload was cancelled manually for ${path}`);
      } else {
        console.error(`Preloading failed for ${path}`, err);
      }
      nprogress.done();
    } finally {
      setIsLoading(false);
    }
  };

  return { preloadAndNavigate, cancelPreload };
};
