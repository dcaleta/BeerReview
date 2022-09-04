import styled from "styled-components";
import { Link } from "react-scroll";
import { Link as LinkR } from "react-router-dom";

export const SelectionSection = styled.div`
  padding: 100px 0 160px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #3d423d;
`;

export const SelectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  margin: 0 auto;

  @media screen and (max-width: 960px) {
    margin: 0 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const SelectionHeading = styled(LinkR)`
  color: #0685e9;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 2rem;
  display: flex;
  align-items: center;
  margin-left: 0;
  margin-bottom: 24px;
  font-weight: bold;
  text-decoration: none;
`;

export const SelectionContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
`;

export const SelectionContainerCard = styled(Link)`
  background: linear-gradient(45deg, #0660e9 0%, #0f691d 100%);
  bax-shadow: 0 6px 20px rgba(56, 125, 255, 0.2);
  width: 280px;
  height: 500px;
  text-decoration: none;
  border-radius: 4px;

  &:hover {
    transform: scale(1.06);
    transition: all 0.3s ease-out;
    color: #1c2237;
  }

  @media screen and (max-width: 960px) {
    width: 90%;
  }
`;
export const SelectionContainerCard1 = styled(Link)`
  background: linear-gradient(45deg, #0f691d 0%, #0660e7 100%);
  bax-shadow: 0 6px 20px rgba(56, 125, 255, 0.2);
  width: 280px;
  height: 500px;
  text-decoration: none;
  border-radius: 4px;

  &:hover {
    transform: scale(1.06);
    transition: all 0.3s ease-out;
    color: #1c2237;
  }

  @media screen and (max-width: 960px) {
    width: 90%;
  }
`;
export const SelectionContainerCardInfo = styled.div`
  display: flex;
  flex-direction: column;
  height: 500px;
  padding: 24px;
  align-items: center;
  color: #fff;
`;

export const H3 = styled.h3`
  margin-bottom: 5px;
  font-size: 24px;
`;

export const H4 = styled.h4`
  font-size: 40px;
`;

export const PP = styled.p`
  font-size: 14px;
  margin-bottom: 24px;
`;

export const Icon = styled.div`
  margin: 24px 0;
`;

export const SelectionContainerFeatures = styled.ul`
  margin: 16px 0 32px;
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Features = styled.li`
  margin-bottom: 10px;
`;

export const OfferButton = styled.button`
  border-radius: 50px;
  background: #1c2237;
  white-space: nowrap;
  padding: 11px 22px;
  color: #fff;
  font-size: 16px;
  outline: none;
  border: none;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
    cursor: pointer;
  }
`;
export const BtnLink = styled(LinkR)`
  color: #fff;
  text-decoration: none;

  &:hover {
    color: #010606;
  }
`;
