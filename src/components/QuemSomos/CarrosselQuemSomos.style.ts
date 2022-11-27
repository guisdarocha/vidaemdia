import styled from "styled-components";

export const  CarrosselSection = styled.section`
h2 {
	color: #333;
	text-align: center;
	text-transform: uppercase;
	font-family: "Roboto", sans-serif;
	font-weight: bold;
	position: relative;
	margin: 30px 0 60px;
}


.name {
    font-family: "Roboto", sans-serif;
    color: #000000;
    font-style: italic;
    margin-left: 25vw;

}

.col-center {
	margin: 0 auto;
	float: none !important;
}
.carousel {
	margin: 50px auto;
	padding: 0 70px;
}
.carousel .item {
	color: #000000;
	font-size: 14px;
    text-align: center;
	overflow: hidden;
    min-height: 290px;
}
.carousel .item .img-box {
	width: 135px;
	height: 135px;
	margin: 0 auto;
	padding: 5px;
	border: 2.2px solid #64EDBF;
	border-radius: 50%;
    
}
.carousel .img-box img {
	width: 100%;
	height: 100%;
	display: block;
	border-radius: 50%;
}
.carousel .testimonial {
	padding: 30px 0 10px;
    color: rgba(73, 73, 73, 1);
    font-family: "Roboto", sans-serif;
    font-style: italic;
    width: 40vw;
	@media only screen and (max-width: 428px){
    margin-left: 8vw;
   }
}
.carousel .overview {	
	font-style: italic;
}
.carousel .overview b {
	text-transform: uppercase;
	color: #7AA641;
}
.carousel .carousel-control {
	width: 40px;
    height: 40px;
    margin-top: -20px;
    top: 50%;
	background: none;
}
.carousel-control i {
    font-size: 68px;
	line-height: 42px;
    position: absolute;
    display: inline-block;
	color: rgba(0, 0, 0, 0.8);
    text-shadow: 0 3px 3px #e6e6e6, 0 0 0 #000;
}
.carousel .carousel-indicators {
	bottom: -40px;
	padding-left: 4.5vw;
}
.carousel-indicators li, .carousel-indicators li.active {
	width: 10px;
	height: 10px;
	margin: 1px 3px;
	border-radius: 50%;
}
.carousel-indicators li {	
	background: #999;
	border-color: transparent;
	box-shadow: inset 0 2px 1px rgba(0,0,0,0.2);
}
.carousel-indicators li.active {	
	background: #64EDBF;		
	box-shadow: inset 0 2px 1px rgba(0,0,0,0.2);
}

.highlight {
	//margin: 13vw 30.8vw 5.7vw 30.8vw;
	margin-left:  34.5vw;
	font-size: 2.5vw;
	@media only screen and (max-width: 428px){
		font-size: 5vw;
		margin-left: 18vw
	}
}

.divHighlight {
	margin-top: 13vw;
}

`

