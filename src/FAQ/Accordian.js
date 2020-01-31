import React, { useState, useRef, useEffect } from "react";

const Accordian = props => {
  const [active, setActive] = useState(false);
  const answerRef = useRef(null);

  useEffect(() => {
    answerRef.current.style.maxHeight = active
      ? `${answerRef.current.scrollHeight}px`
      : "0px";
  }, [answerRef, active]);

  const toggleActive = () => {
    setActive(!active);
  };

  return (
    <React.Fragment>
      <div class="question" onClick={toggleActive}>
        <p>{props.question}</p>

        <svg
          className={`image ${active ? "rotate" : ""}`}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path fill="none" stroke-width="3" d="M1 1l8 8 8-8" />
        </svg>
      </div>
      <div ref={answerRef} className="answer">
        {props.children}
      </div>
      <hr />
    </React.Fragment>
  );
};

export default Accordian;
