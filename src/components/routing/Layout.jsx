/**
 * @file Layout.tsx
 * @module Layout
 * @desc Defines the layout with a fixed navbar, a static sidebar, and a scrollable content section.
 *
 * @author Chace Nielson
 * @created Mar 14, 2025
 * @updated Mar 14, 2025
 */

import Footer from "@/components/footer/Footer";
import NavBar from "@/components/navbar/Navbar";
import ScrollProgress from "@/components/routing/ScrollProgress";
import { Outlet } from "react-router-dom";
import { useLoading } from "@/preloading/LoadingContext";


export default function Layout() {
  const { isLoading } = useLoading();

  return (
    <div className="flex flex-col min-h-screen min-w-56 mb-1.5">
      <ScrollProgress />
      <NavBar />
      <main className="flex-1 relative flex flex-col overflow-x-hidden">
        <div className="relative ">
          <div>
            {/* {isLoading && (
              <div className="fixed inset-0 z-50 flex items-center justify-center bg-neutral-alt">
                <div className="loader">Loading</div>
              </div>
            )} */}
          </div>
          <Outlet />
        </div>
        <div className="mt-auto ">
          <Footer />
        </div>
      </main>
    </div>
  );
}
