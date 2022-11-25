import { BlurContainer, FormContainer, ModalContainer, StyledButton, StyledContainer, StyledInput } from "./Modal.style"
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

type Inputs = {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
};

const schema = yup.object({
    name: yup.string().required('O nome é obrigatório'),
    email: yup.string().email('Digite um e-mail válido').required('O email é obrigatório'),
    password: yup.string().min(8,'A senha deve ter no mínimo 8 dígitos').required('Preencha uma senha'),
    confirmPassword: yup.string().required('Confirme sua senha').oneOf([yup.ref("password")], 'As senhas devem ser iguais')
}).required();


export const RegisterModal = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>({
        resolver: yupResolver(schema)
    });

    const onSubmit: SubmitHandler<Inputs> = (data) => {
        console.log(data);
    };

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
                                <span></span>
                            </label>
                            <label>
                                Email:
                                <StyledInput {...register("email", { required: true })} className="register" placeholder="Insira seu email" />
                                <span></span>
                            </label>
                            <label>
                                Senha:
                                <StyledInput {...register("password", { required: true })} className="register" placeholder="Insira sua senha" />
                                <span></span>
                            </label>
                            <label>
                                Confirme sua senha:
                                <StyledInput {...register("confirmPassword", { required: true })} placeholder="Insira sua senha" />
                                <span></span>
                            </label>
                            <StyledButton> Cadastre-se </StyledButton>
                        </form>
                    </FormContainer>
                </StyledContainer>
            </ModalContainer>
        </BlurContainer>
    );
}

