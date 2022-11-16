import { FooterContainer, IconsContainer } from "./Footer.styles"


export const Footer = () => {
  return (
    <FooterContainer>
        <span>
          © Copyright – Todos os Direitos Reservados – Desenvolvido por TTG – Three Tech Groups
        </span>
        <IconsContainer>
          <img src="/instagram.png" alt="logotipo do instagram" />
          <img src="/facebook.png" alt="logotipo do facebook" />
          <img src="/linkedin.png" alt="logotipo do linkedin" />
        </IconsContainer>
    </FooterContainer>
  )
}
