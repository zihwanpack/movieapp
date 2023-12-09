import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100px;
  background: black;

  @media screen and (max-width: 768px) {
    display: none;
  }

  @media screen and (max-width: 320px) {
  }
`;

export const StyledLink = styled(Link)`
  color: #696969;
  text-decoration: none;
  margin: 50px;
  font-weight: bold;
  &:hover {
    color: #808080;
    cursor: pointer;
  }
  @media screen and (max-width: 768px) {
  }

  @media screen and (max-width: 320px) {
  }
`;

export const Title = styled(Link)`
  color: red;
  font-size: xx-large;
  font-weight: bold;

  text-decoration: none;
  margin: 100px;
  &:hover {
    cursor: pointer;
  }
`;
