import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Header = styled.header`
  padding-top: 20px;
  padding-bottom: 20px;
  background-color: #09e65e;
  margin-bottom: 20px;
`;

const NavList = styled.ul`
  display: flex;
  list-style: none;
`;

const NavListItem = styled.li`
  :not(:last-child) {
    margin-right: 20px;
  }
`;

const StyledNavLink = styled(NavLink)`
  color: white;
  text-decoration: none;
  font-weight: 700;

  &.active {
    color: yellow;
    text-decoration: underline;
  }

  :hover:not(.active),
  :focus-visible:not(.active) {
    color: #125205;
  }
`;

export { Header, NavList, NavListItem, StyledNavLink };
