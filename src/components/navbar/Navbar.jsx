/**
 * @file NavBar.tsx
 * @module routing/NavBar
 * @desc Defines the top navigation bar with route links for main pages.
 * 
 * @author Chace Nielson
 * @created Mar 28, 2025
 * @updated Mar 28, 2025
 */

import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  const navItems = [
    { title: "Home", path: "/" },
    { title: "Interactive Map", path: "/interactive-map" },
    { title: "About", path: "/about" },
  ];

  return (
    <nav className="flex items-center justify-between p-4 bg-primary text-white shadow-md">
      <div className="text-lg font-bold flex items-center gap-2"><img className="h-8 w-8" src="/icons/bear-paw-128.ico" />  Wildlife Tomorrow</div>
      <div className="flex gap-4">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `px-3 py-2 rounded hover:bg-secondary ${isActive ? "bg-secondary" : ""
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
