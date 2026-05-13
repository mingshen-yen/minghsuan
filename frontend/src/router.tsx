import { createBrowserRouter } from "react-router";
import { AppLayout } from "./components/layout/AppLayout";
import { LandingPage } from "./components/pages/LandingPage";
import { AboutPage } from "./components/pages/AboutPage";
import { PortfolioPage } from "./components/pages/PotfolioPage";
import { ContactPage } from "./components/pages/ContactPage";

export const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      { path: "/", element: <LandingPage /> },
      { path: "/about", element: <AboutPage /> },
      { path: "/portfolio", element: <PortfolioPage /> },
      { path: "/contact", element: <ContactPage /> },
    ],
  },
]);
