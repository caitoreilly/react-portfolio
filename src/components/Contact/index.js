import React, { useState } from "react";
import { validateEmail } from "../../utils/helpers";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import emailjs from "@emailjs/browser";

function ContactForm() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const { name, email, message } = formState;
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
      console.log("Form", formState);
    }
    // const params = {
    //   from_name: formState.name,
    //   email: formState.email,
    //   message: formState.message,
    // };
    // console.log(params);

    emailjs
      .sendForm(
        "service_p8cg1ib",
        "template_ow4wctd",
        ".contact-form",
        "DyhYiJgGqF2PnlVZu"
      )
      .then(
        (result) => {
          if (result.text === "OK") {
            // setFormState({ name: "", email: "", message: "" });
            document.location.reload();
          }
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const handleChange = (e) => {
    // console.log(e.target.name);
    if (e.target.name === "email") {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage("Your email is invalid.");
      } else {
        setErrorMessage("");
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage("");
      }
    }
    console.log("errorMessage", errorMessage);
  };

  // JSX
  return (
    <section>
      <h1 data-testid="h1tag" style={{ textAlign: "center" }}>
        Contact me
      </h1>
      <Form className="contact-form" onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Name:</Form.Label>
          <Form.Control
            type="name"
            name="name"
            defaultValue={name}
            onBlur={handleChange}
            placeholder="Enter name"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address:</Form.Label>
          <Form.Control
            type="email"
            name="email"
            defaultValue={email}
            onBlur={handleChange}
            placeholder="Enter email"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicMessage">
          <Form.Label>Message:</Form.Label>
          <Form.Control
            type="message"
            name="message"
            defaultValue={message}
            onBlur={handleChange}
            placeholder="Message"
          />
        </Form.Group>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      {/* <form id="contact-form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            defaultValue={name}
            onBlur={handleChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email address:</label>
          <input
            type="email"
            name="email"
            defaultValue={email}
            onBlur={handleChange}
          />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            name="message"
            rows="5"
            defaultValue={message}
            onBlur={handleChange}
          />
        </div>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
        <button data-testid="button" type="submit">
          Submit
        </button>
      </form> */}
    </section>
  );
}

export default ContactForm;
