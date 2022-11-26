import { BemVindoStyle } from "./BemVindo.style"

type BemVindoProps = {
  user: string
  text?: string
  subtext?: string
}



const BemVindo = ({user, text, subtext}: BemVindoProps) => {
  return (
    <BemVindoStyle className="row">
      <div className="col-md-10 col-12">
        <h1>Olá,<br /><span>{user}</span></h1>
      </div>
      <h3>{text}</h3>
      <h4>{subtext}</h4>
    </BemVindoStyle>
  )
}

export default BemVindo
