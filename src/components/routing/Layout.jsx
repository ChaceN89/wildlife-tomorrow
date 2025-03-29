/**
 * @file Layout.tsx
 * @module Layout
 * @desc Defines the layout with a fixed navbar, a static sidebar, and a scrollable content section.
 *
 * @author Chace Nielson
 * @created Mar 14, 2025
 * @updated Mar 14, 2025
 */

import NavBar from "@/components/navbar/Navbar";
import ScrollProgress from "@/components/routing/ScrollProgress";
import { Outlet } from "react-router-dom";


export default function Layout() {

  return (
    <div className="flex flex-col min-h-screen min-w-56 mb-1.5">
      <ScrollProgress />
      <NavBar />

      <main className="flex-1 relative flex flex-col overflow-x-hidden">
        <div className="relative ">
          <Outlet />
        </div>
        <div className="mt-auto ">
          <footer className="w-full bg-secondary-alt text-white ">
            <div className="p-4">
              Footer main content
            </div>
            <div className="bg-secondary px-4 py-1 text-sm">
              Secondary content
            </div>
          </footer>
        </div>
      </main>
    </div>
  );
}
