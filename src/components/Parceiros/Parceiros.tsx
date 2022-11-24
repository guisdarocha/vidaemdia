import sabin from "../../assets/img/sabin.svg";
import unimed from "../../assets/img/unimed.svg";
import conect from "../../assets/img/conect.svg";
import { ParceirosStyle } from "./HighLight.style"
import HighLight from "../HighLight/HighLight";


const Parceiros = () => {
  return (
    <ParceirosStyle className="row d-flex justify-content-center ">
        <HighLight text="Nossos parceiros"/>
        <div className="col-lg-2 col-md-12 col-sm-12 col-12 text-center unimed margin"><img src={unimed} alt="logo Unimed" /></div>
        <div className="col-lg-2 col-md-6 col-sm-6 col-6 text-center margin"><img src={sabin} alt="logo Sabin" /></div>
        <div className="col-lg-2 col-md-6 col-sm-6 col-6 text-center margin"><img src={conect} alt="logo Conect Sus" /></div>
    </ParceirosStyle>
  )
}

export default Parceiros
