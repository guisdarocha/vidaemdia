import { ButtonLink, ButtonSubmit } from "./Button.styles"


type ButtonProps = {
  text: string,
  link: string
}

const Button = ({text, link}: ButtonProps) => {
  return (
    <ButtonLink to={link}>
      {text}
    </ButtonLink>
  )
}

export const ButtonS = ({text, link}: ButtonProps) => {
  return (
    <ButtonSubmit>
      {text}
    </ButtonSubmit>
  )
}

export default Button
