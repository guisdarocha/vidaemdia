import {BlurContainer ,FormContainer, ModalContainer, StyledButton, StyledContainer, StyledInput } from "./Modal.style"

export const RegisterModal = () => {
  return (
        <BlurContainer>
            <ModalContainer>
                <img src="/biological-scene.png" alt="" />
                <StyledContainer>
                    <img src="/Component1.svg" alt="" />                   
                    <h3>Bem vindo de volta</h3>
                    <h4>Área de Login</h4>
                    <FormContainer>
                        <form>
                            <label>
                                Email:
                                <StyledInput placeholder="Insira seu email"/>
                            </label>
                            <label>
                                Senha:
                                <StyledInput placeholder="Insira sua senha"/>
                            </label>
                            <a>Esqueceu sua senha ?</a>
                            <StyledButton> Entrar </StyledButton>
                       </form>
                       <span>_________________________ ou ___________________________  </span>
                    </FormContainer>
                       <StyledButton> Cadastre-se </StyledButton>
                </StyledContainer>
            </ModalContainer>
        </BlurContainer>
  );
}
