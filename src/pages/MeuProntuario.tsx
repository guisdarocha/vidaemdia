import { propTypes } from "react-bootstrap/esm/Image"
import BemVindo from "../components/BemVindo/BemVindo"
import Button from "../components/Button/Button"
import CardExame from "../components/CardExame/CardExame"
import { Footer } from "../components/Footer/Footer"
import Header from '../components/Header'
import { TopSection } from "./Exames.style"
import MyProntuario from "./Prontuario"



type MeuProntuarioProps = {
  name: string,
	email: string,
  password: string,
	birthDate: string,
	telephone: string,
	maritalStatus: string,
	sex: string,
	weight: string,
	height: string,
	zipCode: string,
	address: string,
	number:  string,
	neighborhood:  string,
	complement:  string,
	state:  string,
	city:  string,
	smoke:  string,
	drugs:  string,
	exercises: string,
	recreation:  string,
	familialDisease:  string,
	treatment: string,
	allergy: string,
  pregnant: string,
	medicines: string,
	disease: string,
	bloodType: string,
	status: boolean	
};

export const MeuProntuario = ({ 
  name, email, password, birthDate, telephone, maritalStatus, sex, weight, height, zipCode, address,
  number, neighborhood, complement, state, city, smoke, drugs, exercises, recreation, familialDisease,
  treatment, allergy, pregnant, medicines, disease, bloodType, status}: MeuProntuarioProps) => {
  return (
    <>
      <Header/>
      <MyProntuario/>
      <Footer />
    </>
  )
}
