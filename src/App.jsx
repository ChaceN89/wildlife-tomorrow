/**
 * @file App.jsx
 * @module App
 * @desc Displays a color theme palette preview using Tailwind and CSS variables.
 *
 * @author Chace Nielson
 * @created Mar 28, 2025
 * @updated Mar 28, 2025
 */

import { Suspense } from "react";
import { BrowserRouter as Router } from 'react-router-dom';
import AnalyticsProvider from "@/analytics/AnalyticsProvider";
import { LoadingProvider } from '@/preloading/LoadingContext'

// Components
import { lazy, memo } from "react";
import ErrorBoundary from "@/components/routing/ErrorBoundary";
import SplashScreen from "@/components/routing/SplashScreen";
import DisplayTesting from "@/components/development/DisplayTesting";
import ToasterLayout from "@/components/routing/ToasterLayout";

// Lazy load the AppRoutes component
const AppRoutes = memo(lazy(() => import("@/components/routing/AppRoutes"))); // Memoized Home component

export default function App() {
  return (
    <ErrorBoundary>
      <Suspense fallback={<SplashScreen />}>
        <Router>
          <ToasterLayout />
          <DisplayTesting />
          <AnalyticsProvider>
            <LoadingProvider>
              <AppRoutes />
            </LoadingProvider>
          </AnalyticsProvider>
        </Router>
      </Suspense>
    </ErrorBoundary>
  )
}