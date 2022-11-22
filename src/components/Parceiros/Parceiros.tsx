import sabin from "../../assets/sabin.svg";
import unimed from "../../assets/unimed.svg";
import conect from "../../assets/conect.svg";
import { ParceirosStyle } from "./Parceiros.style"


const Parceiros = () => {
  return (
    <ParceirosStyle className="row d-flex justify-content-center ">
      <div className="col-lg-2 col-md-12 col-sm-12 col-12 text-center unimed"><img src={unimed} alt="logo Unimed" /></div>
      <div className="col-lg-2 col-md-6 col-sm-6 col-6 text-center"><img src={sabin} alt="logo Sabin" /></div>
      <div className="col-lg-2 col-md-6 col-sm-6 col-6 text-center"><img src={conect} alt="logo Conect Sus" /></div>
    </ParceirosStyle>
  )
}

export default Parceiros
