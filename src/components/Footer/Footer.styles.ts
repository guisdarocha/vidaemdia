import styled from "styled-components";

export const FooterContainer = styled.div `
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;

    color: #F5F5F5;
    background-color:#2C5EDE;
    height:120px;

    font-family: Roboto;
    font-weight: 400;
    font-size: 20px;

    
    @media only screen and (max-width: 375px) {
        flex-direction: column;

        span {
            font-size: 12px;
            text-align: center;
            width: 280px;
        }
    }    
    @media only screen and (max-width: 390px) {
        flex-direction: column;

        span {
            font-size: 12px;
            text-align: center;
            width: 280px;
        }
    }    
`

export const IconsContainer = styled.div `
    margin-left: 5%;

    img {
        padding: 0 10px;
    }
   
    @media only screen and (max-width: 375px) {
        img {
            height: 25px;
            margin-top:8px;
        }
    }
    
    @media only screen and (max-width: 390px) {
        img {
            height: 25px;
            margin-top: 8px;
        }
    }

`

