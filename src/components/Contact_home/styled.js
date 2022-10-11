import styled from "styled-components";

export const MapResponsive = styled.div`
    overflow: hidden;
    padding-bottom: 20%;
    position: relative;
    max-height: 450px;
    margin-bottom: 25px;
    iframe{
        left: 0;
        top: 0;
        height: 100%;
        width: 100%;
        position: absolute;
    }
      
    @media only screen and (max-width: 600px) {
        iframe{
            height: 100%;
        }
    }
`;

export const ContactText = styled.div`
    overflow: hidden;
    margin-bottom: 30px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
`;
