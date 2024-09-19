import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import NotFoundPage from "./Pages/NotFoundPage.jsx";
import CountryDetail, { countryDetailsLoader } from "./Pages/CountryDetail.jsx";
import { CountriesLoader } from "./CountriesCard.jsx";
import LoadingSpinner from "./LoadingSpinner.jsx";
const LazyDetails = lazy(() => import("./Pages/CountryDetail.jsx"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    loader: CountriesLoader,
    errorElement: <NotFoundPage />,
  },

  {
    path: "Details",
    element: <CountryDetail />,
  },

  {
    path: `Details/:countryId`,
    element: (
      <Suspense fallback={<LoadingSpinner />}>
        <LazyDetails />
      </Suspense>
    ),
    lazy: () => import("./Pages/CountryDetail.jsx"),
    loader: countryDetailsLoader,
    errorElement: <NotFoundPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
