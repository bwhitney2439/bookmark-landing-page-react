import React, { useState, useEffect } from "react";
import Features from "./Features";
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

      <section class="extensions-container" id="pricing">
        <div class="extensions-container-heading">
          <h2>Download the extension</h2>
          <p>
            We’ve got more browsers in the pipeline. Please do let us know if
            you’ve got a favourite you’d like us to prioritize.
          </p>
        </div>
        <div class="extensions-container-cards">
          <div class="card">
            <img src={require("./images/logo-chrome.svg")} alt="" />
            <div class="details">
              <h3>Add to Chrome</h3>
              <p>Minimum version 62</p>
            </div>
            <img src={require("./images/bg-dots.svg")} alt="" />
            <button>Add & Install Extension</button>
          </div>
          <div class="card">
            <img src={require("./images/logo-firefox.svg")} alt="" />
            <div class="details">
              <h3>Add to Firefox</h3>
              <p>Minimum version 55</p>
            </div>
            <img src={require("./images/bg-dots.svg")} alt="" />
            <button>Add & Install Extension</button>
          </div>
          <div class="card">
            <img src={require("./images/logo-opera.svg")} alt="" />
            <div class="details">
              <h3>Add to Opera</h3>
              <p>Minimum version 46</p>
            </div>
            <img src={require("./images/bg-dots.svg")} alt="" />
            <button>Add & Install Extension</button>
          </div>
        </div>
      </section>

      <section class="faq-container">
        <div class="faq-container-header">
          <h2>Frequently Asked Questions</h2>
          <p>
            Here are some of our FAQs. If you have any other questions you’d
            like answered please feel free to email us.
          </p>
        </div>

        <div class="faq-container-menu">
          <hr />
          <div class="question">
            <p>What is Bookmark?</p>
            <img src={require("./images/icon-arrow.svg")} alt="" />
          </div>
          <div class="answer">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum
              quis quam ornare mattis.
            </p>
          </div>
          <hr />{" "}
          <div class="question">
            <p>How can I request a new browser?</p>
            <img src={require("./images/icon-arrow.svg")} alt="" />
          </div>
          <div class="answer">
            <p>
              Vivamus luctus eros aliquet convallis ultricies. Mauris augue
              massa, ultricies non ligula. Suspendisse imperdiet. Vivamus luctus
              eros aliquet convallis ultricies. Mauris augue massa, ultricies
              non ligula. Suspendisse imperdie tVivamus luctus eros aliquet
              convallis ultricies. Mauris augue massa, ultricies non ligula.
              Suspendisse imperdiet.
            </p>
          </div>
          <hr />{" "}
          <div class="question">
            <p>Is there a mobile app?</p>
            <img src={require("./images/icon-arrow.svg")} alt="" />
          </div>
          <div class="answer">
            <p>
              Sed consectetur quam id neque fermentum accumsan. Praesent luctus
              vestibulum dolor, ut condimentum urna vulputate eget. Cras in
              ligula quis est pharetra mattis sit amet pharetra purus. Sed
              sollicitudin ex et ultricies bibendum.
            </p>
          </div>
          <hr />{" "}
          <div class="question">
            <p>What about other Chromium browsers?</p>
            <img src={require("./images/icon-arrow.svg")} alt="" />
          </div>
          <div class="answer">
            <p>
              Integer condimentum ipsum id imperdiet finibus. Vivamus in
              placerat mi, at euismod dui. Aliquam vitae neque eget nisl gravida
              pellentesque non ut velit. More Info 35,000+ already joined Stay
              up-to-date with what we’re doing Contact Us Features Pricing
              Contact
            </p>
          </div>
          <hr />{" "}
        </div>
        <button>More Info</button>
      </section>
    </main>
  );
};

export default Main;
