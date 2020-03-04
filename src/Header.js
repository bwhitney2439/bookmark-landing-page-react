import React, { useState } from "react";
import { ReactComponent as LogoBookmark } from "../src/images/logo-bookmark.svg";
import styled from "styled-components";

const NavBarContainer = styled.div`
  display: flex;
  align-items: center;
  height: 40px;
  max-width: 1104px;
  margin: 48px auto 108px auto;
  justify-content: space-between;

  @media (max-width: 375px) {
    margin: 40px 32px 80px 32px;

    .menu-button {
      position: relative;

      .burger-bar1,
      .burger-bar2,
      .burger-bar3 {
        content: "";
        width: 28px;
        height: 3px;
        background-color: black;
        margin: 6px 0;
        transition: 0.3s;
      }
    }

    .active {
      .burger-bar1 {
        transform: rotate(-45deg) translate(-8px, 5px);
      }
      .burger-bar2 {
        opacity: 0;
      }
      .burger-bar3 {
        transform: rotate(45deg) translate(-8px, -5px);
      }
    }
  }
`;
const NavBarLinks = styled.div`
  font-size: 13px;
  letter-spacing: 1.5px;

  a {
    text-decoration: none;
    text-transform: uppercase;
    color: #252b46;
    margin-right: 48px;

    &:hover {
      color: #fa5757;
    }
  }

  button {
    height: 40px;
    width: 111px;
    border: none;
    font-size: 13px;
    font-weight: 500;
    background-color: #fa5757;
    letter-spacing: 1.5px;
    color: white;
    border-radius: 5px;
    text-transform: uppercase;
    border: 1px inside #9194a1;
    box-shadow: 0px 8px 8px -4px rgba(73, 93, 207, 0.2);

    &:hover {
      background-color: white;
      color: #fa5757;
      border: 2px solid #fa5757;
    }
  }
  @media (max-width: 375px) {
    display: none;
  }
`;

const Header = () => {
  const [burgerActive, setBurgerActive] = useState(false);
  return (
    <NavBarContainer>
      <LogoBookmark />
      <NavBarLinks>
        <a href="#features">Features</a>
        <a href="#pricing">Pricing</a>
        <a href="#contact">Contact</a>
        <button>Login</button>
      </NavBarLinks>
      <div
        class={`menu-button ${burgerActive ? "active" : ""}`}
        onClick={() => setBurgerActive(!burgerActive)}
      >
        <div class="burger-bar1"></div>
        <div class="burger-bar2"></div>
        <div class="burger-bar3"></div>
      </div>
    </NavBarContainer>
  );
};

export default Header;
