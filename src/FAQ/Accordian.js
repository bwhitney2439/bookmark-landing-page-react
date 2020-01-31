import React, { useState, useRef, useEffect } from "react";
import { useSpring, animated } from "react-spring";
const Accordian = props => {
  const [active, setActive] = useState(false);
  const answerRef = useRef(null);

  const slideDown = useSpring({
    maxHeight: active ? `${answerRef.current.scrollHeight}px` : `0px`
  });

  const rotate = useSpring({
    transform: active ? "rotate(-180deg)" : "rotate(0deg)",
    stroke: active ? "#fa5757" : "#5368df"
  });

  return (
    <React.Fragment>
      <div class="question" onClick={() => setActive(!active)}>
        <p>{props.question}</p>

        <animated.svg
          style={rotate}
          className="image"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path fill="none" stroke-width="3" d="M1 1l8 8 8-8" />
        </animated.svg>
      </div>
      <animated.div style={slideDown} ref={answerRef} className="answer">
        {props.children}
      </animated.div>
      <hr />
    </React.Fragment>
  );
};

export default Accordian;
