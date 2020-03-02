import React from "react";
import Features from "./Features/Features";
import Extensions from "./Extensions";
import Faq from "./FAQ/Faq";
import Bookmark from './Bookmark/Bookmark'



const Main = () => {
  return (
    <main>
      <Bookmark />
      {/* <section className="bookmark" id="title">
        <div className="bookmark-container">
          <div className="bookmark-container-header">
            <h1>A Simple Bookmark Manager</h1>

            <p>
              A clean and simple interface to organize your favourite websites.
              Open a new browser tab and see your sites load instantly. Try it
              for free.
            </p>

            <div className="bookmark-container-buttons">
              <button>Get it on Chrome</button>
              <button>Get it on Firefox</button>
            </div>
          </div>

          <img src={require("./images/illustration-hero.svg")} alt="" />
        </div>
        <div className="curved-rectangle"></div>
      </section> */}

      <Features />

      <Extensions />

      <Faq />
    </main>
  );
};

export default Main;
