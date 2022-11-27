import lupa from "../../assets/vetor-search-doc.png"
import { SectionCard } from "../Section/Section.style";

import { Footer } from "../Footer/Footer";

type sectionProps = {
}

export default function Section (props: sectionProps) {
    return(
      <>

        <SectionCard className='row justify-content-around align-items-center gy-5'>
            <div className="titulo col-lg-5 mx-1">
                <h1>Seu prontuário em um clique</h1>
                    <h2>Nunca ficou tão fácil criar, editar e organizar
                    seu prontuário médico digital em um só lugar!
                    Com a Vida em Dia você não precisa se preocupar mais
                    em passar as mesmas informações do seu prontuário ou
                    diagnóstico toda vez que for ao médico.
                    </h2>
            </div>
            <img src={lupa} className="col-lg-4"/>
        </SectionCard>
        
    </>
    );
}
