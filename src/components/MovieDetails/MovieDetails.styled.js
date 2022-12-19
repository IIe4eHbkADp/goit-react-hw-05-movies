import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const BackBTN = styled.button`
  margin-bottom: 10px;
  padding: 5px 30px;
  color: white;
  box-shadow: #125205 1px 1px 1px, #125205 2px 2px 1px;
  background-color: #0abf43;
  border: none;
  font-weight: 700;
`;

const MainDetailsBox = styled.div`
  display: flex;
`;

const MainDetailsIMG = styled.img`
  width: 200px;
`;

const TextDetailsBox = styled.div`
  margin-left: 20px;
`;

const Title = styled.h2`
  color: green;
  text-shadow: aqua 1px 1px 1px, aqua 2px 2px 1px;
`;

const Text = styled.p``;

const TopText = styled.h3`
  color: white;
  text-shadow: black 1px 1px 1px, black 2px 2px 1px;
`;
const Span = styled.span`
  color: white;
  text-shadow: black 1px 1px 1px, black 2px 2px 1px;
`;

const AdditionalNavLink = styled(NavLink)`
  text-decoration: none;
  font-weight: 700;
  color: black;

  &.active {
    color: green;
    text-decoration: underline;
  }

  :hover:not(.active),
  :focus-visible:not(.active) {
    color: #075716;
  }
`;
const CastIMG = styled.img`
  width: 200px;
  height: auto;
  margin-right: 20px;
`;

const CastItem = styled.li`
  display: flex;

  :not(:last-child) {
    margin-bottom: 20px;
  }
`;

const AdditionalReviewsContent = styled.p`
  text-align: justify;
`;

export {
  BackBTN,
  MainDetailsBox,
  MainDetailsIMG,
  TextDetailsBox,
  Title,
  Text,
  TopText,
  Span,
  AdditionalNavLink,
  CastItem,
  CastIMG,
  AdditionalReviewsContent,
};
