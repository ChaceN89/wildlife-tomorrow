/**
 * @file AppRoutes.jsx
 * @module routing/AppRoutes
 * @desc Defines top-level application routes and global route transition loading
 *
 * @author Chace Nielson
 * @created Mar 28, 2025
 * @updated Mar 28, 2025
 */

import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import nprogress from "nprogress";
import "nprogress/nprogress.css";

import ScrollRestoration from "@/components/routing/ScrollRestoration";

import Home from "@/components/pages/Home";
import About from "@/components/pages/About";
import InteractiveMap from "@/components/pages/InteractiveMap";
import Layout from "@/components/routing/Layout";
import ScrollProgress from "@/components/routing/ScrollProgress";

export default function AppRoutes() {
  const location = useLocation();

  useEffect(() => {
    nprogress.start();

    // Use timeout to simulate "transition" and avoid instant flicker
    const timeout = setTimeout(() => {
      nprogress.done();
    }, 300); // tweak as needed

    return () => clearTimeout(timeout);
  }, [location.pathname]);

  return (
    <div className="min-w-44 overflow-x-hidden bg-neutral-alt">
      <ScrollRestoration />
      <ScrollProgress />

      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/interactive-map" element={<InteractiveMap />} />
          <Route path="/about" element={<About />} />
        </Route>
      </Routes>
    </div>
  );
}
