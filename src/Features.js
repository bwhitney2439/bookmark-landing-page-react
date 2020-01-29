import React, { useState } from "react";

const Features = () => {
  const [activeTab, setActiveTab] = useState("tab1");

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
          class={activeTab === "tab1" ? "selected" : ""}
          onClick={e => {
            e.preventDefault();
            setActiveTab("tab1");
          }}
          href="./"
        >
          Simple Bookmarking
        </a>
        <a
          class={activeTab === "tab2" ? "selected" : ""}
          onClick={e => {
            e.preventDefault();
            setActiveTab("tab2");
          }}
          href="./"
        >
          Speedy Searching
        </a>

        <a
          class={activeTab === "tab3" ? "selected" : ""}
          onClick={e => {
            e.preventDefault();
            setActiveTab("tab3");
          }}
          href="./"
        >
          Easy Sharing
        </a>
        <div class="slider"></div>
      </div>

      <div class="features-container-slideshow">
        <div class={`tab ${activeTab === "tab1" ? "active" : ""}`}>
          <img
            src={require("./images/illustration-features-tab-1.svg")}
            alt=""
          />
          <div class="tab-details">
            <h2>Bookmark in one click</h2>
            <p>
              Organize your bookmarks however you like. Our simple drag-and-drop
              interface gives you complete control over how you manage your
              favourite sites.
            </p>
            <button>More Info</button>
          </div>
        </div>

        <div
          class={`tab ${activeTab === "tab2" ? "active" : ""}`}
          style={{ marginLeft: "5%" }}
        >
          <img
            src={require("./images/illustration-features-tab-2.svg")}
            alt=""
          />
          <div class="tab-details">
            <h2>Intelligent search</h2>
            <p>
              Our powerful search feature will help you find saved sites in no
              time at all. No need to trawl through all of your bookmarks.
            </p>
            <button>More Info</button>
          </div>
        </div>

        <div
          class={`tab ${activeTab === "tab3" ? "active" : ""}`}
          style={{ marginLeft: "5%" }}
        >
          <img
            src={require("./images/illustration-features-tab-3.svg")}
            alt=""
          />
          <div class="tab-details">
            <h2>Share your bookmarks</h2>
            <p>
              Share your bookmarks Easily share your bookmarks and collections
              with others. Create a shareable link that you can send at the
              click of a button.
            </p>
            <button>More Info</button>
          </div>
        </div>
      </div>
      <div class="curved-rectangle"></div>
    </section>
  );
};

export default Features;
