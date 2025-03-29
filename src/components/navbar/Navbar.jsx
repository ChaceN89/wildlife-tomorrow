/**
 * @file NavBar.jsx
 * @module routing/NavBar
 * @desc Defines the top navigation bar with route links and preload logic.
 * 
 * @created Mar 28, 2025
 * @updated Mar 28, 2025
 */

import React from "react";
import { useLocation } from "react-router-dom";
// generic loader for loading page context
import { usePagePreloader } from "@/preloading/usePagePreloader";

// route data - specific to each page 
import { navItems } from "@/data/navItems";

export default function NavBar() {
  const location = useLocation();
  // usePagePreloader is a custom hook that handles preloading logic
  const { preloadAndNavigate, cancelPreload } = usePagePreloader();

  // function for handling click events
  const handleClick = (item) => (e) => {
    e.preventDefault();
    if (location.pathname === item.path) return;

    cancelPreload(); // Cancel any current preload
    preloadAndNavigate(item);
  };

  return (
    <nav className="flex items-center justify-between p-4 bg-neutral text-black shadow-md border-secondary border-b-1">
      <div className="text-lg font-bold flex items-center gap-2">
        <img className="h-8 w-8" src="/icons/bear-paw-128.ico" />
        Wildlife Tomorrow
      </div>
      <div className="flex gap-4">
        {navItems.map((item) => (
          <a
            key={item.path}
            href={item.path}
            onClick={handleClick(item)}
            className={`px-3 py-2 rounded hover:bg-tertiary ${location.pathname === item.path ? "bg-primary text-white" : ""
              }`}
          >
            {item.title}
          </a>
        ))}
      </div>
    </nav>
  );
}
