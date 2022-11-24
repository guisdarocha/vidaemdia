import { BlurContainer, FormContainer, ModalContainer, StyledButton, StyledContainer, StyledInput }
    from "./Modal.style"
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
    email: string;
    password: string;
};

type LoginModalProps = {
    onClick?: any
}

export const LoginModal = (props: LoginModalProps) => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = (data) => {
        console.log(data);
    }

    return (
        <BlurContainer>
            <ModalContainer>
                <img src="/biological-scene.png" alt="" />
                <StyledContainer>
                    <p>x</p>
                    <img src="/Component1.svg" alt="" />
                    <h3>Bem vindo de volta</h3>
                    <h4>Área de Login</h4>
                    <FormContainer>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <label>
                                Email:
                                <StyledInput {...register("email", { required: true })} placeholder="Insira seu email" />
                            </label>
                            <label>
                                Senha:
                                <StyledInput  {...register("password", { required: true })}  placeholder="Insira sua senha" />
                            </label>
                            <a>Esqueceu sua senha ?</a>
                            <StyledButton> Entrar </StyledButton>
                        </form>
                        <span>ou</span>
                    </FormContainer>
                    <StyledButton onClick={props.onClick} > Cadastre-se </StyledButton>
                </StyledContainer>
            </ModalContainer>
        </BlurContainer>
    );
}
