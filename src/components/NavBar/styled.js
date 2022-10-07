import styled from "styled-components";
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Link } from "react-router-dom";

export  const NavbarContainer = styled.nav`
    width: 100%;
    height: ${(props) => (props.extendNavbar ? "100vh" : "80px")};
    background-color: black;
    display: flex;
    flex-direction: column;
    @media (min-width: 800px) {
       height: 80px;
    }
`;

export const LeftContainer = styled.div`
    flex: 30%;
    display: flex;
    align-items: center;
    padding-left: 5%;
    //background-color: red;
`;

export const RightContainer = styled.div`
    flex: 70%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding-right: 50px;
    //background-color: salmon;
`;
export const NavbarInnerContainer = styled.div`
    width: 100%;
    height: 80px;
    display: flex;
`;

export const NavbarLinkContainer = styled.div`
    display: flex;
     
`;
export const NavbarLink = styled(AnchorLink)`
    color: white;
    font-size: x-large;
    font-family: Arial, Helvetica, sans-serif;
    text-decoration: none;
    margin: 10px;
    //padding: 25px 0 0 0;
    @media (max-width: 800px) {
        display: none;
    }
    @media (max-width: 700px) {
        display: none;
    }
`;
export const NavbarLinkExtended = styled(AnchorLink)`
    color: white;
    font-size: x-large;
    font-family: Arial, Helvetica, sans-serif;
    text-decoration: none;
    margin: 10px;
`;
export const Logo = styled.img`
    margin: 10px;
    max-width: 180px;
    height: auto;
`;
export const OpenLinkButton = styled.button`
    width: 70px;
    height: 50px;
    background: none;
    border: none;
    color: white;
    font-size: 45px;
    cursor: pointer;
    @media (min-width: 800px) {
        display: none;
    }
`;
export const LoginLinkButton = styled.button`
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
export const NavbarExtendedContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
     @media (min-width: 800px) {
        display: none;
    }
`;