import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import Home from "./pages/Home";
import SemesterPage from "./pages/SemesterPage";
import SubjectPage from "./pages/SubjectPage";
import ResourceDetail from "./pages/ResourceDetail";
import AnnouncementsPage from "./pages/AnnouncementsPage";
import AdminLogin from "./pages/AdminLogin";
import NotFound from "./pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "semester/:sem", Component: SemesterPage },
      { path: "subject/:subject", Component: SubjectPage },
      { path: "resource/:id", Component: ResourceDetail },
      { path: "announcements", Component: AnnouncementsPage },
      { path: "admin/login", Component: AdminLogin },
      { path: "*", Component: NotFound },
    ],
  },
]);
