import { createBrowserRouter } from "react-router-dom";
import Exames from "../pages/Exames";
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
  {
    path: "/exames",
    element: <Exames />,
  },
]);
export default router
