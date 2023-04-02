import { AboutPage } from "./pages/about";
import { BlogPage } from "./pages/blog";
import { ContactPage } from "./pages/contact";
import { GalleryPage } from "./pages/gallery";
import { HomePage } from "./pages/home";
import { TourPackagesPage } from "./pages/packages";

const routes = [
  {
    path: "/",
    exact: true,
    Element: <HomePage />,
  },
  {
    path: "/about",
    exact: true,
    Element: <AboutPage />,
  },
  {
    path: "/tourpackage",
    exact: true,
    Element: <TourPackagesPage />,
  },
  {
    path: "/gallery",
    exact: true,
    Element: <GalleryPage />,
  },
  {
    path: "/blog",
    exact: true,
    Element: <BlogPage />,
  },
  {
    path: "/contact",
    exact: true,
    Element: <ContactPage />,
  },
];

export default routes;
