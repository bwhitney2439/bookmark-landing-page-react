import React from "react";
import { ReactComponent as IllustrationHeroImage } from "../images/illustration-hero.svg";
import styled, { css } from "styled-components";

const BookmarkSection = styled.section`
  position: relative;
`;

const BookmarkContainer = styled.div`
  display: flex;
  margin: 0 auto 80px auto;
  max-width: 1184px;
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
  ${props =>
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
  ${props =>
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
