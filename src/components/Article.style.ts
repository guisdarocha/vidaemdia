import styled from 'styled-components'
import art1 from "../assets/artigo1.png"
import art2 from "../assets/artigo2.png"

export const ArticleCard = styled.article`




  h3{
  margin-top:129px;
  margin-left: 1.2rem;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 38px;
  color: #F5F5F5;
  }

  h3 span{
    font-size: 50px;
    color: #FFFFFF;
    opacity: 0.5;
    letter-spacing: -3px;

  }

  h4{
    font-family: 'Roboto';
    margin-left: 1.2rem;
    font-style: normal;
    font-weight: 500;
    font-size: 22.0556px;
    line-height: 150%;
    letter-spacing: -0.011em;
    color: #F5F5F5;
  }

 .bg1{
    background: url(${art1}) no-repeat center center ;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: auto ;
    -webkit-border-radius: 50px;
    -moz-border-radius: 50px;
    border-radius: 15px;
    border: none;

}

.bg2{
    background: url(${art2}) no-repeat center top ;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: auto ;
    -webkit-border-radius: 50px;
    -moz-border-radius: 50px;
    border-radius: 15px;
    border: none;

}

.card{
    max-width: 550px;
    padding: 0;
 }

.readlink{
  text-align: center;
  background: #1FC4CC;
  p{
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 36.85px;
    line-height: 45px;
    color: #F5F5F5;
    margin-bottom: 0;
    padding-bottom: 14px;
  }
}

`
