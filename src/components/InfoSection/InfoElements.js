import styled from "styled-components";

export const InfoContainer = styled.div`
  color: #fff;
  background: #000;
  height: 1120px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 30px;
  position: relative;
  z-index: 1;

  @media screen and (max-width: 768px) {
    padding: 100px 0;
  }
`;

export const InfoWrapper = styled.div`
    display: flex;
    z-index: 1;
    height: 360px;
    width:100%
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    padding 0 50px;
    justify-content: center;
`;
