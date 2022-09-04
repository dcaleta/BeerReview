import styled from "styled-components";
import { Link } from "react-router-dom";
export const Section = styled.div`
  min-height: 1000px;
  position: relative;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  z-index: 0;
  overflow: hidden;
  background: linear-gradient(45deg, #0660e9 0%, #0f691d 100%);
`;

export const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 400px) {
    height: 80%;
  } ;
`;
export const Container = styled.div`
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 480px) {
    padding: 10px;
  }
`;

export const Table = styled.table`
  justify-content: center;
  align-items: center;
  border: none;
  width: 550px;
  height: 800px;
`;
export const HeaderRow = styled.tr`
  text-align: center;
  padding: 12px 12px;
`;
export const Header = styled.th`
  color: #fff;
  font-size: 2rem;
  align-items: center;
  font-weight: bold;
  text-decoration: none;
  padding: 24px 24px;
`;

export const BeersName = styled.td`
  margin-bottom: 5px;
  font-size: 24px;
  color: #fff;
`;
export const Tr = styled.tr`
  margin-left: 32px;
  margin-left: 32px;
  margin-top: 32px;
  margin-bottom: 32px;
  item-align: center;
  justify-content: center;
`;
export const Icon = styled.div`
  margin-left: 24px;
  margin-bottom: 24px;
  cursor: pointer;
`;
export const FaLink = styled(Link)`
  text-decoraton: none;
`;
export const Input = styled.input`
  display: none;
`;
