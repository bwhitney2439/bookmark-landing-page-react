import React, { useState, useRef, useEffect } from "react";
import Tab from "./Tab";
import { ReactComponent as FeatureImage1 } from "../images/illustration-features-tab-1.svg";
import { ReactComponent as FeatureImage2 } from "../images/illustration-features-tab-2.svg";
import { ReactComponent as FeatureImage3 } from "../images/illustration-features-tab-3.svg";
import { useSpring, animated } from "react-spring";
import styled from "styled-components";

const FeaturesContainer = styled.div`
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
`;

const FeaturesTabsContainer = styled.div`
  position: relative;
  width: 730px;
  height: 49px;
  display: flex;
  justify-content: space-around;
  margin: auto;
  margin-bottom: 72px;
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
`;

const FeatureTabSlider = styled(animated.hr)`
  position: absolute;
  bottom: 0;
  left: 0;
  height: 4px;
  width: 33.333%;
  background-color: #fa5757;
`;
const Features = () => {
  const [myTab, setMyTab] = useState("");

  // const [activeTab, setActiveTab] = useState("");
  const sliderRef = useRef(null);
  // const sliderRef = useRef(null);

  // useEffect(() => {
  //   console.log(sliderRef.current.getBoundingClientRect().left);
  // }, []);

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
          onClick={e => {
            e.preventDefault();
            setMyTab("");
          }}
        >
          Simple Bookmarking
        </FeaturesTabs>
        <FeaturesTabs
          onClick={e => {
            e.preventDefault();
            setMyTab("middle");
          }}
        >
          Speedy Searching
        </FeaturesTabs>

        <FeaturesTabs
          onClick={e => {
            e.preventDefault();
            setMyTab("right");
          }}
        >
          Easy Sharing
        </FeaturesTabs>
        <FeatureTabSlider style={slide} />
      </FeaturesTabsContainer>

      <div class="features-container-slideshow">
        {myTab === "" ? (
          <Tab>
            <FeatureImage1 />
            <div class="tab-details">
              <h2>Bookmark in one click</h2>
              <p>
                Organize your bookmarks however you like. Our simple
                drag-and-drop interface gives you complete control over how you
                manage your favourite sites.
              </p>
              <button>More Info</button>
            </div>
          </Tab>
        ) : null}

        {myTab === "middle" ? (
          <Tab>
            <FeatureImage2 />
            <div class="tab-details">
              <h2>Intelligent search</h2>
              <p>
                Our powerful search feature will help you find saved sites in no
                time at all. No need to trawl through all of your bookmarks.
              </p>
              <button>More Info</button>
            </div>
          </Tab>
        ) : null}

        {myTab === "right" ? (
          <Tab>
            <FeatureImage3 />
            <div class="tab-details">
              <h2>Share your bookmarks</h2>
              <p>
                Share your bookmarks Easily share your bookmarks and collections
                with others. Create a shareable link that you can send at the
                click of a button.
              </p>
              <button>More Info</button>
            </div>
          </Tab>
        ) : null}
      </div>
      <div class="curved-rectangle"></div>
    </FeaturesContainer>
  );
};

export default Features;
