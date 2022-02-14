import React from "react";
import { ReactComponent as IllustrationHeroImage } from "../images/illustration-hero-2.svg";
import styled, { css } from "styled-components";

const BookmarkSection = styled.section`
  position: relative;
`;

const BookmarkContainer = styled.div`
  display: flex;
  margin: 0 auto 80px auto;
  max-width: 1184px;

  @media (max-width: 375px) {
    flex-direction: column-reverse;
    align-items: center;
    margin: unset;
  }
`;

const BookmarkHeader = styled.div`
  margin: 0 auto;
  margin-right: 65px;
  width: 540px;
  height: 292px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-self: center;

  p {
    font-size: 18px;
  }

  @media (max-width: 375px) {
    width: 311px;
    height: 276px;
    margin: 94px 32px 140px 32px;
    text-align: center;

    h1 {
      font-size: 30px;
    }

    p {
      opacity: 0.5;
      z-index: 4;
      width: 311px;
      height: 100px;
      color: #242a45;
      font-family: Rubik;
      font-size: 15px;
      font-weight: 400;
      line-height: 25px;
      text-align: center;
    }
  }
`;

const BookmarkButtonsContainer = styled.div`
  display: flex;
`;

const BookmarkButtons = styled.button`
  border: none;
  height: 48px;
  border-radius: 5px;
  width: 161px;
  font-size: 14px;
  font-weight: 600;
  outline: none;
  ${(props) =>
    props.primary &&
    css`
      background: #5368df;
      color: white;
      margin-right: 1rem;
      box-shadow: 0px 8px 8px -4px rgba(74, 94, 208, 0.2);
      &:hover {
        background-color: white;
        border: 2px solid #5368df;
        color: #5368df;
      }
    `}
  ${(props) =>
    props.secondary &&
    css`
      background-color: #f7f7f7;
      color: #252b46;
      opacity: 75%;
      box-shadow: 0px 8px 8px -4px rgba(73, 93, 207, 0.2);

      &:hover {
        background-color: white;
        border: 2px solid #252b46;
        color: #252b46;
      }
    `};
`;

const BookmarkHeroImage = styled(IllustrationHeroImage)`
  max-width: 100%;
  height: auto;

  @media (max-width: 375px) {
    width: 313px;
    height: 209px;
  }
`;

const BookmarkCurvedRectangle = styled.div`
  position: absolute;
  right: 0;
  bottom: -10%;
  z-index: -4;
  width: 40%;
  height: 352px;
  background-color: #5368df;
  border-top-left-radius: 316.5px;
  border-bottom-left-radius: 316.5px;

  @media (max-width: 375px) {
    top: 7%;
    z-index: -4;
    width: 80%;
    height: 203px;
  }
`;

const Bookmark = () => {
  return (
    <BookmarkSection id="title">
      <BookmarkContainer>
        <BookmarkHeader>
          <h1>A Simple Bookmark Manager</h1>

          <p>
            A clean and simple interface to organize your favourite websites.
            Open a new browser tab and see your sites load instantly. Try it for
            free.
          </p>

          <BookmarkButtonsContainer>
            <BookmarkButtons primary>Get it on Chrome</BookmarkButtons>
            <BookmarkButtons secondary>Get it on Firefox</BookmarkButtons>
          </BookmarkButtonsContainer>
        </BookmarkHeader>
        <BookmarkHeroImage />
      </BookmarkContainer>
      <BookmarkCurvedRectangle />
    </BookmarkSection>
  );
};

export default Bookmark;
