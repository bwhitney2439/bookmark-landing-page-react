import React, { useState } from "react";
import Tab from "./Tab";
import { ReactComponent as FeatureImage1 } from "../images/illustration-features-tab-1.svg";
import { ReactComponent as FeatureImage2 } from "../images/illustration-features-tab-2.svg";
import { ReactComponent as FeatureImage3 } from "../images/illustration-features-tab-3.svg";
import { useSpring, animated } from "react-spring";
import styled from "styled-components";

const FeaturesContainer = styled.section`
  position: relative;
  margin-bottom: 149px;
`;

const FeaturesHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
  width: 540px;
  height: 152px;
  margin: auto;
  margin-bottom: 72px;

  @media (max-width: 375px) {
    width: 311px;
    height: 152px;

    h2 {
      font-size: 24px;
      font-weight: 500;
      line-height: 52px;
      text-align: center;
      letter-spacing: -0.075px;
    }
    p{
      font-size: 15px;
      font-weight: 400;
      line-height: 25px;
      text-align: center;
    }
    }
  }
`;

const FeaturesTabsContainer = styled.div`
  position: relative;
  width: 730px;
  height: 49px;
  display: flex;
  justify-content: space-around;
  margin: auto;
  margin-bottom: 72px;
  @media (max-width: 375px) {
    border-top: 1px solid rgba(73, 93, 207, 0.2);
    flex-direction: column;
    width: 311px;
    height: 175px;
  }
`;

const FeaturesTabs = styled.div`
  cursor: pointer;
  text-align: center;
  height: 100%;
  width: 33.333%;
  font-size: 16px;
  color: #252b46;
  border-bottom: 1px solid rgb(155, 155, 155);
  transition: border-bottom 0.3s ease-in-out;

  &:hover {
    color: #fa5757;
  }
  @media (max-width: 375px) {
    padding: 20px;
    width: 100%;
    border-bottom: 1px solid rgba(73, 93, 207, 0.2);
    opacity: 0.75;
  }
`;

const FeatureTabSlider = styled(animated.hr)`
  position: absolute;
  bottom: 0;
  left: 0%;
  height: 4px;
  width: 33.333%;
  background-color: #fa5757;

  @media (max-width: 375px) {
    left: 33.333%;
  }
`;

const FeatureCurvedRectangle = styled.div`
  position: absolute;
  left: 0;
  bottom: -10%;
  z-index: -3;
  width: 45%;
  height: 352px;
  background-color: #5368df;
  border-top-right-radius: 316.5px;
  border-bottom-right-radius: 316.5px;
`;

const FeatureTabDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 445px;
  height: 232px;

  button {
    width: 114px;
    height: 48px;
    border-radius: 5px;
    border: none;
    background-color: #5368df;
    color: white;
    box-shadow: 0px 8px 8px -4px rgba(73, 93, 207, 0.2);
    font-size: 14px;
    &:hover {
      background-color: white;
      border: 2px solid #5368df;
      color: #5368df;
    }
  }
`;

const FeatureSlideshowContainer = styled.div`
  max-width: 1031px;
  margin: auto;
`;

const Features = () => {
  const [myTab, setMyTab] = useState("");

  const slide = useSpring({
    left: myTab === "middle" ? "33.333%" : myTab === "right" ? "66.666%" : "0%",
    from: { left: "0%" }
  });

  return (
    <FeaturesContainer id="features">
      <FeaturesHeader>
        <h2>Features</h2>
        <p>
          Our aim is to make it quick and easy for you to access your favourite
          websites. Your bookmarks sync between your devices so you can access
          them on the go.
        </p>
      </FeaturesHeader>
      <FeaturesTabsContainer>
        <FeaturesTabs
          onClick={() => {
            setMyTab("");
          }}
        >
          Simple Bookmarking
        </FeaturesTabs>
        <FeaturesTabs
          onClick={() => {
            setMyTab("middle");
          }}
        >
          Speedy Searching
        </FeaturesTabs>

        <FeaturesTabs
          onClick={() => {
            setMyTab("right");
          }}
        >
          Easy Sharing
        </FeaturesTabs>
        <FeatureTabSlider style={slide} />
      </FeaturesTabsContainer>

      <FeatureSlideshowContainer>
        {myTab === "" ? (
          <Tab>
            <FeatureImage1 />
            <FeatureTabDetails>
              <h2>Bookmark in one click</h2>
              <p>
                Organize your bookmarks however you like. Our simple
                drag-and-drop interface gives you complete control over how you
                manage your favourite sites.
              </p>
              <button>More Info</button>
            </FeatureTabDetails>
          </Tab>
        ) : null}

        {myTab === "middle" ? (
          <Tab>
            <FeatureImage2 />
            <FeatureTabDetails>
              <h2>Intelligent search</h2>
              <p>
                Our powerful search feature will help you find saved sites in no
                time at all. No need to trawl through all of your bookmarks.
              </p>
              <button>More Info</button>
            </FeatureTabDetails>
          </Tab>
        ) : null}

        {myTab === "right" ? (
          <Tab>
            <FeatureImage3 />
            <FeatureTabDetails>
              <h2>Share your bookmarks</h2>
              <p>
                Share your bookmarks Easily share your bookmarks and collections
                with others. Create a shareable link that you can send at the
                click of a button.
              </p>
              <button>More Info</button>
            </FeatureTabDetails>
          </Tab>
        ) : null}
      </FeatureSlideshowContainer>
      <FeatureCurvedRectangle />
    </FeaturesContainer>
  );
};

export default Features;
