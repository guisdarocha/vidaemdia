import { BlurContainer, ErrorMessage, FormContainer, ModalContainer, StyledButton, StyledContainer, StyledInput } from "./Modal.style"
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import api from '../../api'
import axios from 'axios'

type Inputs = {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
};

const schema = yup.object({
    name: yup.string().required('O nome é obrigatório'),
    email: yup.string().email('Digite um e-mail válido').required('O email é obrigatório'),
    password: yup.string().min(8, 'A senha deve ter no mínimo 8 dígitos').required('Preencha uma senha'),
    confirmPassword: yup.string().required('Confirme sua senha').oneOf([yup.ref("password")], 'As senhas devem ser iguais')
}).required();


export const RegisterModal = () => {

    const navigate = useNavigate()
    const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>({
        resolver: yupResolver(schema)
    });

    const onSubmit: SubmitHandler<Inputs> = (data) => {
        const registerUser = () => {
            api.post('/users',
                {
                    name: data.name,
                    email: data.email,
                    password: data.password
                })
                .then((res) => {
                    console.log(res)
                    alert('Usuário cadastrado com sucesso')
                })
                .catch((err) => {
                    console.log(err)
                    alert('houve um erro')
                });
        }
        registerUser();
        setTimeout(() => window.location.reload(), 1500)
    };

    const closeModal = () => {
        window.location.reload()
    }

    return (
        <BlurContainer>
            <ModalContainer>
                <img className="retangle" src="/biological-scene.png" alt="" />
                <StyledContainer>
                    <p onClick={closeModal}>x</p>
                    <img className="vd-logo" src="/Component1.svg" alt="" />
                    <h3>Bem vindo de volta</h3>
                    <h4>Área de Login</h4>
                    <FormContainer>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <label>
                                Seu nome:
                                <StyledInput {...register("name", { required: true })} className="register" placeholder="Insira seu email" />
                                <ErrorMessage>{errors.name?.message}</ErrorMessage>
                            </label>
                            <label>
                                Email:
                                <StyledInput {...register("email", { required: true })} className="register" placeholder="Insira seu email" />
                                <ErrorMessage>{errors.email?.message}</ErrorMessage>
                            </label>
                            <label>
                                Senha:
                                <StyledInput type='password' {...register("password", { required: true })} className="register" placeholder="Insira sua senha" />
                                <ErrorMessage>{errors.password?.message}</ErrorMessage>
                            </label>
                            <label>
                                Confirme sua senha:
                                <StyledInput type='password' {...register("confirmPassword", { required: true })} placeholder="Insira sua senha" />
                                <ErrorMessage>{errors.confirmPassword?.message}</ErrorMessage>
                            </label>
                            <StyledButton className="button-register"> Cadastre-se </StyledButton>
                        </form>
                    </FormContainer>
                </StyledContainer>
            </ModalContainer>
        </BlurContainer>
    );
}

