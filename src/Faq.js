import React, { useState } from "react";
// import styled, { keyframes } from "styled-components";
// import { fadeInDown } from "react-animations";
import { CSSTransitionGroup } from "react-transition-group";

// import slideInDown from "react-animations/lib/slideInDown";

// const fadeInDownAnimation = keyframes`${fadeInDown}`;

// const expandCollapseAnimation = keyframes`

// from {
//   max-height: 0

// }

// to {

// }
// `;

// const FadeInDownDiv = styled.div`
//   animation: 1s ${fadeInDownAnimation};
// `;

const Faq = () => {
  const [activeAnswers, setActiveAnswers] = useState([]);

  // const questionOneRef = useRef(null);

  const handleActiveAnswer = currentAnswer => {
    console.log(activeAnswers);
    if (activeAnswers.includes(currentAnswer)) {
      setActiveAnswers(
        activeAnswers.filter(answer => {
          return answer !== currentAnswer;
        })
      );
    } else {
      setActiveAnswers([...activeAnswers, currentAnswer]);
    }
  };

  // const handleClick = () => {
  //   console.log("its working");
  //   questionOneRef.current.classList.toggle("active");
  // };

  return (
    <section class="faq-container">
      <div class="faq-container-header">
        <h2>Frequently Asked Questions</h2>
        <p>
          Here are some of our FAQs. If you have any other questions you’d like
          answered please feel free to email us.
        </p>
      </div>

      <div class="faq-container-menu">
        <hr />
        <div class="question" onClick={() => handleActiveAnswer("answer1")}>
          <p>What is Bookmark?</p>
          <img src={require("./images/icon-arrow.svg")} alt="" />
        </div>
        <CSSTransitionGroup
          transitionName="example"
          transitionEnterTimeout={1}
          transitionLeaveTimeout={1}
        >
          {activeAnswers.includes("answer1") ? (
            <div key={123} class="answer">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                tincidunt justo eget ultricies fringilla. Phasellus blandit
                ipsum quis quam ornare mattis.
              </p>
            </div>
          ) : null}
        </CSSTransitionGroup>
        <hr />{" "}
        <div class="question" onClick={() => handleActiveAnswer("answer2")}>
          <p>How can I request a new browser?</p>
          <img src={require("./images/icon-arrow.svg")} alt="" />
        </div>
        {activeAnswers.includes("answer2") ? (
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
        ) : null}
        <hr />{" "}
        <div class="question" onClick={() => handleActiveAnswer("answer3")}>
          <p>Is there a mobile app?</p>
          <img src={require("./images/icon-arrow.svg")} alt="" />
        </div>
        {activeAnswers.includes("answer3") ? (
          <div class="answer">
            <p>
              Sed consectetur quam id neque fermentum accumsan. Praesent luctus
              vestibulum dolor, ut condimentum urna vulputate eget. Cras in
              ligula quis est pharetra mattis sit amet pharetra purus. Sed
              sollicitudin ex et ultricies bibendum.
            </p>
          </div>
        ) : null}
        <hr />{" "}
        <div class="question" onClick={() => handleActiveAnswer("answer4")}>
          <p>What about other Chromium browsers?</p>
          <img src={require("./images/icon-arrow.svg")} alt="" />
        </div>
        {activeAnswers.includes("answer4") ? (
          <div class="answer">
            <p>
              Integer condimentum ipsum id imperdiet finibus. Vivamus in
              placerat mi, at euismod dui. Aliquam vitae neque eget nisl gravida
              pellentesque non ut velit. More Info 35,000+ already joined Stay
              up-to-date with what we’re doing Contact Us Features Pricing
              Contact
            </p>
          </div>
        ) : null}
        <hr />
      </div>
      <button>More Info</button>
    </section>
  );
};

export default Faq;
