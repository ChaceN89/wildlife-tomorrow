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
import "@/styles/nprogress.css"; // Custom styles for nprogress

import ScrollRestoration from "@/components/routing/ScrollRestoration";

import Home from "@/components/pages/Home";
import About from "@/components/pages/About";
import InteractiveMap from "@/components/pages/InteractiveMap";
import Layout from "@/components/routing/Layout";
import { AnimatePresence } from "framer-motion";

export default function AppRoutes() {
  const location = useLocation();

  useEffect(() => {
    nprogress.configure({ showSpinner: true });
    nprogress.start();
    nprogress.set(0.0);

    const timer1 = setTimeout(() => nprogress.set(0.4), 1200);
    const timer2 = setTimeout(() => nprogress.set(0.2), 1500);
    const timer3 = setTimeout(() => {
      nprogress.set(1.0);
      nprogress.done();
    }, 2200);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, [location.pathname]);


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
