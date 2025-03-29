/**
 * @file NavBar.jsx
 * @module routing/NavBar
 * @desc Top-level navigation component for the application. Includes route-aware links
 *       and custom preloading logic using the usePagePreloader hook.
 *       Supports cancellation of in-progress route preloads to avoid race conditions.
 *
 * @author Chace Nielson
 * @created Mar 29, 2025
 * @updated Mar 29, 2025
 *
 * @features
 * - Dynamically renders links from a centralized navItems config.
 * - Uses NavLink for automatic active styling based on the current route.
 * - Integrates with custom preloading logic to show toast feedback and delay navigation until ready.
 * - Cancels any active preload operation when the user navigates to a different route mid-load.
 *
 * @dependencies
 * - react-router-dom: NavLink and useLocation
 * - usePagePreloader: Custom hook handling preload and navigation logic
 * - navItems: Configured array of route data (path, title, preloadFn, etc.)
 */


import React from "react";
import { useLocation, NavLink } from "react-router-dom";
import { usePagePreloader } from "@/preloading/usePagePreloader";
import { navItems } from "@/data/navItems";

export default function NavBar() {
  // Get the current location and page preloader function and its cancellation function
  const location = useLocation();
  const { preloadAndNavigate, cancelPreload } = usePagePreloader();

  // handle click on a navigation item
  const handleClick = (item) => (e) => {
    e.preventDefault(); // Prevent default navigation
    cancelPreload(); // Cancel any ongoing preload
    if (location.pathname === item.path) return; // Already on this page return
    preloadAndNavigate(item); // Navigate to the new page  or preload and navigate
  };

  return (
    <nav className="flex items-center justify-between p-4 bg-neutral text-black shadow-md border-secondary border-b-1">
      <div className="text-lg font-bold flex items-center gap-2">
        <img className="h-8 w-8" src="/icons/bear-paw-128.ico" alt="Logo" />
        Wildlife Tomorrow
      </div>
      <div className="flex gap-4">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            onClick={handleClick(item)}
            className={({ isActive }) =>
              `px-3 py-2 rounded hover:bg-tertiary ${isActive ? "bg-primary text-white" : ""
              }`
            }
          >
            {item.title}
          </NavLink>
        ))}
      </div>
    </nav>
  );
}
