import { Link } from "react-router-dom";
import styled from "styled-components";

export const HeaderStyle = styled.div `

max-height: 90px;
background: #2C5EDE;
box-shadow: 0px 0.948611px 11.3833px rgba(0, 0, 0, 0.2);
border-radius: 0px 0px 47.4306px 47.4306px;
padding: 26px 0 31px 0;
img{
  max-width: 100%;
}

.links{
  img{
  max-width: 100%;
}
}

@media only screen and (max-width: 931x){


.img{
  display: none;
}

}

`
export const LinkStyle = styled(Link) `

margin: 0 36px;
font-family: 'Inter';
font-style: normal;
font-weight: 600;
font-size: 15.1778px;
line-height: 18px;
color: #F5F5F5;
transition: 0.2s;



:hover{
  color: #2C5EDE;
  padding: 10px 15px;
  background: #FFFFFF;
  border-radius: 10px;
}

@media only screen and (max-width: 1245px){


margin: 0 10px;

}



`
