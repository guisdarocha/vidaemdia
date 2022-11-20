import sabin from "../../assets/sabin.svg";
import unimed from "../../assets/unimed.svg";
import conect from "../../assets/conect.svg";
import { ParceirosStyle } from "./HighLight.style"


const Parceiros = () => {
  return (
    <ParceirosStyle className="row d-flex justify-content-center ">
      <div className="col-2 text-center"><img src={unimed} alt="logo Unimed" /></div>
      <div className="col-2 text-center"><img src={sabin} alt="logo Sabin" /></div>
      <div className="col-2 text-center"><img src={conect} alt="logo Conect Sus" /></div>
    </ParceirosStyle>
  )
}

export default Parceiros
