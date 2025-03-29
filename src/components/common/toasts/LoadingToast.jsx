/**
 * @file LoadingToast.jsx
 * @module toasts/LoadingToast
 * @desc Provides a loading toast with extra description using react-hot-toast promise style.
 * 
 * @created Mar 29, 2025
 * @updated Mar 29, 2025
 */

import { toast } from "react-hot-toast";
import React from "react";

export const showLoadingToast = (promise, {
  loadingMessage = "Loading...",
  description = "",
  successMessage = "Loaded!",
  errorMessage = "Failed to load",
} = {}) => {

  // return a promise that resolves or rejects based on the passed promise - displays a toast
  return toast.promise(
    promise,
    {
      // Custom loading toast to display while the promise is pending
      loading: (
        <div className="flex items-center gap-3">
          {/* Custom Spinner */}
          <svg
            className="animate-spin h-6 w-6 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8v4l3.5-3.5L12 0v4a8 8 0 00-8 8z"
            />
          </svg>

          <div>
            <div>{loadingMessage}</div>
            {description && <div className="text-sm text-gray-300 mt-1">{description}</div>}
          </div>
        </div>
      ),

      // message for success or error of the promise
      success: successMessage,
      error: errorMessage,
    },
  );
};
