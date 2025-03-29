import { useNavigate } from "react-router-dom";
import nprogress from "nprogress";
import { useLoading } from "@/preloading/LoadingContext";
import { showLoadingToast } from "@/components/common/toasts/LoadingToast";

let currentPreload = null;

export const usePagePreloader = () => {
  const navigate = useNavigate();
  const { setIsLoading } = useLoading();

  const cancelPreload = () => {
    if (currentPreload?.cancel) {
      currentPreload.cancel(); // Call the cancel function
    }
  };

  const preloadAndNavigate = async (item) => {
    const { path, preLoadFunc, showToast, toastMessage, toastDescription } = item;

    if (!preLoadFunc && !showToast) {
      navigate(path);
      return;
    }

    setIsLoading(true);
    nprogress.start();

    let isCancelled = false;
    const cancel = () => {
      isCancelled = true;
    };

    currentPreload = { cancel };

    try {
      let preloadPromise = Promise.resolve();

      if (typeof preLoadFunc === "function") {
        preloadPromise = preLoadFunc();
      }

      if (showToast) {
        await showLoadingToast(preloadPromise, {
          loadingMessage: toastMessage || "Loading...",
          description: toastDescription || "",
          successMessage: `${item.title} loaded!`,
        });
      } else {
        await preloadPromise;
      }

      if (!isCancelled) {
        nprogress.done();
        navigate(path);
      } else {
        console.log(`Preload cancelled for ${path}`);
        nprogress.done();
      }
    } catch (err) {
      console.error(`Preloading failed for ${path}`, err);
      nprogress.done();
    } finally {
      setIsLoading(false);
    }
  };

  return { preloadAndNavigate, cancelPreload };
};
