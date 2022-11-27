import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const TopSection = styled.div`


  @media only screen and (max-width: 991px){

  display: block !important;

  }
`
export const Dados = styled.div`
  background: #F5F5F5;
  border: 0.9875px solid #CCCCCC;
  border-radius: 15.8px;
  margin-bottom:60px;
  padding-left: 37px;
  padding-right: 27px;

    p{
      font-weight: 600;
      font-size: 20px;
      line-height: 23px;
      display: flex;
      align-items: center;
      color: #000000;
      margin-top: 14px;
    }

    hr{
      border: 0 solid;
      height: 2px;
      background:  #1FC4CC;
      margin: 66px 0 47px 0;

    }

    h2{
      font-weight: 600;
      font-size: 49px;
      line-height: 58px;
      color: #2C5EDE;
      margin: 72px 0px 46px 0;

    }

    h3{
      font-weight: 700;
      font-size: 36px;
      line-height: 42px;
      color: #494949;
      margin-bottom: 30px;
    }

    h5{
      font-weight: 400;
      font-size: 20px;
      line-height: 23px;
      color: #696969;
    }

    .info{
      margin-bottom: 60px;
    }

    .grupo-diagnosis{


    }
    .diagnosis{
      display: flex;
      margin: 15px;

      p{
        margin-left: 25px;

        font-weight: 600;
        font-size: 31px;
        line-height: 36px;
        display: flex;
        align-items: center;
        color: #2C5EDE;
      }

    }

    .tipoSanguineo{
      p{
        font-weight: 600;
        font-size: 52px;

        display: flex;
        align-items: center;
        color: #696969;
      }
      img{
        padding-top: 10px;
        margin-right: 25px;
      }
    }

`

export const BtnContainer = styled.div`
margin-bottom: 151px;


`

export const ButtonProntuario = styled(Link)`

  font-weight: 700;
  font-size: 41.7904px;
  line-height: 49px;
  color: #FFFFFF;
  flex: none;
  order: 0;
  flex-grow: 0;
  background: #2C5EDE;
  border-radius: 10px;
  padding: 10px 130px;


  :hover{
    color: #FFFFFF;
  }
`
