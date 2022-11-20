import styled from "styled-components";

export const  ProntuarioStyle = styled.form`

background: #F5F5F5;
border: 0.9875px solid #CFCFCF;
border-radius: 15.8px;
padding: 33px 30px;
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 23px;

input{
  border-radius: 10px;
  border: #DDDFE1 solid 1px;
}
input::placeholder{
  background-color: #FAFAFA;
  color: #abafb3;
  font-size: 14px;

}

  .obrigatorio{
    display: contents;
    color: #DC2113;
  }
  .nome{
    display: grid;
    input{
      max-width: 967px;
      min-height: 53px;
    }
  }

  .email{
    display: grid;
  }

  .telefone{
    display: grid;
  }

`
