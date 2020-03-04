import React from "react";
import Features from "./Components/Features";
import Extensions from "./Components/Extensions";
import Faq from "./Components/Faq";
import Bookmark from "./Components/Bookmark";

const Main = () => {
  return (
    <React.Fragment>
      <Bookmark />

      <Features />

      <Extensions />

      <Faq />
    </React.Fragment>
  );
};

export default Main;
