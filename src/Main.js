import React from "react";
import Features from "./Components/Features";
import Extensions from "./Components/Extensions";
import Faq from "./Components/Faq";
import Bookmark from "./Components/Bookmark";

const Main = () => {
  return (
    <main>
      <Bookmark />

      <Features />

      <Extensions />

      <Faq />
    </main>
  );
};

export default Main;
