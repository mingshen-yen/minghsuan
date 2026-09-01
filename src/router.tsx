import { createBrowserRouter } from "react-router";
import { AppLayout } from "./components/layout/AppLayout";
import { LandingPage } from "./components/pages/LandingPage";
import { MediaPage } from "./components/pages/MediaPage";
import { ProjectsPage } from "./components/pages/ProjectsPage";
import { ProjectDetailPage } from "./components/pages/ProjectDetailPage";
import { ContactPage } from "./components/pages/ContactPage";
import { AboutPage } from "./components/pages/AboutPage";
import { LinksPage } from "./components/pages/LinksPage";

/**
 * Every page exists in both languages. Content that has no translation yet
 * falls back to English inside the page, so the language toggle never dead-ends.
 */
const pages = [
  { index: true, element: <LandingPage /> },
  { path: "about", element: <AboutPage /> },
  { path: "media", element: <MediaPage /> },
  { path: "portfolio", element: <ProjectsPage /> },
  { path: "portfolio/:slug", element: <ProjectDetailPage /> },
  { path: "contact", element: <ContactPage /> },
  { path: "links", element: <LinksPage /> },
];

export const router = createBrowserRouter([
  { path: "/", element: <AppLayout lang="en" />, children: pages },
  { path: "/zh", element: <AppLayout lang="zh" />, children: pages },
]);
