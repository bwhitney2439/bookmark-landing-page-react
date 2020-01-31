import React, { useState } from "react";

import Tab from "./Tab";
import { ReactComponent as FeatureImage1 } from "../images/illustration-features-tab-1.svg";
import { ReactComponent as FeatureImage2 } from "../images/illustration-features-tab-2.svg";
import { ReactComponent as FeatureImage3 } from "../images/illustration-features-tab-3.svg";

const Features = () => {
  const [activeTab, setActiveTab] = useState("");

  return (
    <section class="features-container" id="features">
      <div class="features-container-header">
        <h2>Features</h2>
        <p>
          Our aim is to make it quick and easy for you to access your favourite
          websites. Your bookmarks sync between your devices so you can access
          them on the go.
        </p>
      </div>
      <div class="features-container-tabs">
        <a
          onClick={e => {
            e.preventDefault();
            setActiveTab("");
          }}
          href="./"
        >
          Simple Bookmarking
        </a>
        <a
          onClick={e => {
            e.preventDefault();
            setActiveTab("middle");
          }}
          href="./"
        >
          Speedy Searching
        </a>

        <a
          onClick={e => {
            e.preventDefault();
            setActiveTab("right");
          }}
          href="./"
        >
          Easy Sharing
        </a>
        <div class={`slider ${activeTab}`}></div>
      </div>

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
    </section>
  );
};

export default Features;
