import { ButtonLink } from "./Button.styles"


type ButtonProps = {
  text: string
}

const Button = (props: ButtonProps) => {
  return (
    <ButtonLink to={'#'}>
      teste
    </ButtonLink>
  )
}

export default Button
