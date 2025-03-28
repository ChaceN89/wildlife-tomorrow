/**
 * @file SplashScreen.jsx
 * @module SplashScreen
 * @desc Displays a loading state with a logo while the site content is being loaded, or an error message.
 *
 * @author Chace Nielson
 * @created Mar 15, 2025
 * @updated Mar 16, 2025 by Chace Nielson
 */

import React from 'react';
import splash from '/wildlife-tomorrow-logo.png'; // Import the logo image
import { FiAlertCircle } from "react-icons/fi"; // Import error icon from react-icons

export default function SplashScreen({ errorMsg = false, errorText = null, errorLocation = null }) {
  return (
    <div className="flex flex-col justify-between min-h-screen  relative overflow-hidden bg-primary">
        <div className="flex flex-col items-center justify-center flex-grow">
        <img src={splash} alt="Site Logo" className="mb-4 w-40 h-40 animate-spin-slow" />
        <div className="text-xl text-gray-600 text-center">
          {errorMsg ? (
            <div className="flex flex-col items-center">
              <FiAlertCircle className="w-12 h-12 mb-2 text-white" />
              <span className="text-gray-600">{errorText}</span>
              {errorLocation && (
                <span className="text-sm text-gray-200 mt-2">📍 {errorLocation}</span>
              )}
            </div>
          ) : (
            <span className="hex-dots ml-2 flex gap-1 items-center justify-center">
              Loading ...
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
