import styled from "styled-components";

export const  CadastroExameStyle = styled.form`
    box-sizing: border-box;
    background: #F5F5F5;
    border: 0.9875px solid #CFCFCF;
    border-radius: 15.8px;
    padding: 33px 30px;
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    margin-bottom: 47px;


    input{
    border-radius: 10px;
    border: #DDDFE1 solid 1px;
    max-width: 100%;
    width: 100%;
    min-height: 53px;
    padding-left: 17px;
    }
    input::placeholder{
    color: #abafb3;
    font-size: 14px;


    }

    textarea{
    border-radius: 10px;
    border: #DDDFE1 solid 1px;
    max-width: 100%;
    width: 100%;
    min-height: 53px;
    padding-left: 17px;
    }
    textarea::placeholder{
    color: #abafb3;
    font-size: 14px;


    }

    .salvar{
      text-align: center;
    }

    .exame{
        display: grid;
        margin-top: 20px;
        font-size: 19px;
        input{
        width: 53vw;
        min-width: 100px;
        max-width: 400px;
        margin-top: 9px;

        }

    }
    .diag{
        display: grid;
        margin-top: 20px;
        font-size: 19px;
        input{
        margin-top: 9px;

        }

    }
    .local{
        display: grid;
        margin-top: 20px;
        font-size: 19px;
        input{
        margin-top: 9px;

        }

    }
    .exame{
        display: grid;
        margin-top: 20px;
        font-size: 19px;
        input{
        margin-top: 9px;

        }

    }
    .medico{
        display: grid;
        margin-top: 20px;
        font-size: 19px;
        input{
        margin-top: 9px;

        }

    }
    .obs{
        display: grid;
        margin-top: 20px;
        font-size: 19px;
        margin-bottom: 80px;
        textarea{
        margin-top: 9px;
        height: 300px;
        padding-top: 20px;
        }

    }

    .data{
        display: grid;
        margin-top: 20px;
        font-size: 19px;
        input{
        max-width: 160px;
        margin-top: 9px;

        }
    }


    @media only screen and (max-width: 450px){

        .exame input {
            width: 100%;
        }
    }

`

export const  AceiteTermos = styled.div`
    font-size: 16px;
`
