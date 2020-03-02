import React, { useState } from "react";
import styled from "styled-components";

const ContactUsContainer = styled.div`
  display: flex;
  flex-direction: column;
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

  input {
    width: 300px;
    height: 48px;
    border-radius: 5px;
    border: none;
    padding: 10px 20px;
    margin-right: 16px;
  }
  button {
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
  }
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

  return (
    <ContactUsContainer id="contact">
      <p>35,000+ already joined</p>
      <h2>Stay up-to-date with what we’re doing</h2>

      <div class="contactus-container-form">
        <input
          type="email"
          name=""
          id=""
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <button onClick={handleClick}>Contact Us</button>
        {isError && <div>Something went wrong ...</div>}
      </div>
    </ContactUsContainer>
  );
};

export default ContactUs;
