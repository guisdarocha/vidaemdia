import styled from "styled-components";

export const  SuporteStyle = styled.div`
    margin: 10vw 0;

    .salvar {
        display: flex;
        justify-content: center;
        margin-top: 5vw;
    }

    h1 {
        font-size: 60px;
        margin-bottom: 3vw;

        @media only screen and (max-width: 700px){
        font-size: 40px;
    }
    }

    b {
        color: #2C5EDE;
    }

    h2 {
        color: #2C5EDE;
        font-size: 31px;
        margin-bottom: 5vw;

        @media only screen and (max-width: 700px){
        font-size: 20px;
    }
        @media only screen and (max-width: 375px){
        font-size: 15px;
    }
    }

`
