import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import ContactForm from "./ContactForm";

function Contact() {
  return (
    <Container fluid className="contact-section d-flex flex-column min-vh-100">
      <Particle />
      <Container className="flex-grow-1 d-flex align-items-center">
        <Row className="justify-content-center w-100">
          <Col md={8} lg={6}>
            <h1 className="text-center mb-4" style={{ fontSize: "2.1em" }}>
              <span style={{ color: "white" }}>Get In</span>{" "}
              <strong className="purple">Touch</strong>
            </h1>
            <ContactForm />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Contact;