import React, { useState } from "react";
import "../css/contact.css";
import "../css/Tablet/tablet_contact.css";
import "../css/Moblie/moblie_contact.css";
import styled from "styled-components";

const Contact = () => {
  return (
    <footer className="contact">
      <div className="contact__container">
        <div className="contact__title">Contact</div>
        <div className="contact__info">
          <div className="contact__email">goodnight4857@naver.com</div>
          <div className="contact__cpyright">
            Copyright ⓒ hyesun han All right reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
