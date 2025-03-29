/**
 * @file InteractiveMap.jsx
 * @module pages/InteractiveMap
 * @desc Displays the interactive map page with preloaded data fetched before navigation.
 *       Uses preloading context to provide map layers, points, and metadata.
 *
 * @created Mar 28, 2025
 * @updated Mar 29, 2025
 */

import React, { useContext } from "react";
import { InteractiveMapContext } from "@/preloading/interactiveMapPreloading/InteractiveMapContext";

export default function InteractiveMap() {

  // cehck if the context has a is loaded and i can dispay the data other wise load it

  // Consume preloaded data from context
  const { mapLayers, pointsOfInterest, mapImage, isLoaded } = useContext(InteractiveMapContext);

  return (
    // {isLoading based on context from reloading the page}

    <div className="p-10 bg-tertiary-alt text-black min-h-screen">
      {!isLoaded && (
        <div className="">
          <div className="loader">Loading</div>
        </div>
      )}
      {/* Page content */}
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
