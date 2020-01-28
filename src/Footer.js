import React, { Component } from "react";

export class Footer extends Component {
  render() {
    return (
      <footer>
        <section class="contactus-container" id="contact">
          <p>35,000+ already joined</p>
          <h2>Stay up-to-date with what we’re doing</h2>

          <div class="contactus-container-form">
            <input type="email" name="" id="" />
            <button>Contact Us</button>
          </div>
        </section>

        <section class="footer-container">
          <div class="footer-container-links">
            <img src={require("./images/logo-footer-bookmark.svg")} alt="" />
            <p>features</p>
            <p>pricing</p>
            <p>contact</p>
          </div>
          <div class="social-icons">
            <img src={require("./images/icon-facebook.svg")} alt="" />
            <img src={require("./images/icon-twitter.svg")} alt="" />
          </div>
        </section>
      </footer>
    );
  }
}

export default Footer;
