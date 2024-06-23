import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/homepage/HomePage.jsx";
import MoviesPage from "./pages/MoviesPage.jsx";
import TVSeriesPage from "./pages/TVSeriesPage.jsx";
import BookmarkedPage from "./pages/BookmarkedPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        element: <HomePage />,
        index: true,
      },
      {
        path: "/movies",
        element: <MoviesPage />,
      },
      {
        path: "/tv-series",
        element: <TVSeriesPage />,
      },
      {
        path: "/bookmarked",
        element: <BookmarkedPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
