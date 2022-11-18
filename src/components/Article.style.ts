import styled from 'styled-components'
import art1 from "../assets/artigo1.png"
import art2 from "../assets/artigo2.png"

export const ArticleCard = styled.article`

  img{
    margin-left: 1.2rem;
    max-width: 100%;
  }

  h3{
  margin-top:136px;
  text-transform: initial uppercase;
  margin-left: 1.2rem;
  font-family: 'roboto', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 38px;
  color: #F5F5F5;
  :first-letter {
    text-transform: uppercase;
    }
  @media only screen and (max-width: 525px){
    font-size: 24px;
    margin: 5rem 0 0 1.2rem ;
   }
  @media only screen and (max-width: 330px){
    font-weight: 600;
    font-size: 17px;
    line-height: 21px;
    margin: 1rem 0 0 1.2rem ;

   }
  }

  h3 span{
    font-size: 25px;
    color: #FFFFFF;
    opacity: 0.5;
    letter-spacing: -5.5px;

  }

  h4{
    font-family: 'roboto', sans-serif;
    margin-left: 1.2rem;
    margin-bottom: 2rem;
    font-style: normal;
    font-weight: 500;
    font-size: 22.0556px;
    line-height: 150%;
    letter-spacing: -0.011em;
    color: #F5F5F5;
    :first-letter {
    text-transform: uppercase;
    }
    @media only screen and (max-width: 525px){
    font-size: 18px;
    margin: 0 1.2rem 1rem;
   }
    @media only screen and (max-width: 420px){
    font-size: 12px;

   }
  }

 .bg1{
    background: url(${art1}) no-repeat center center ;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: 100% ;
    -webkit-border-radius: 50px;
    -moz-border-radius: 50px;
    border-radius: 15px;
    border: none;

}

.bg2{
    background: url(${art2}) no-repeat center center ;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: 100% ;
    -webkit-border-radius: 50px;
    -moz-border-radius: 50px;
    border-radius: 15px;
    border: none;

}

.card{
    max-width: 608px;
    padding: 0;
 }

.readlink{
  position: relative;
  text-align: center;
  background: #1FC4CC;
  p{
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 36.85px;
    line-height: 45px;
    color: #F5F5F5;
    margin: 23px 0;
    :first-letter {
    text-transform: uppercase;
    }

    @media only screen and (max-width: 525px){
    font-size: 20px;
    margin: 0;
   }
    @media only screen and (max-width: 420px){
    font-size: 12px;
   }
  }

}

`
