import styled from "styled-components";

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
        background: var(--orange-color);
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
