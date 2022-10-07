import styled from "styled-components";

export const ButtonPay = styled.button`
    min-width: 130px;
    text-align: center;
    height: 40px;
    line-height: 50px;
    background-color: rgba(245, 245, 245, 0);
    color: black;
    font-size: 15px;
    position: relative;
    cursor: pointer;
    z-index: 0;
    border: 0;
    padding: 0 10px;
    -webkit-transition: all 0.3s linear 0s;
    -moz-transition: all 0.3s linear 0s;
    -ms-transition: all 0.3s linear 0s;
    -o-transition: all 0.3s linear 0s;
    transition: all 0.3s linear 0s;
    &:after, &:before {
        content: "";
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        -webkit-transition: all 0.3s;
        -moz-transition: all 0.3s;
        -ms-transition: all 0.3s;
        -o-transition: all 0.3s;
        transition: all 0.3s;
    }

    &:after {
        border: 2px solid rgb(173, 174, 193);
        transform: skewX(-18deg);
        -o-transform: skewX(-18deg);
        -ms-transform: skewX(-18deg);
        -moz-transform: skewX(-18deg);
        -webkit-transform: skewX(-18deg);
    }

    &:before {
        visibility: hidden;
        opacity: 0;
        z-index: -1;
        -webkit-transform: scale(0.5, 0.5) skewX(-18deg);
        -moz-transform: scale(0.5, 0.5) skewX(-18deg);
        -ms-transform: scale(0.5, 0.5) skewX(-18deg);
        -o-transform: scale(0.5, 0.5) skewX(-18deg);
        transform: scale(0.5, 0.5) skewX(-18deg);
        background: rgb(255, 171, 76);
        /*background: rgb(251, 91, 33);*/
    }

    &:hover {
        &:before {
        -webkit-transform: scale(1, 1) skewX(-18deg);
        -o-transform: scale(1, 1) skewX(-18deg);
        -moz-transform: scale(1, 1) skewX(-18deg);
        -ms-transform: scale(1, 1) skewX(-18deg);
        transform: scale(1, 1) skewX(-18deg);
        opacity: 1;
        visibility: visible;
        }

        &:after {
        -webkit-transform: scale(1.1, 1.1) skewX(-18deg);
        -moz-transform: scale(1.1, 1.1) skewX(-18deg);
        -o-transform: scale(1.1, 1.1) skewX(-18deg);
        -ms-transform: scale(1.1, 1.1) skewX(-18deg);
        transform: scale(1.1, 1.1) skewX(-18deg);
        opacity: 0;
        visibility: hidden;
        }
    }
    @media (max-width: 800px) {
        display: none;
    }
`;