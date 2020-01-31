import React, { useState } from "react";
import Tab from "./Tab";
import { ReactComponent as FeatureImage1 } from "../images/illustration-features-tab-1.svg";
import { ReactComponent as FeatureImage2 } from "../images/illustration-features-tab-2.svg";
import { ReactComponent as FeatureImage3 } from "../images/illustration-features-tab-3.svg";

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

const FeaturesTabs = styled.div`
  position: relative;
  width: 730px;
  height: 49px;
  display: flex;
  justify-content: space-around;
  margin: auto;
  margin-bottom: 72px;
`;

const FeatureTab = styled.div`
  text-align: center;
  text-decoration: none;
  height: 100%;
  width: 243px;
  font-size: 16px;
  color: #252b46;
  border-bottom: 1px solid rgb(155, 155, 155);
  transition: border-bottom 0.3s ease-in-out;
`;

const FeatureTabSlider = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  height: 4px;
  width: 243px;
  background-color: #fa5757;
  transition: all 0.6s ease;
  cursor: pointer;

  &.middle {
    left: 243px;
  }

  &.right {
    left: 486px;
  }
`;
const Features = () => {
  const [activeTab, setActiveTab] = useState("");

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
      <FeaturesTabs>
        <FeatureTab
          onClick={e => {
            setActiveTab("");
          }}
        >
          Simple Bookmarking
        </FeatureTab>
        <FeatureTab
          onClick={e => {
            setActiveTab("middle");
          }}
        >
          Speedy Searching
        </FeatureTab>

        <FeatureTab
          onClick={e => {
            setActiveTab("right");
          }}
        >
          Easy Sharing
        </FeatureTab>
        <FeatureTabSlider className={activeTab} />
      </FeaturesTabs>

      <div class="features-container-slideshow">
        {activeTab === "" ? (
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

        {activeTab === "middle" ? (
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

        {activeTab === "right" ? (
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
