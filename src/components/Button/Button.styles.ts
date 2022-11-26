import { Link } from "react-router-dom";
import styled from "styled-components";

export const ButtonLink = styled(Link) `
  font-style: normal;
  font-weight: 700;
  font-size: 41.7904px;
  line-height: 49px;
  color: #FFFFFF;
  background: #2C5EDE;
  border-radius: 10px;
  padding: 2px 50px 10px 50px;
  text-transform: capitalize;
  text-decoration: none;
  :hover{
    color: white;
    text-decoration: none;
  }
  :visited{
    color: white;
    text-decoration: none;
  }
  :active{
    color: white;
    text-decoration: none;
  }

  @media only screen and (max-width: 375px){

  font-size: 28px;
  padding: 0px 20px;
  margin: 0 auto;

}

`
export const ButtonSubmit = styled.button `
  font-style: normal;
  font-weight: 700;
  font-size: 42px;
  line-height: 49px;
  color: #FFFFFF;
  background: #2C5EDE;
  border-radius: 10px;
  padding: 2px 50px 10px 50px;
  text-transform: capitalize;
  text-decoration: none;
  :hover{
    color: white;
  }

  @media only screen and (max-width: 375px){

  font-size: 28px;
  padding: 0px 20px;
  margin: 0 auto;

  }
`
