import { BlurContainer, FormContainer, ModalContainer, StyledButton, StyledContainer, StyledInput } from "./Modal.style"
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
};

export const RegisterModal = () => {

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
                        <form>
                            <label>
                                Seu nome:
                                <StyledInput {...register("name", { required: true })} className="register" placeholder="Insira seu email" />
                            </label>
                            <label>
                                Email:
                                <StyledInput {...register("email", { required: true })} className="register" placeholder="Insira seu email" />
                            </label>
                            <label>
                                Senha:
                                <StyledInput {...register("password", { required: true })} className="register" placeholder="Insira sua senha" />
                            </label>
                            <label>
                                Confirme sua senha:
                                <StyledInput {...register("confirmPassword", { required: true })} placeholder="Insira sua senha" />
                            </label>
                            <StyledButton> Cadastre-se </StyledButton>
                        </form>
                    </FormContainer>
                </StyledContainer>
            </ModalContainer>
        </BlurContainer>
    );
}

