import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import QuemSomos from "../pages/QuemSomos";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/quemsomos",
    element: <QuemSomos />,
  },
]);
export default router
