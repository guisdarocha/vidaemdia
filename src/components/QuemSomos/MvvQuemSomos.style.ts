import styled from "styled-components";

export const  MvvSection = styled.section`
    background-color: #ededed;
    display: flex;
    justify-content: center;

    @media only screen and (max-width: 428px){
        flex-direction: column;
        align-items: center;
        height: 80vh;

}

    .text {
        width: 22vw;
        height: 17vw;
        display: flex;
        flex-direction: column;
        margin: 5.8vw 3.6vw 3.9vw 0;
        @media only screen and (max-width: 428px){
            margin: 22vw 0 0 0;
            flex-direction: column;
            align-items: center;
            display: flex;
    }
    }

    .marginLeft {
        margin-left: 16.25vw;
        @media only screen and (max-width: 428px){
            margin: 0;
            
    }
    }

    .marginRight {
        margin-right: 16.25vw;
        margin-top: 1.5vw;
        @media only screen and (max-width: 428px){
            margin: 0;
    }
    }

    .divText {
        width: 15vw;
        height: 17vw;
        margin-top: 2.9vw;
        @media only screen and (max-width: 428px){
            width: 60vw;
    }
        
    }

    div {
        
    }

    h2 {
        font-size: 2.2vw;
        @media only screen and (max-width: 428px){
            margin: 0;
            font-size: 6vw;
    }
    }

    h3 {
        font-family: 'Roboto', sans-serif;
        font-style: italic;
        font-weight: 600;
        font-size: 1vw;
        @media only screen and (max-width: 428px){
            font-size: 3vw;
    }
    }


    .img1 {
        width: 4vw;
        height: 4vw;
        margin-left: 3vw;
        @media only screen and (max-width: 428px){
            margin: 3vw 0 1vw 0 ;
            width: 10vw;
            height: 10vw;
    }
        
    }

    .img2 {
        width: 5vw;
        height: 3.4vw;
        margin-left: 3vw;
        @media only screen and (max-width: 428px){
            margin: 0;
            width: 12.5vw;
            height: 8.5vw;
    }
        
    }

    .img3 {
        width: 5vw;
        height: 4.7vw;
        margin-left: 3vw;
        @media only screen and (max-width: 428px){
            margin: 0;
            width: 12.5vw;
            height: 11.75vw;
    }
        
        
    }

    li {
        margin-bottom: 1vw;
        font-size: 1vw;
        font-family: 'Roboto', sans-serif;
        font-weight: 600;
        @media only screen and (max-width: 428px){
            font-size: 4vw;
    }
    }

    .flexcel {
        @media only screen and (max-width: 428px){
            display: flex;
            align-items: center;
            flex-direction: column-reverse;


    }
    }

    .margin- {
        @media only screen and (max-width: 428px){
            margin-top: -20vw;


    }
    }

    .margin-2 {
        @media only screen and (max-width: 428px){
            margin-top: -5vw;


    }
    }

`

/* 


@media only screen and (max-width: 375px){
    
}


*/
