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
// import nprogress from "nprogress";
// import "nprogress/nprogress.css";
// import "@/styles/nprogress.css"; // Custom styles for nprogress

import ScrollRestoration from "@/components/routing/ScrollRestoration";

import Home from "@/components/pages/Home";
import About from "@/components/pages/About";
import InteractiveMap from "@/components/pages/InteractiveMap";
import Layout from "@/components/routing/Layout";
import { AnimatePresence } from "framer-motion";


export default function AppRoutes() {
  const location = useLocation();

  return (
    <div className="min-w-44 overflow-x-hidden bg-neutral-alt">
      <ScrollRestoration />
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/interactive-map" element={<InteractiveMap />} />
            <Route path="/about" element={<About />} />
          </Route>
        </Routes>
      </AnimatePresence>
    </div>
  );
}
