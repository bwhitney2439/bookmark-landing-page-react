import React from "react";
import { useSpring, animated } from "react-spring";
const Tab = props => {
  const fadeIn = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 1000 }
  });

  return (
    <animated.div class="tab" style={fadeIn}>
      {props.children}
    </animated.div>
  );
};

export default Tab;
