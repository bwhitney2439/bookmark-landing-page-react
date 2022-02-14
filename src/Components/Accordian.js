import React, { useState, useRef } from "react";
import { useSpring, animated } from "react-spring";
import styled from "styled-components";

const AccordianContainer = styled.div`
  hr {
    opacity: 50%;
  }
  @media (max-width: 375px) {
    p {
      font-size: 15px;
      font-weight: 400;
      line-height: 30px;
      letter-spacing: 0.140625px;
    }
  }
`;

const Question = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 19px 0;

  &:hover p {
    color: #fa5757;
  }
  p {
    color: #252b46;
    opacity: 100%;
  }

  @media (max-width: 375px) {
    postition: relative;
    p {
      font-size: 15px;
      font-weight: 400;
      line-height: 32px;
    }
  }
`;

const Image = styled(animated.svg)`
  padding-right: 24px;
  width: 43px;
  height: 12px;
  stroke: #5368df;
  transform-origin: 10px 5px;

  @media (max-width: 375px) {
    position: absolute;
    right: 2%;
  }
`;

const Answer = styled(animated.div)`
  overflow: hidden;

  p {
    padding-bottom: 19px;
  }
`;

const Accordian = (props) => {
  const [active, setActive] = useState(false);
  const answerRef = useRef(null);

  const slideDown = useSpring({
    maxHeight: active ? `${answerRef.current.scrollHeight}px` : `0px`,
  });

  const rotate = useSpring({
    transform: active ? "rotate(0deg)" : "rotate(-180deg)",
    stroke: active ? "#fa5757" : "#5368df",
  });

  return (
    <AccordianContainer>
      <Question onClick={() => setActive(!active)}>
        <p>{props.question}</p>

        <Image style={rotate} xmlns="http://www.w3.org/2000/svg">
          <path fill="none" stroke-width="3" d="M1 1l8 8 8-8" />
        </Image>
      </Question>
      <Answer style={slideDown} ref={answerRef}>
        <p>{props.answer}</p>
      </Answer>
      <hr />
    </AccordianContainer>
  );
};

export default Accordian;
