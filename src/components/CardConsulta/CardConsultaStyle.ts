import styled from "styled-components";

export const Card = styled.div`
  margin: 0 auto;
  padding: 70px 37px;
  max-width: 100%;
  height: 637px;
  background: #F5F5F5;
  border: 0.7px solid #CFCFCF;
  border-radius: 14px;
  margin-bottom: 50px;

  @media only screen and (max-width: 800px){
      height: 90vh;
      button{
        margin-bottom: 27px;
      }
      }

    p{
      margin: 0 0 0 10px;
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 600;
      font-size: 31px;
      line-height: 36px;
      display: flex;
      align-items: center;
      color: #2C5EDE;

      @media only screen and (max-width: 800px){
      font-size: 21px;
      margin: 0;
      }
    }

    p:first-letter {
      text-transform: uppercase;
      }

    h3{
      font-weight: 600;
      font-size: 49.3617px;
      line-height: 58px;
      color: #2C5EDE;
      @media only screen and (max-width: 800px){
      font-size: 28px;

      }

    }

    h3:first-letter {
    text-transform: uppercase;
    }

    h4{
      font-weight: 400;
      font-size: 20px;
      line-height: 23px;
      display: flex;
      align-items: center;
      color: #464A53;
      @media only screen and (max-width: 800px){
      font-size: 18px;
      display: block;
      margin: 0;
      }
    }


    h5{
      font-weight: 400;
      font-size: 20px;
      line-height: 23px;
      color: #2C5EDE;
      margin: 0 290px 0 10px;
      @media only screen and (max-width: 800px){
        margin: 0;
      }

    }

  .linha{
    margin-bottom: 40px;
    @media only screen and (max-width: 800px){
    display: block !important;
    margin-bottom: 20px;
   }
  }
  .icone{
    margin-left: 40px;
  }
  .topo{
    margin-bottom: 80px;

    @media only screen and (max-width: 800px){
    display: block !important;
    margin-bottom: 40px;
   }
  }


`
