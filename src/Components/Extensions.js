import React from "react";
import { ReactComponent as LogoChrome } from "../../src/images/logo-chrome.svg";
import { ReactComponent as LogoFirefox } from "../../src/images/logo-firefox.svg";
import { ReactComponent as LogoOpera } from "../../src/images/logo-opera.svg";
import { ReactComponent as BackgroundDots } from "../../src/images/bg-dots.svg";
import styled from "styled-components";

const ExtensionsContainer = styled.section`
  padding: 5% 0;
`;

const ExtensionsContainerHeading = styled.div`
  max-width: 541px;
  max-height: 124px;
  text-align: center;
  margin: auto;
  margin-bottom: 48px;
`;

const ExtensionsContainerCards = styled.div`
  display: flex;
  justify-content: space-between;
  width: 910px;
  height: 451px;
  margin: auto;
`;

const Card = styled.div`
  padding: 49px 24px 24px 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 280px;
  height: 371px;
  border-radius: 15px;
  box-shadow: 0px 10px 20px -5px rgba(73, 93, 207, 0.2);

  &:nth-child(2) {
    align-self: center;
  }
  &:nth-child(3) {
    align-self: flex-end;
  }

  .details {
    text-align: center;

    h3 {
      margin-bottom: 0.5rem;
    }

    p {
      font-weight: 400;
      font-size: 15px;
      line-height: unset;
    }
  }

  button {
    border: none;
    height: 48px;
    border-radius: 5px;
    width: 232px;
    font-size: 14px;
    font-weight: 500;
    background-color: #5368df;
    color: white;
    box-shadow: 0px 8px 8px -4px rgba(74, 94, 208, 0.2);

    &:hover {
      background-color: white;
      border: 2px solid #5368df;
      color: #5368df;
    }
  }
`;

const Extensions = () => {
  return (
    <ExtensionsContainer id="pricing">
      <ExtensionsContainerHeading>
        <h2>Download the extension</h2>
        <p>
          We’ve got more browsers in the pipeline. Please do let us know if
          you’ve got a favourite you’d like us to prioritize.
        </p>
      </ExtensionsContainerHeading>
      <ExtensionsContainerCards>
        <Card>
          <LogoChrome />
          <div class="details">
            <h3>Add to Chrome</h3>
            <p>Minimum version 62</p>
          </div>
          <BackgroundDots />
          <button>Add & Install Extension</button>
        </Card>
        <Card>
          <LogoFirefox />
          <div class="details">
            <h3>Add to Firefox</h3>
            <p>Minimum version 55</p>
          </div>
          <BackgroundDots />
          <button>Add & Install Extension</button>
        </Card>
        <Card>
          <LogoOpera />
          <div class="details">
            <h3>Add to Opera</h3>
            <p>Minimum version 46</p>
          </div>
          <BackgroundDots />
          <button>Add & Install Extension</button>
        </Card>
      </ExtensionsContainerCards>
    </ExtensionsContainer>
  );
};

export default Extensions;
