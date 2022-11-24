import { Footer } from "../components/Footer/Footer"
import { HighLight } from "../components/HighLight/HighLight.style"
import Parceiros from "../components/Parceiros/Parceiros"
import BannerQuemSomos from "../components/QuemSomos/BannerQuemSomos"
import CarroselQuemSomos from "../components/QuemSomos/CarrosselQuemSomos"
import MvvQuemSomos from "../components/QuemSomos/MvvQuemSomos"
import QuemSomosText from "../components/QuemSomos/QuemSomosText"


const QuemSomos = () => {
  return (
    <>
      <BannerQuemSomos  />
      <QuemSomosText />
      <MvvQuemSomos />
      <CarroselQuemSomos />
      <Parceiros />
      <Footer />
    </>
  )
}

export default QuemSomos
