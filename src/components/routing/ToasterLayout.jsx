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
      position={isSm ? "bottom-right" : "bottom-center"}
      reverseOrder={false}
      toastOptions={{
        style: {
          backgroundColor: "var(--color-primary-alt-transparent)", 
          border: "2px solid var(--color-primary)",
          borderRadius: "12px", 
          padding: "12px 4px", 
          boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.5)", 
          backdropFilter: "blur(20px)", // frosted glass effect
        },
      }}
    />
  )
}
