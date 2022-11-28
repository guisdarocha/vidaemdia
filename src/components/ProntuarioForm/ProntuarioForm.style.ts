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
margin-bottom: 47px;

@media only screen and (max-width: 375px){
  max-width: 20rem;
  
}

.bairro{
  display: grid;
  margin-top: 0.5rem;
}
.numero{
  display: grid;
  margin-top: 0.6rem;
}

.complemento{
  display: grid;
  margin-top: 0.5rem;
}

.estado{
  display: grid;
  margin-top: 0.5rem;
}

.cidade{
  display: grid;
  margin-top: 0.5rem;
}

h3{

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 42px;
  display: flex;
  align-items: center;
  color: #696969;
  margin-top: 5%;
}

input{
  border-radius: 10px;
  border: #DDDFE1 solid 1px;
  max-width: 100%;
  min-height: 53px;
  padding-left: 2px;
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
    margin-top: 2rem;
  }

  .telefone{
    display: grid;
    margin-top: 2rem;
  }

  .data{
    margin-top: 20px;
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

  h3 {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 600;
    color: #696969;
    font-size: 50px;
    justify-content: center;
    text-align: center;
    margin-bottom: 90px;
    @media only screen and (max-width: 375px){
      font-size: 36px;
      margin-top: 5rem;
}
  }

  label {
    color: gray;
  }

  .radio{
    width: 55px;
    height: 10px;
    cursor: pointer;
    appearance: none;
    border: 1px solid #2C5EDE;
    border-radius: 100%;
    display: grid;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    outline: none;
    background: none;
    position: relative;
    @media only screen and (max-width: 375px){
    width: 55px;
    height: 55px; 
    }
  }

  .radio:before{
    content: '';
    outline: none;
    width: 25px;
    height: 25px;
    background: #2C5EDE;
    border-radius: 50%;
    opacity: 0;
    transition: all 300ms ease-in-out;
    position: center;
    color: #2C5EDE;
    @media only screen and (max-width: 375px){
    width: 45px;
    height: 45px;
    }
  }

  .radio:checked:before{
    opacity: 1;
}

input[type="radio"] {
  -ms-transform: scale(0.5); /* IE 9 /
  -webkit-transform: scale(1.5); / Chrome, Safari, Opera */
  transform: scale(0.5);
  @media only screen and (max-width: 375px){
  -ms-transform: scale(0.5); /* IE 9 /
  -webkit-transform: scale(1.5); / Chrome, Safari, Opera */
  transform: scale(0.5);
}}

.diagnostico,
.diagnosticoDois,
.diagnosticoTres,
.diagnosticoQuatro{


  input{
    margin-bottom: 0.4rem;
      max-width: 160px;
      color: blue;
      border-radius: 50%;
      border: 1px solid blue;   
    }
    @media only screen and (max-width: 375px){
      justify-content: center;
      align-items: center;
      display: grid;
    }
}

.dado{
    display: flex;
    align-items: center;
    justify-items: center;
    margin-left: 5rem;
    
}

.dado h5 {
 width: 80px;
 margin-left: 10px;
 font-family:'Roboto';
 font-size: 12px;
}

.checkbox{
    width: 55px;
    height: 10px;
    cursor: pointer;
    appearance: none;
    border: 1px solid #2C5EDE;
    border-radius: 50%;
    position: relative;
    display: grid;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    outline: none;
    background: none;
    position: relative;
  }

  .checkbox:before{
    content: '';
    outline: none;
    width: 25px;
    height: 25px;
    background: #2C5EDE;
    border-radius: 50%;
    opacity: 0;
    transition: all 300ms ease-in-out;
    position: center;
    color: #2C5EDE;
  }

  .checkbox:checked:before{
    opacity: 1;
  }

input[type="checkbox"] {
  -ms-transform: scale(0.5); /* IE 9 /
  -webkit-transform: scale(1.5); / Chrome, Safari, Opera */
  transform: scale(0.5);
}



.diagnosticoDois{
  display: grid;
  align-items: center;
  justify-content: flex;
  
  input{
      margin-left: 55px;
      margin-bottom: 5px;
      max-width: 160px;
    }
}


  .div-space { 
 
    display: flex;
    
    justify-content: flex-end; 
    align-items: center;   
    margin-left: 23rem; 
    @media only screen and (max-width: 375px){
    font-size: 20px;
    display: flex;
    justify-content: center;
    justify-items: center;
    align-items: space-around;
    margin-left: 0rem;

  }
}

  .alinhamento-y {
    display: flex;
    align-items: center;
  }

  .historicoSocial {
    display: grid;
    align-items: flex-start;
    justify-content: space-between;
    background-color: white;
    border-radius: 40px;
    @media only screen and (max-width: 375px){
    font-size: 20px;
    display: flex;
  
    align-items: stretch; 
    flex-direction: column;  
    align-content: center;
  }}
  
  .fumar, 
  .drogas, 
  .alcool, 
  .exercicios, 
  .recreacao,
  .familia,
  .tratamento,
  .medicamento, 
  .alergico,
  .gravida {
    width: 950px;
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    margin-left: 2%;
    @media only screen and (max-width: 375px){
    align-items: stretch; 
    flex-direction: column;  
  }}

  .sanguineo{
    align-items: center;
    justify-content: center;
    text-align: center;
    @media only screen and (max-width: 375px){
    font-size: 20px;
    display: flex;
    
    justify-content: center; 
    align-items: stretch; 
    /* flex-flow: row; */ 
    flex-direction: column;  
    align-content: stretch;

    background-color: #bbdefb;
    height: 100%;
    padding: 15px;
    gap: 5px;
    padding-top: 35px;
  }

  input{
      align-items: center;
      justify-content: center;
      text-align: center;
      width: 90px;
      margin-bottom: 0.4rem;
      max-width: 160px;
      color: blue;
      border-radius: 50%;
      border: 1px solid blue;
      @media only screen and (max-width: 375px){
      display: grid;
      justify-content: center;
      align-items: space-around;
    }
    }
}

.termos{
  cursor: pointer;
  width: 30px;
  height: 30px;
  border: 3px solid;
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  outline: none;
}


.termos-span{
  margin-left: 5px;
  font-size: 16px;
  @media only screen and (max-width: 375px){
  font-size: 8px;
  line-height: 8px;
  }
}

.enviar {
  border-radius: 12px;
  font-weight: 700;
  font-size: 30px;
  background-color: #2C5EDE;
  width: 300px;
  height: 60px;
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
export const Select = styled.select`
      width: 100%;
      height: 5.5rem;
      background: white;
      color: grey;
      padding: 5px;
      font-size: 14px;
      border: 0.9875px solid #CFCFCF;
      border-radius: 6px;
      margin-top:0.5rem;


      option {
        display: flex;
        color: gray;
        background: white;
        white-space: pre;
        min-height: 20px;
      }
`;

