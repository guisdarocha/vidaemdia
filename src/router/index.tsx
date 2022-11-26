import { createBrowserRouter } from "react-router-dom";
import Exames from "../pages/Exames";
import Home from "../pages/Home";
import QuemSomos from "../pages/QuemSomos";
import Prontuario from "../pages/Prontuario"
import Consultas from "../pages/Consultas";
import { MeuProntuario } from "../pages/MeuProntuario";
import CadastroDeExame from "../pages/CadastroDeExame";
import EditarExame from "../pages/EditarExame";

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
    element: <Exames decoded={[]} date={""} diagnosis={""} idExams={0} exam={""} clinic={""} doctor={""} comments={""} />,
  },
  {
    path: "/exames/cadastroexame",
    element: <CadastroDeExame />,
  },
  {
    path: "/exames/editarexame/:id",
    element: <EditarExame />,
  },
  {
    path: "/consultas",
    element: <Consultas />,
  },
]);
export default router
