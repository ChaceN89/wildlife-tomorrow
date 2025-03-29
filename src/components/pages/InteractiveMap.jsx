/**
 * @file InteractiveMap.jsx
 * @module pages/InteractiveMap
 * @desc Displays the Interactive Map page.
 *       Handles loading and displaying preloaded map data including layers, POIs, and image assets.
 *       Ensures data is loaded even if user navigates directly to this page (via page reload or direct link).
 * 
 * @features
 * - Retrieves map data from InteractiveMapContext.
 * - Triggers preloading logic if data is not already loaded.
 * - Displays a splash screen while loading.
 * - Shows map layers, POIs, and preview image after data is ready.
 * 
 * @usage
 * This component is rendered at `/interactive-map` route.
 * It automatically calls preload logic on mount if preloading has not been done.
 * 
 * @author Chace Nielson
 * @created Mar 28, 2025
 * @updated Mar 30, 2025
 */

import React, { useContext, useEffect, useRef } from "react";
import { InteractiveMapContext } from "@/preloading/interactiveMapPreloading/InteractiveMapContext";
import SplashScreen from "@/components/routing/SplashScreen";
import { usePagePreloader } from "@/preloading/usePagePreloader";
import { navItems } from "@/data/navItems";

export default function InteractiveMap() {
  const hasPreloadedRef = useRef(false);

  // Get preloaded data from context
  const { mapLayers, pointsOfInterest, mapImage, dataIsloaded } = useContext(InteractiveMapContext);
  const { preloadAndNavigate } = usePagePreloader();

  // If data is not loaded (e.g. direct access), trigger preload once
  useEffect(() => {
    if (hasPreloadedRef.current) return;
    hasPreloadedRef.current = true;

    if (!dataIsloaded) {
      const item = navItems.find((item) => item.path === "/interactive-map");
      preloadAndNavigate(item, false); // Pass false to avoid triggering navigation
    }
  }, []);

  // Show splash screen while loading data
  if (!dataIsloaded) {
    return <SplashScreen />
  }

  // Render loaded map data
  return (
    <div className="p-10 bg-tertiary-alt text-black min-h-screen">
      <h1 className="text-3xl font-bold mb-4">Interactive Map</h1>
      <p className="mb-6">This page will display an interactive map after preloading the necessary data.</p>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Loaded Map Layers:</h2>
        <ul className="list-disc ml-5">
          {mapLayers.map((layer, index) => (
            <li key={index}>
              <strong>{layer.name}</strong> — {layer.type} ({layer.year})
            </li>
          ))}
        </ul>
      </section>

      {mapImage && (
        <img src={mapImage} alt="Map Preview" className="w-full max-h-96 object-cover my-4" />
      )}

      <section>
        <h2 className="text-xl font-semibold mb-2">Points of Interest:</h2>
        <ul className="list-disc ml-5">
          {pointsOfInterest.map((poi, index) => (
            <li key={index}>
              {poi.title} at ({poi.lat}, {poi.lng})
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
