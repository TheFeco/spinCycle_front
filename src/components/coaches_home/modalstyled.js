import styled from 'styled-components';
export const Background = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalWrapper = styled.div`
  width: 800px;
  height: auto;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #1d1d1b;
  color: #000;
  display: grid;
  grid-template-columns: 1fr 1fr;
  position: relative;
  z-index: 10;
  border-radius: 10px;
`;

export const ModalImg = styled.img`
  width: 100%;
  height: auto;
  border-radius: 10px 0 0 10px;
  background: rgb(29,29,27);
  background: linear-gradient(314deg,rgba(29,29,27,1) 51%,rgba(255,171,76,1) 53%);
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: baseline;
  line-height: 1.8;
  padding-left: 5px;
  padding-right: 5px;
  color: white;
  h1{
    font-weight: bold;
  }
  h2{
    font-size: x-large;
    margin-top:3px;
  }
  h3{
    text-align: start;
  }
  p {
    line-height: 16px;
    margin-bottom: 0.1rem;
    color:rgb(255, 171, 76);
  }
  span {
    text-align: start;

  }
  @media (max-width: 800px) {
    h2{
      font-size: larger;
    }
    }
`;

export const CloseModalButton = styled.a`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 10;
`;