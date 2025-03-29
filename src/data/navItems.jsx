import { preloadInteractiveMap } from "@/preloading/pagePreloaders/preloadInteractiveMap";

export const navItems = [
  {
    title: "Home",
    path: "/",
    preLoadFunc: null,
    showToast: false,
  },
  {
    title: "Interactive Map",
    path: "/interactive-map",
    preLoadFunc: preloadInteractiveMap,
    showToast: true,
    toastMessage: "Loading Interactive Map...",
    toastDescription: "Fetching map layers and assets.",
  },
  {
    title: "About",
    path: "/about",
    preLoadFunc: null,
    showToast: false,
  },
];
