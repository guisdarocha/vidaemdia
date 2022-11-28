import { BlurContainer, ErrorMessage, FormContainer, ModalContainer, StyledButton, StyledContainer, StyledInput }
    from "./Modal.style"
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import api from "../../api";
import axios from 'axios'

type Inputs = {
    email: string;
    password: string;
};

type LoginModalProps = {
    onClick?: any
}

const schema = yup.object({
    email: yup.string().email('Insira um e-mail válido').required('Preencha o campo de email'),
    password: yup.string().required('Preencha o campo de senha'),
}).required();


export const LoginModal = (props: LoginModalProps) => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>({
        resolver: yupResolver(schema)
    });


    const onSubmit: SubmitHandler<Inputs> = (data) => {
        const loginUser = () => {
            api.post('/login', data)
                .then((res) => {
                    alert('Login bem sucedido')
                    localStorage.setItem('token', `${String(res.data.token)}`);
                    localStorage.setItem('id', `${String(res.data.User.idUser)}`);
                    console.log(res)
                    window.location.reload();

                })
                .catch((error) => {
                    console.log(error)
                    alert('email ou senha inválidos')
                })
        }
        loginUser()
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
                                Email:
                                <StyledInput {...register("email", { required: true })}placeholder="Insira seu email"  />
                                <ErrorMessage>{errors.email?.message}</ErrorMessage>
                            </label>
                            <label>
                                Senha:
                                <StyledInput type='password'  {...register("password", { required: true })} placeholder="Insira sua senha" />
                                <ErrorMessage>{errors.password?.message}</ErrorMessage>
                            </label>
                            <a>Esqueceu sua senha ?</a>
                            <StyledButton> Entrar </StyledButton>
                        </form>
                        <span className="text">ou</span>
                    </FormContainer>
                    <StyledButton onClick={props.onClick} > Cadastre-se </StyledButton>
                </StyledContainer>
            </ModalContainer>
        </BlurContainer>
    );
}
