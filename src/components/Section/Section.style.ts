import styled from 'styled-components'

export const SectionCard = styled.div`
margin-top: 2rem;
margin-bottom: 3rem;


img{
    max-width: 390px;
    max-height: 420px;
    @media only screen and (max-width: 428px){
      max-width: 333px;
      max-height: 358px;
   }
}

h1{
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 600;
    font-size: 52px;
    line-height: 61px;
    color: #000000;
    @media only screen and (max-width: 428px){
      font-size: 44px;
   }
}

h2{
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 22px;
    line-height: 26px;
    color: #494949;
    @media only screen and (max-width: 428px){
      font-size: 20px;
   }
}

`
