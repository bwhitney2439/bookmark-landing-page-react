import React from "react";

const Extensions = () => {
  return (
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
  );
};

export default Extensions;
