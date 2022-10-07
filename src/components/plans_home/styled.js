import styled from "styled-components";

export const FitServiceWrapper = styled.div`
    padding: 100px 0 120px;
    /*background-color: var(--second-bg-color);*/
    color: var(--yellow-color);
`;

export const FitHeading = styled.div`
    margin-bottom: 50px;
    text-align: center!important;

`;
export const HeadingTitle = styled.h2`
    font-size: 26px;
    color: white;
    display: inline-block;
    padding: 16px 10px;
    min-width: 240px;
    position: relative;
    margin-bottom: 11px;
    z-index: 0;
    &:after{
        content: "";
        position: absolute;
        background: var(--yellow-color);
        right: 0;
        left: 0;
        top: 0;
        bottom: 0;
        z-index: -1;
        -webkit-transform: skewX(-18deg);
        -o-transform: skewX(-18deg);
        -moz-transform: skewX(-18deg);
        -ms-transform: skewX(-18deg);
        transform: skewX(-18deg);
    }
`;

export const FitPriceBox = styled.div`
    text-align: center;
    /*border: 2px dashed rgb(38, 52, 83);*/
    padding: 40px 25px;
    border-radius: 10px;
    position: relative;
    background: white;
    cursor: pointer;
    margin-bottom: 30px;
    color: var(--yellow-color);
    &:after{
        content: "";
        position: absolute;
        background: var(--yellow-color);
        width: 80%;
        left: 0;
        right: 0;
        margin: auto;
        top: 0;
        bottom: 0;
        z-index: -1;
        border-radius: 10px;
        -webkit-transition: all 0.3s linear 0s;
        -moz-transition: all 0.3s linear 0s;
        -ms-transition: all 0.3s linear 0s;
        -o-transition: all 0.3s linear 0s;
        transition: all 0.3s linear 0s;
    }
    &:hover{
        &::after{
            top: -10px;
            bottom: -10px;
        }
    }
`;

export const ButtonPay = styled.button`
    min-width: 130px;
    text-align: center;
    height: 50px;
    line-height: 50px;
    background-color: rgba(245, 245, 245, 0);
    color: white;
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