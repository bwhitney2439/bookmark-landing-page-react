import React, { useState } from "react";
import Accordian from "./Accordian";
import styled from "styled-components";

const FAQContainer = styled.section`
  padding: 5% 10% 150px 10%;

  button {
    display: block;
    border: none;
    height: 48px;
    margin: auto;
    border-radius: 5px;
    width: 113px;
    font-size: 14px;
    font-weight: 600;
    background-color: #5368df;
    color: white;
    box-shadow: 0px 8px 8px -4px rgba(73, 93, 207, 0.2);

    &:hover {
      background-color: white;
      border: 2px solid #5368df;
      color: #5368df;
    }
  }

  @media (max-width: 375px) {
    padding: unset;

    margin-bottom: 123px;
  }
`;

const FAQContainerHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
  max-width: 540px;
  height: 124px;
  margin: 0 auto;
  margin-bottom: 56px;

  @media (max-width: 375px) {
    width: 311px;
    height: 151px;
    margin-bottom: 65px;
    h2 {
      font-size: 24px;
      font-weight: 500;
      line-height: 30px;
      text-align: center;
      letter-spacing: -0.075px;
    }

    p {
      font-size: 15px;
      font-weight: 400;
      line-height: 25px;
      text-align: center;
    }
  }
`;

const FAQContainerMenu = styled.div`
  max-width: 540px;
  margin: 0 auto;
  margin-bottom: 54px;

  hr {
    opacity: 50%;
  }

  @media (max-width: 375px) {
    width: 313px;
    margin-bottom: 48px;
  }
`;

const Faq = () => {
  const INITIAL_STATE = [
    {
      question: "What is Bookmark?",
      answer: `Lorem ipsum dolor sit amet, 
      consectetur adipiscing elit. Fuscetincidunt justo eget ultricies fringilla. 
      Phasellus blandit ipsum quis quam ornare mattis.`
    },
    {
      question: "How can I request a new browser?",
      answer: `Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa,
      ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros
      aliquet convallis ultricies. Mauris augue massa, ultricies non
      ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis
      ultricies. Mauris augue massa, ultricies non ligula. Suspendisse
      imperdiet.`
    },
    {
      question: "Is there a mobile app?",
      answer: `Sed consectetur quam id neque fermentum accumsan. Praesent luctus
      vestibulum dolor, ut condimentum urna vulputate eget. Cras in ligula
      quis est pharetra mattis sit amet pharetra purus. Sed sollicitudin
      ex et ultricies bibendum.`
    },
    {
      question: `What about other Chromium browsers?`,
      answer: `Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat
      mi, at euismod dui. Aliquam vitae neque eget nisl gravida
      pellentesque non ut velit. More Info 35,000+ already joined Stay
      up-to-date with what we’re doing Contact Us Features Pricing Contact`
    }
  ];

  const [questionsAndAnswers] = useState(INITIAL_STATE);

  return (
    <FAQContainer>
      <FAQContainerHeader>
        <h2>Frequently Asked Questions</h2>
        <p>
          Here are some of our FAQs. If you have any other questions you’d like
          answered please feel free to email us.
        </p>
      </FAQContainerHeader>
      <FAQContainerMenu>
        <hr />
        {questionsAndAnswers.map(questionsAndAnswer => {
          return (
            <Accordian
              question={questionsAndAnswer.question}
              answer={questionsAndAnswer.answer}
            />
          );
        })}
      </FAQContainerMenu>
      <button>More Info</button>
    </FAQContainer>
  );
};

export default Faq;
