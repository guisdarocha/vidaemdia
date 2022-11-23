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
                                Seu nome:
                                <StyledInput className="register" placeholder="Insira seu email"/>
                            </label>
                            <label>
                                Email:
                                <StyledInput className="register" placeholder="Insira seu email"/>
                            </label>
                            <label>
                                Senha:
                                <StyledInput className="register" placeholder="Insira sua senha"/>
                            </label>
                            <label>
                                Confirme sua senha:
                                <StyledInput placeholder="Insira sua senha"/>
                            </label>                       
                            <StyledButton> Cadastre-se </StyledButton>
                       </form>
                    </FormContainer>
                </StyledContainer>
            </ModalContainer>
        </BlurContainer>
  );
}

