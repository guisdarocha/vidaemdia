import styled from "styled-components";

export const  HighLight = styled.h2`
  box-shadow: inset 0 -0.5em #64EDBF;
  display: inline;
  padding: 0 5px 0 5px;
  margin: 0 auto;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 600;
  font-size: 52px;
  color: #000000;
  @media only screen and (max-width: 767px){
    font-size: 40px;
   }
   @media only screen and (max-width: 454px){
    font-size: 35px;
   }
  @media only screen and (max-width: 402px){
    font-size: 31px;
   }
   @media only screen and (max-width: 360px){
    font-size: 24px;
   }
`
export const  DivHighLight = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  align-items: baseline;
`
