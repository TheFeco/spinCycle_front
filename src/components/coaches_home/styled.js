import styled from "styled-components";

export const FitTrainerWrapper = styled.div`
    padding: 100px 0 120px;
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

export const ModalBlock = styled.div`
  align-items: center;
  bottom: 0;
  justify-content: center;
  left: 0;
  overflow: hidden;
  padding: 0.4rem;
  position: fixed;
  right: 0;
  top: 0;
  display: flex;
  opacity: 1;
  z-index: 400;
`;

export const ModalOverlay = styled.a`
  background: rgba(29, 29, 27, 0.75);
  bottom: 0;
  cursor: default;
  display: block;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
`;

export const ModalClose = styled.a`
  /*float: right !important;
  text-decoration: none !important;
  cursor: pointer;
  font-size: 1rem;*/
    color: #747474;
    background-color:rgba(255,255,255,0.5);
    font-size: 30px;
    font-weight: 300;
    text-shadow: none;
    line-height: 32px;
    height: 27px;
    width: 27px;
    padding: 0;
    border-radius: 50%;
    opacity: 1;
    overflow: hidden;
    position: absolute;
    left: auto;
    right: 15px;
    top: 15px;
    z-index: 2;
    transition: all 0.3s ease 0s;
`;

export const ModalContainer = styled.div`
  /*background: #ffffff;
  border-radius: 0.1rem;
  display: flex;
  flex-direction: column;
  max-height: 75vh;
  max-width: 850px;
  padding: 0 0.8rem;
  width: 100%;
  animation: slide-down 0.2s ease 1;
  z-index: 1;
  box-shadow: 0 0.2rem 0.5rem rgba(48, 55, 66, 0.3);*/
  background-color:white;
    height: 100%;
    position:relative;
    margin:0 auto;
    padding:3em;
    overflow-y: scroll;
    -webkit-overflow-scrolling: touch;
    @media (min-width: 60em) {
        height:75%;
  	    margin:5% auto;
  	    max-height: 57em;
        max-width:66em;
        width:85%;
  	}
`;

export const ModalBody = styled.div`
  overflow-y: auto;
  padding: 30px 10px;
  position: relative;
`;

export const ModalHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: #303742;
  padding: 20px 5px 10px 5px;
`;

export const ModalTitle = styled.span`
  font-size: 30px;
  font-weight: 500;
`;

export const ModalFooter = styled.div`
  padding: 10px 0px;
  text-align: right;
`;

export const Button = styled.button`
  background: #7b2cbf;
  color: white;
  font-size: 1em;
  margin: 10px;
  padding: 5px 10px;
  border: 2px solid #7b2cbf;
  border-radius: 3px;
  cursor: pointer;
`;

export const Modal2 = styled.div`
    background-color:white;
    height: 100%;
    position:relative;
    margin:0 auto;
    padding:3em;
    overflow-y: scroll;
    -webkit-overflow-scrolling: touch;
    @media (min-width: 60em) {
      height:75%;
  	 margin:5% auto;
  	 max-height: 57em;
      max-width:66em;
      width:85%;
  	}
`;
export const Modal2Close = styled.a`
    background-color:turquoise;
    color:white;
    font-size:24px;
    padding:8px 12px;
    position:absolute;
    right:0;
    text-align:center;
    text-decoration:none;
    top:0;
    z-index: 1;
`;