import styled from "styled-components";

export const BemVindoStyle = styled.div `

 h1{
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 60px;
    line-height: 71px;
    color: #141414;
    margin-top: 105px;
    margin-bottom: 52px;
    span{
      font-weight: 600;
      color: #2C5EDE;
    }
  }

  h3{
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 600;
    font-size: 31px;
    line-height: 36px;
    color: #2C5EDE;
    margin-bottom: 52px;
  }

  h4{
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    color: #777777;
    margin-bottom: 61px;
  }
  span{
    text-transform: capitalize;

  }



  @media only screen and (max-width: 375px){
    h1{
      font-size: 36px;
      margin-top: 49px;
      margin-bottom: 29px;
      font-weight: 400;
      line-height: 42px;
      color: #141414;
    }

    h3{
      font-weight: 600;
      font-size: 18px;
      line-height: 21px;
      margin-bottom: 21px;
    }

    h4{
      font-size: 14px;
      margin-bottom: 43px;
    }
   }
`
