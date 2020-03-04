import React, { useState } from "react";
import { ReactComponent as ExclamationLogo } from "../images/exclamation-logo.svg";
import styled, { css } from "styled-components";
import { useSpring, animated } from "react-spring";

const ContactUsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 58px 0 74px 0;
  background-color: #5368df;
  text-align: center;
  height: 360px;

  p {
    color: white;
    opacity: 100%;
    text-transform: uppercase;
    font-size: 13px;
    font-weight: 500;
    line-height: 40px;
    letter-spacing: 5px;
  }
  h2 {
    color: white;
    width: 411px;
    margin: auto;
  }

 
  }
`;

const ContactusContainerForm = styled.div`
  position: relative;
  width: 442px;
  margin: auto;
`;

const InputContainer = styled.div`
  display: flex;
  position: relative;
`;

const Input = styled.input`
  width: 300px;
  height: 48px;
  border-radius: 5px;
  border: none;
  padding: 10px 20px;
  margin-right: 16px;
  z-index: 5;
  ${props =>
    props.isError &&
    css`
      border: 2px solid #fa5757;
    `}
`;

const Button = styled.button`
  border: none;
  height: 48px;
  margin: auto;
  border-radius: 5px;
  width: 126px;
  font-size: 14px;
  font-weight: 600;
  background-color: #fa5757;
  color: white;
  box-shadow: 0px 8px 8px -4px rgba(73, 93, 207, 0.2);

  &:hover {
    background-color: white;
    color: #fa5757;
    border: 2px solid #fa5757;
  }
`;

const Error = styled(animated.div)`
  position: absolute;
  top: 0;
  width: 300px;
  height: 70px;
  background-color: #fa5757;
  text-align: left;
  padding: 52px 5px 5px 12px;
  color: white;
  border-radius: 5px;
  // font-family: Rubik;
  font-size: 10px;
  font-style: italic;
  font-weight: 500;
  line-height: 12px;
  letter-spacing: 0.25px;
`;

const Exclamation = styled(ExclamationLogo)`
  position: absolute;
  right: 157px;
  top: 14px;
  z-index: 6;
`;
const ContactUs = () => {
  const [email, setEmail] = useState("");
  const [isError, setIsError] = useState(false);
  const handleClick = () => {
    const emailRegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (emailRegExp.test(email)) {
      setIsError(false);
    } else {
      setIsError(true);
    }
  };

  const fadeIn = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 1000 }
  });
  return (
    <ContactUsContainer id="contact">
      <p>35,000+ already joined</p>
      <h2>Stay up-to-date with what we’re doing</h2>

      <ContactusContainerForm>
        <InputContainer>
          <Input
            isError={isError}
            type="email"
            name=""
            id=""
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          {isError && <Exclamation />}
          <Button onClick={handleClick}>Contact Us</Button>
        </InputContainer>
        {isError && (
          <Error style={fadeIn}>Whoops, make sure it’s an email</Error>
        )}
      </ContactusContainerForm>
    </ContactUsContainer>
  );
};

export default ContactUs;
