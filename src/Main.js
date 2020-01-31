import React from "react";
import Features from "./Features";
import Extensions from "./Extensions";
import Faq from "./FAQ/Faq";
// import { ReactComponent as Hero } from "./images/illustration-hero.svg";

const Main = () => {
  return (
    <main>
      <section class="bookmark" id="title">
        <div class="bookmark-container">
          <div class="bookmark-container-header">
            <h1>A Simple Bookmark Manager</h1>

            <p>
              A clean and simple interface to organize your favourite websites.
              Open a new browser tab and see your sites load instantly. Try it
              for free.
            </p>

            <div class="bookmark-container-buttons">
              <button>Get it on Chrome</button>
              <button>Get it on Firefox</button>
            </div>
          </div>
          {/* <Hero /> */}
          <img src={require("./images/illustration-hero.svg")} alt="" />
        </div>
        <div class="curved-rectangle"></div>
      </section>

      <Features />

      <Extensions />

      <Faq />
    </main>
  );
};

export default Main;
