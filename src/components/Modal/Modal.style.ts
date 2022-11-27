import styled from "styled-components";

// blur effect, show and hide modal on the screen 
export const BlurContainer = styled.div `
   z-index: 999;
   height: 200%;
   width: 100vw;
   position: fixed;
   top: 0;
   background-color: rgba(0,0,0,0.75);
   /* display: none; */
   
`

export const ModalContainer = styled.div `
    height: 800px;
    width: 800px;
    margin: auto;
    margin-top: 3%;
    margin-bottom: 5%;
    display: flex;
    background-color: white;
    justify-content: center;
    border-radius: 42px;

    @media only screen and (max-width: 1280px) {
        height: 750px;
        margin-top: 2%;
    }

    @media only screen and (max-width: 428px) {
        width: 300px;      
    
        .retangle {
            display: none;
        }

        .vd-logo {
            height: 70px;
            margin-left: 110px;
        }
    }
`

export const StyledContainer = styled.div `
    
    font-family: roboto;
    margin-left: 4.5%;

    p {
        font-size: 27px;
        font-weight: 700;
        display: block;
        margin-left: 83%;
        color: #2C5EDE;
    }

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
    
    @media only screen and (max-width: 428px) {
        h4 {
            margin-left: 200px;
            margin-bottom: 15px;
            font-size: 15px;
        }
        label {
            margin-left: 110px;
        }
    }
`

export const FormContainer = styled.div `
    width: 500px;
    font-family: roboto;
    form {
        display: flex;
        flex-direction:column;
    };

    label {
        height: 115px;
        font-size: 20px;
        font-weight: 300;
        color: #141414;
    };

    .text {  
       color: #141414;
       font-size: 20px;
       margin-left: 39%;   
    };

    a {
        color: #141414;
        margin-top:2%;
        margin-bottom:2%;
        margin-right:20%;
        text-align: end;
        font-size:16px
    }; 
    
    @media only screen and (max-width: 428px) {
     a {
        margin-right: 35%;
     }

     .text {
        margin-left: 46.75%;
     }
 }
    
`
export const ErrorMessage = styled.span ` 
    width: 450px;
    color: red;
    font-size: 14px;
    display: inline-block;
    position: relative;
    right: 45px;
    bottom: 5px;
    text-align: end;   
`
export const StyledInput = styled.input `
 display: block;
 height: 45px;
 width: 400px;
 font-family: roboto;
 font-size: 18px;
 border: 0.31px solid #494949;
 border-radius: 2px;
 color:#494949;

 &.register {
    margin-bottom: 3.5%;  
 };

 ::placeholder {
    color: #777777;
    font-size:16px;
 };

 @media only screen and (max-width: 428px) {
    width: 270px;
    margin-top:10px ;
    border-radius: 42px;
 }
 
`

export const StyledButton = styled.button `
    width: 380px;
    height: 45px;
    background-color: #2C5EDE;
    color: #F5F5F5;
    font-weight: 700;
    font-size: 20px;
    margin-top: 5%;
    margin-bottom: 5%;
    margin-left: 3%;

    @media only screen and (max-width: 1280px) {
        &.button-register {
            position: relative;
            bottom: 30px;
        }
    }

    @media only screen and (max-width: 428px) {
        width: 250px;
        margin-left: 120px;
        border-radius: 42px;
 }
`