import React from "react";
import {
  Mail,
  MailDesc,
  MailInputContainer,
  MailTitle,
} from "./mailList.style";

const MailList = () => {
  return (
    <Mail>
      <h1>Save money, save time</h1>
      <span>Sign up and we'll send the best deals to you</span>
      <MailInputContainer>
        <input type="text" placeholder="Your Email" />
        <button>Subscribe</button>
      </MailInputContainer>
    </Mail>
  );
};

export default MailList;
