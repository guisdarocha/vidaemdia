import { ButtonLink } from "./Button.styles"


type ButtonProps = {
  text: string
}

const Button = ({text}: ButtonProps) => {
  return (
    <ButtonLink to={'#'}>
      {text}
    </ButtonLink>
  )
}

export default Button
