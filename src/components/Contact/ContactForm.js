import React, { useState } from "react";
import { Form, Button, Spinner } from "react-bootstrap";
import emailjs from "emailjs-com";
import toast, { Toaster } from "react-hot-toast";
import "./ContactForm.css";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const service_id=process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const template_id=process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    const user_id=process.env.REACT_APP_EMAILJS_USER_ID;

    try {
      const result = await emailjs.send(
        service_id,
        template_id,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        user_id
      );

    //   console.log(result.text);

      toast.success("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
    //   console.log(error);
      toast.error("Failed to send message. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Form onSubmit={handleSubmit} className="contact-form">
        <Form.Group className="mb-3" controlId="formName">
          <Form.Control
            type="text"
            placeholder="Enter your name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="contact-input"
            required
            disabled={isLoading}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Control
            type="email"
            placeholder="Enter your email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="contact-input"
            required
            disabled={isLoading}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formMessage">
          <Form.Control
            as="textarea"
            rows={4}
            placeholder="Enter your message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="contact-input"
            required
            disabled={isLoading}
          />
        </Form.Group>
        <Button
          variant="primary"
          type="submit"
          className="w-100 contact-submit"
          disabled={isLoading}
        >
          {isLoading ? (
            <>
              <Spinner
                as="span"
                animation="border"
                size="sm"
                role="status"
                aria-hidden="true"
              />
              <span className="ms-2">Sending...</span>
            </>
          ) : (
            "Submit"
          )}
        </Button>
      </Form>
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            background: "#333",
            color: "#fff",
          },
        }}
      />
    </>
  );
}

export default ContactForm;
