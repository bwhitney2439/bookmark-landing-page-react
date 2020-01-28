import React, { Component } from "react";

export class Header extends Component {
  render() {
    return (
      <header>
        <div class="nav-bar-container">
          <img src={require("./images/logo-bookmark.svg")} alt="" />

          <div class="nav-bar-container-links">
            <a href="#features">Features</a>
            <a href="#pricing">Pricing</a>
            <a href="#contact">Contact</a>
            <button>Login</button>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
