import styled from "styled-components";

// blur effect, show and hide modal on the screen 
export const BlurContainer = styled.div `
   
`

export const ModalContainer = styled.div `
    height: 700px;
    margin-top: 5%;
    margin-bottom: 5%;
    display: flex;
    background-color: white;
    justify-content: center;
`

export const StyledContainer = styled.div `
    
    font-family: roboto;
    margin-left: 1.5%;

    img {
        margin-left: 10%;
        margin-bottom: 2%;
        height: 90px;
    };

    h3 {
        font-size: 2rem;
        font-weight: 700;
        color: #1FC4CC;
        text-align: center;
    };

    h4 {
        margin-top: 5%;
        color: #2C5EDE;
        font-weight: 700;
    };
`

export const FormContainer = styled.div `
    width: 500px;
    font-family: roboto;
    form {
        display: flex;
        flex-direction:column;
    };

    label {
        font-size: 20px;
        font-weight: 300;
        color: #141414;
    };

    span {  
       color: #141414
    }

    a {
        color: #141414;
        margin-top:2%;
        margin-bottom:2%;
        margin-right:20%;
        text-align: end;
    };
`

export const StyledInput = styled.input `
 display: block;
 width: 400px;
 font-family: roboto;

 ::placeholder {
    color: #777777;
    font-size:16px;
 };

`

export const StyledButton = styled.button `
    width: 400px;
    height: 45px;
    background-color: #2C5EDE;
    color: #F5F5F5;
    font-weight: 700;
    font-size: 20px;
    margin-top: 5%;
    margin-bottom: 5%;
`