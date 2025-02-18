import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Apod, HomeLayout, Hubble, Landing, News, SpaceX, Webb } from "./pages";
import { newsPageLoader } from "./pages/News";
import ErrorElement from "./components/ErrorElement";
import { hubblePageLoader } from "./pages/Hubble";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      { index: true, element: <Landing /> },
      {
        path: "news",
        element: <News />,
        loader: newsPageLoader,
        errorElement: <ErrorElement />,
      },
      { path: "webb", element: <Webb /> },
      { path: "spacex", element: <SpaceX /> },
      { path: "apod", element: <Apod /> },
      {
        path: "hubble",
        element: <Hubble />,
        loader: hubblePageLoader,
        errorElement: <ErrorElement />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);
