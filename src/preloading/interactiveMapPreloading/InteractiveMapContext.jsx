/**
 * @file InteractiveMapContext.jsx
 * @module preloading/InteractiveMapContext
 * @desc React Context Provider for the Interactive Map page.
 *       Stores and shares preloaded map layers, points of interest (POIs), and image assets
 *       across the InteractiveMap component tree.
 *       
 *       Includes:
 *       - React hook for in-component access (`useInteractiveMapData`)
 *       - Global accessor (`getInteractiveMapContext`) for use during preloading
 *         when hooks can't be used (e.g., preloadInteractiveMap.js).
 * 
 * @usage
 * 1. Wrap your app with <InteractiveMapProvider />
 * 2. Use `useInteractiveMapData()` inside components to consume the context.
 * 3. Use `getInteractiveMapContext()` in your preload function to inject preloaded data.
 * 
 * @author Chace Nielson
 * @created Mar 29, 2025
 * @updated Mar 29, 2025
 */

import React, { createContext, useState } from "react";

// Internal variable to hold the current context state for external access
let _interactiveMapContext = null;

// Create the React Context object
export const InteractiveMapContext = createContext(null);


/**
 * Global getter for accessing the context outside React components (e.g., in preload functions).
 * Throws an error if called before the context has been initialized.
 */
export const getInteractiveMapContext = () => {
  if (!_interactiveMapContext) {
    throw new Error("InteractiveMapContext not initialized. Make sure it's wrapped properly.");
  }
  return _interactiveMapContext;
};

/**
 * The main provider component to wrap around the app or route section that needs access.
 * Stores `mapLayers`, `pointsOfInterest`, and `mapImage`.
 * Exposes a `loadMapData()` function for injecting values during preload.
 */
export const InteractiveMapProvider = ({ children }) => {
  const [mapLayers, setMapLayers] = useState([]);
  const [pointsOfInterest, setPointsOfInterest] = useState([]);
  const [mapImage, setMapImage] = useState(null); // Image asset to simulate loading

  // State to track if data has been loaded - for directly loading the map page
  const [dataIsloaded, setDataIsLoaded] = useState(false);

  /**
   * !!!! this will be replaced by actual mehod for loading the data when we start using real data
   * 
   * Loads new data into the context state.
   * Typically called inside preloadInteractiveMap.js before navigation.
   * 
   * @param {Object} data - Map data to load.
   * @param {Array} data.layers - List of map layers.
   * @param {Array} data.pois - List of points of interest.
   * @param {string} [data.image] - Optional image URL or asset path.
   */
  const loadMapData = ({ layers, pois, image }) => {
    setMapLayers(layers);
    setPointsOfInterest(pois);
    if (image) setMapImage(image);
    setDataIsLoaded(true); // ✅ Mark data as loaded
  };


  // Assign the context to a global ref for external access
  _interactiveMapContext = {
    mapLayers,
    pointsOfInterest,
    mapImage,
    loadMapData,
    dataIsloaded,
  };

  return (
    <InteractiveMapContext.Provider value={_interactiveMapContext}>
      {children}
    </InteractiveMapContext.Provider>
  );
};
