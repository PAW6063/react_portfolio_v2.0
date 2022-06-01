import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./Contact.css";

export default function Contact() {
  const [mailState, setMailState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const nameChange = (event) => {
    setMailState({
      name: event.target.value,
      email: mailState.email,
      message: mailState.message,
    });
  };

  const emailChange = (event) => {
    setMailState({
      name: mailState.name,
      email: event.target.value,
      message: mailState.message,
    });
  };

  const messageChange = (event) => {
    setMailState({
      name: mailState.name,
      email: mailState.email,
      message: event.target.value,
    });
  };

  const handleSubmitForm = (event) => {
    event.preventDefault();

    fetch("http://localhost:3001/contact", {
      method: "POST",
      body: JSON.stringify(mailState),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        if (response.status === "success") {
          resetForm();
        } else if (response.status === "fail") {
          alert("Message failed to send.");
        }
      });
  };

  const resetForm = () => {
    setMailState({ name: "", email: "", message: "" });
  };

  return (
    <div className="contact">
      <h1 className="main-header">{"<Contact Me/>"}</h1>

      <ul className="info-list">
        <h3 className="info-header">LinkedIn</h3>
        <Link
          to={{
            pathname: "https://www.linkedin.com/in/phillip-welch-67a533214/",
          }}
          target="_blank"
          className="info-link"
        >
          <li className="info-list-item">phillip-welch-67a533214/</li>
        </Link>

        <h3 className="info-header">Email</h3>
        <Link
          to="#"
          onClick={() =>
            (window.location = "mailto:phillip.w3lch455@gmail.com")
          }
          className="info-link"
        >
          <li className="info-list-item">phillip.w3lch455@gmail.com</li>
        </Link>
      </ul>

      <h2 className="contact-header">
        Message Me!
        {/* <span className="under-maintance">(Under Maintance)</span> */}
      </h2>
      <form className="contact-form" onSubmit={handleSubmitForm}>
        <label className="form-label name-label">Name</label>
        <input
          type="text"
          className=" form-input name-input"
          value={mailState.name}
          onChange={nameChange}
        />

        <label className="form-label email-label">Email</label>
        <input
          type="email"
          className="form-input email-input"
          value={mailState.email}
          onChange={emailChange}
        />

        <label className="form-label message-label">Message</label>
        <textarea
          className="form-input message-input"
          value={mailState.message}
          onChange={messageChange}
        />

        <button type="submit" className="form-button">
          Send
        </button>
      </form>
    </div>
  );
}
