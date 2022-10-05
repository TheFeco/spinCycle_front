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