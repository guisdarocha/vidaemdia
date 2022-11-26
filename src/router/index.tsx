import { createBrowserRouter } from "react-router-dom";
import Exames from "../pages/Exames";
import Home from "../pages/Home";
import QuemSomos from "../pages/QuemSomos";
import Prontuario from "../pages/Prontuario"
import Consultas from "../pages/Consultas";
import { MeuProntuario } from "../pages/MeuProntuario";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/quemsomos",
    element: <QuemSomos />,
  },

  {
    path: "/prontuario",
    element: <Prontuario />,
  },

  
  {
    path: "/exames",
    element: <Exames />,
  },
  {
    path: "/consultas",
    element: <Consultas />,
  },
]);
export default router
