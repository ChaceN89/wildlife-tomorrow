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
  return toast.promise(
    promise,
    {
      loading: (
        <div>
          <div>{loadingMessage}</div>
          {description && <div>{description}</div>}
        </div>
      ),
      success: successMessage,
      error: errorMessage,
    },
    {
      style: {
        borderRadius: "8px",
        background: "#333",
        color: "#fff",
      },
    }
  );
};
