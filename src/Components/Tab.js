import React from "react";
import { useSpring, animated } from "react-spring";
import styled from "styled-components";

const FeaturesTab = styled(animated.div)`
  display: flex;

  justify-content: space-between;
  align-items: center;
  height: 346px;
`;

const Tab = props => {
  const fadeIn = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 1000 }
  });

  return <FeaturesTab style={fadeIn}>{props.children}</FeaturesTab>;
};

export default Tab;
