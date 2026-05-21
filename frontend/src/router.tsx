import { createBrowserRouter } from "react-router";
import { AppLayout } from "./components/layout/AppLayout";
import { LandingPage } from "./components/pages/LandingPage";
import { MediaPage } from "./components/pages/MediaPage";
import { PortfolioPage } from "./components/pages/PotfolioPage";
import { ContactPage } from "./components/pages/ContactPage";
import { AboutPage } from "./components/pages/AboutPage";

export const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      { path: "/", element: <LandingPage /> },
      { path: "/about", element: <AboutPage /> },
      { path: "/media", element: <MediaPage /> },
      { path: "/portfolio", element: <PortfolioPage /> },
      { path: "/contact", element: <ContactPage /> },
    ],
  },
]);
