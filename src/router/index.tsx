import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Prontuario from "../pages/Prontuario";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/prontuario",
    element: <Prontuario />,
  },
]);
export default router
