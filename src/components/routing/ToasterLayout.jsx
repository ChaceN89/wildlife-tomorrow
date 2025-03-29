/**
 * 
 * @file ToasterLayout.jsx
 * @module ToasterLayout
 * @desc Global Toaster Layout Component
 * 
 * @see {@link https://react-hot-toast.com/ | React Hot Toast Documentation}
 * 
 * @author Chace Nielson
 * @created march 18, 2022
 * @updated march 18, 2022
 * 
 */

import React from 'react'
import { Toaster } from "react-hot-toast"

export default function ToasterLayout() {

  const isSm = window.innerWidth >= 640;

  return (
    <Toaster
      position="top-center"
      reverseOrder={false}
      toastOptions={{
        style: {
          backgroundColor: "var(--color-secondary)",
          border: "2px solid var(--color-tertiary-alt)",
          borderRadius: "12px",
          color: "var(--color-white)",
          padding: "12px 8px",
          boxShadow: "4px 10px 15px 3px rgba(0, 0, 0, 0.9)",
          backdropFilter: "blur(20px)", // frosted glass effect
        },
      }}
    />
  )
}
