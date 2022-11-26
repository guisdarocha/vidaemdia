import styled from 'styled-components'
import art1 from "../../assets/artigo1.png"
import art2 from "../../assets/artigo2.png"

export const ArticleCard = styled.article`
  margin-top: 15.5vh;
  margin-bottom: 20vh;



  img{
    margin-left: 4rem;
    max-width: 100%;
  }

  h3{
  margin-top:136px;
  text-transform: initial uppercase;
  margin-left: 4rem;
  font-family: 'roboto', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 30px;
  line-height: 38px;
  color: #F5F5F5;
  :first-letter {
    text-transform: uppercase;
    }

    @media only screen and (max-width: 500px){
      margin-top: 67px;
      font-weight: 600;
      font-size: 17px;
      line-height: 21px;

   }

  }



  h4{
    font-family: 'roboto', sans-serif;
    text-align: left;
    margin-right: 2rem ;
    margin-left: 4rem;
    margin-bottom: 0.7rem;
    font-style: normal;
    font-weight: 500;
    font-size: 22.0556px;
    line-height: 150%;
    letter-spacing: -0.011em;
    color: #F5F5F5;
    :first-letter {
    text-transform: uppercase;
    }

    @media only screen and (max-width: 500px){
      font-weight: 500;
      font-size: 12px;
      line-height: 150%;
      letter-spacing: -0.011em;

   }
  }

 .bg1{
    background: url(${art1}) no-repeat center center ;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: 608px ;
    -webkit-border-radius: 50px;
    -moz-border-radius: 50px;
    border-radius: 15px;
    border: none;
    padding: 0;


}

.bg2{
    background: url(${art2}) no-repeat center center ;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: 608px ;
    -webkit-border-radius: 50px;
    border-radius: 15px;
    -moz-border-radius: 50px;
    border: none;
    padding: 0;

}





.readlink{
    padding-bottom: 5px;
    text-align: center;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 37px;
    line-height: 45px;
    color: #F5F5F5;
    background-color: #2C5EDE;

    @media only screen and (min-width: 1400px ) and (min-height: 890px ){
      margin-left: 20px;
      margin-right: 20px;

   }

    :first-letter {
    text-transform: uppercase;
    }
    p{
      margin-top: 50px;

    }

    @media only screen and (max-width: 500px){
      font-weight: 600;
      font-size: 20.1969px;
      line-height: 24px;

   }




}

`
