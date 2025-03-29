/**
 * @file preloadInteractiveMap.js
 * @module preloading/preloadInteractiveMap
 * @desc Handles preloading logic for the Interactive Map page. 
 *       This function is called by usePagePreloader() before navigating to the map route.
 *       It preloads heavy assets (map data, layers, and points of interest) and stores them in context.
 *
 * @author Chace Nielson
 * @created Mar 28, 2025
 * @updated Mar 29, 2025
 *
 * @usage
 * In your navItems configuration:
 * {
 *   title: "Interactive Map",
 *   path: "/interactive-map",
 *   preLoadFunc: preloadInteractiveMap,
 *   showToast: true,
 *   toastMessage: "Loading Interactive Map...",
 *   toastDescription: "Fetching map layers and assets.",
 * }
 *
 * This ensures the page only navigates after data is loaded.
 */

import nprogress from "nprogress";
import "nprogress/nprogress.css";
import "@/styles/nprogress.css"; // Custom NProgress styles

// the Context API to set the preloaded data and its infoamtion
import { getInteractiveMapContext } from "@/preloading/interactiveMapPreloading/InteractiveMapContext";


// Just for this file, to keep the code clean and load a file
const preloadImage = (src) => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.src = src;
    img.onload = () => resolve(src); // ✅ Return the src only
    img.onerror = reject;
  });
};

// this shold work with the context to set data and avoid setting data that already exists 



export const preloadInteractiveMap = async () => {
  nprogress.start();

  try {
    nprogress.set(0.2);
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const imagePath = "/range4.png";
    const loadedImage = await preloadImage(imagePath);

    const { loadMapData } = getInteractiveMapContext();
    loadMapData({
      layers: [
        { name: "Grizzly Range", type: "Polygon", year: 2021 },
        { name: "Fire History", type: "Raster", year: 2019 },
      ],
      pois: [{ title: "Grizzly Habitat", lat: 51.05, lng: -114.07 }],
      image: loadedImage,
    });


    nprogress.set(1);

  } catch (error) {
    console.error("❌ Failed to preload Interactive Map data:", error);
    throw error;
  } finally {
    nprogress.done();
  }

  return true;
};

