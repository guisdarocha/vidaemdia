import styled from "styled-components";

export const  QuemSomosSection = styled.section`
    background-color: #FAFAFA;
    display: flex;
    @media only screen and (max-width: 428px){
            flex-direction: column;
            align-items: center;
        }

    .text {
        padding: 4.75vw 6.25vw 6.25vw 14.5vw;
        @media only screen and (max-width: 428px){
            width: 100vw;
            height: 50vh;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            margin-top: 20vw;
            padding: 0;

        }
    }

    .img {
        margin: 12.6vw 0 0 9.25vw;
        @media only screen and (max-width: 428px){
            display: flex;
            align-items: center;
            width: 50vw;
            margin: 0 0 20vw 1vw;

        }

    }

    .HighLight {
        font-size: 2.7vw;
        margin-top: 15vw;
        @media only screen and (max-width: 428px){
            margin-left: 22vw;
            font-size: 9vw;
        }

    }

    .text1 {
        margin: 5vw 0 1.3vw 0;
        @media only screen and (max-width: 428px){
            font-size: 3vw;
            margin: 5vw 0 5vw 0;
            width: 100vw;
            max-width: 60vw;
            text-align: justify;


        }
    }

    .text2 {
        margin-bottom: 4.5vw;
        @media only screen and (max-width: 428px){
            max-width: 60vw;
            font-size: 3vw;
            text-align: justify;
            margin: 0;

        }
    }

    h2 {
        font-family: 'Roboto', sans-serif;
        font-size: 1vw;
        max-width: 27vw;
        @media only screen and (max-width: 428px){
            max-width: 60vw;

        }


    }

    .desfoque {
        text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
        color: #494949;
        @media only screen and (max-width: 428px){
            font-size: 3vw;
            position: relative;
            top: 100vw;

        }

    }

    h3 {
        font-size: 0.7vw;
        margin: 0 0 0 18vw;
        @media only screen and (max-width: 428px){
            font-size: 2vw;
            position: relative;
            top: 99vw;

        }

    }

    a {
        color: black;
    }

    img {
        width: 20.7vw;

    }

    .imgcel {
        @media only screen and (max-width: 428px){
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 33vw;

        }


    }



`
