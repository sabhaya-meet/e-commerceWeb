import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Nav from "./Nav";

const Header = () => {
  return (
    <MainHeader>
      <NavLink to="/" className="logo-link">
        <LogoWrapper>
          <LogoText>E-Store</LogoText>
        </LogoWrapper>
      </NavLink>
      <Nav />
    </MainHeader>
  );
};

const MainHeader = styled.header`
  padding: 0 4.8rem;
  height: 10rem;
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  .logo-link {
    text-decoration: none;
  }
`;

const LogoWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.bg};
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const LogoText = styled.h3`
  font-size: 2rem;
  font-weight: bold;
  color: #2563eb; /* Tailwind's blue-600 */
  letter-spacing: 0.05em;
`;

export default Header;
