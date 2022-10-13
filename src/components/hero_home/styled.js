import styled from "styled-components";

export const HeroText = styled.div`
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  
`;

export const FlexCenter = styled.div`
  display: flex; 
  flex-direction: column; 
  justify-content: center; 
  align-content: center;
`;

export const HeroMessage = styled.div`
  color: #fff; 
  text-shadow: #343a40 2px 2px; 
  min-width: 100%; 
  min-height: 12em; 
  position: relative;
  h1{
    width: 100%; 
    display: block; 
    text-align: center;
     margin: 3% 0; 
     text-transform: uppercase;
  }
  @media(min-width:1024px){
    min-width: 50%; min-height: 12em;
  }
`;