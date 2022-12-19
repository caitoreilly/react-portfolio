import React, { useState } from "react";
import { validateEmail } from "../../utils/helpers";
// import Form from "react-bootstrap/Form";
// import Button from "react-bootstrap/Button";


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
  };

  const handleChange = (e) => {
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
      <h1 data-testid="h1tag">Contact me</h1>
      <form id="contact-form" onSubmit={handleSubmit}>
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
      </form>
    </section>

    // <Form>
    //   <Form.Group className="mb-3" controlId="formBasicName">
    //     <Form.Label>Name:</Form.Label>
    //     <Form.Control type="name" placeholder="Enter name" />
    //   </Form.Group>

    //   <Form.Group className="mb-3" controlId="formBasicEmail">
    //     <Form.Label>Email address:</Form.Label>
    //     <Form.Control type="email" placeholder="Enter email" />
    //   </Form.Group>

    //   <Form.Group className="mb-3" controlId="formBasicMessage">
    //     <Form.Label>Message:</Form.Label>
    //     <Form.Control type="message" placeholder="Message" />
    //   </Form.Group>
    //   <Button variant="primary" type="submit">
    //     Submit
    //   </Button>
    // </Form>
  );
}

export default ContactForm;
