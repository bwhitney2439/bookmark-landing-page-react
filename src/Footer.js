import React from "react";
import ContactUs from "./Components/ContactUs";
import { ReactComponent as LogoFooterBookmark } from "../src/images/logo-footer-bookmark.svg";
import { ReactComponent as IconFacebook } from "../src/images/icon-facebook.svg";
import { ReactComponent as IconTwitter } from "../src/images/icon-twitter.svg";
import styled from "styled-components";

const FooterContainer = styled.section`
  background-color: #252b46;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 32px 165px;
`;

const FooterContainerLinks = styled.div`
  display: flex;
  width: 507px;
  height: 17px;
  justify-content: space-between;
  align-items: center;

  img {
    color: white;
  }

  font-size: 13px;
  letter-spacing: 1.5px;

  a {
    text-decoration: none;
    text-transform: uppercase;
    color: white;

    &:hover {
      color: #fa5757;
    }
  }
`;

const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 88px;

  svg {
    fill: #fff;

    &:hover {
      fill: #fa5757;
    }
  }
`;

const Footer = () => {
  return (
    <React.Fragment>
      <ContactUs />

      <FooterContainer>
        <FooterContainerLinks>
          <LogoFooterBookmark />
          <a href="#features">Features</a>
          <a href="#pricing">Pricing</a>
          <a href="#contact">Contact</a>
        </FooterContainerLinks>
        <SocialIcons>
          <IconFacebook />
          <IconTwitter />
        </SocialIcons>
      </FooterContainer>
    </React.Fragment>
  );
};

export default Footer;
