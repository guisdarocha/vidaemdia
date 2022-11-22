import styled from "styled-components";

export const  ProntuarioStyle = styled.form`
box-sizing: border-box;
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
  max-width: 100%;
  min-height: 53px;
  padding-left: 17px;
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

  }

  .email{
    display: grid;
    margin-top: 25.5px;
    input{
      margin-right: 24px;

    }
  }

  .telefone{
    display: grid;
    margin-top: 25.5px;
  }

  .data{
    margin-top: 20px;
    font-size: 19px;
    input{
      max-width: 160px;
      margin-top: 9px;

    }
  }

  .bottom{
    margin-top: 21.5px;
    input{
      margin-top: 9px;
      max-width: 160px;
    }
  }

  .cep, .endereco {
    display: grid;
    margin-top: 25.5px;
  }


  @media only screen and (max-width: 1400px){
    font-size: 15px;

    .data{
      font-size: 15px;
    }
   }

   @media only screen and (max-width: 1200px){

    .bottom{
      input{
        max-width: 100px;
      }
    }

    .data{
      font-size: 13px;
      input{
        max-width: 120px;
      }
    }
   }

   @media only screen and (max-width: 992px){
    font-size: 14px;
  .bottom{
    margin-top: 42px;
    input{
      max-width: 100px;
    }
  }

  .data{
    font-size: 13px;
    input{
      max-width: 100px;
    }
  }
}


   @media only screen and (max-width: 767px){

    .bottom{
      display: flex;
      flex-direction: column;
      margin-top: 21.5px;
    }
    .email input{
      margin: 0;
    }

    .bottom input{
      max-width: 100%;
    }
    .data{
      display: flex;
      flex-direction: column;
    }

    .data input{
      max-width: 100%;
    }

   }
`
