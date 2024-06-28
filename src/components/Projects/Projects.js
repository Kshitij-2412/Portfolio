import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import documentVerify from "../../Assets/Projects/documentVerify.jpg";
import connectify from "../../Assets/Projects/connectify.png";
import xcrypto from "../../Assets/Projects/crypto.png";
import goldsgym from "../../Assets/Projects/golds-gym.png";
import moviesland from "../../Assets/Projects/moviesLand.png";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={xcrypto}
              isBlog={false}
              title="Xcrypto"
              description="This project is a high-performance, React-based cryptocurrency tracking platform that offers real-time Bitcoin price updates across multiple currencies.  
              The application integrates third-party APIs to provide comprehensive, data-driven insights for investors, combining cutting-edge web technologies with financial market data to deliver a responsive and informative user experience."
              ghLink="https://github.com/Kshitij-2412/Cryptocurrency-Price-Tracking-and-Charting-"
              demoLink="https://cryptocurrency-price-tracking-and-charting.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={connectify}
              isBlog={false}
              title="Connectify"
              description="Connectify is a MERN social media application. This platform features an intuitive, React-based user interface that enables seamless user interactions, including content sharing and engagement. The backend is powered by secure RESTful APIs, ensuring robust user management and data handling. A standout feature is the real-time chat functionality implemented using Socket.io, allowing instant communication between users and enhancing overall engagement on the platform."
              ghLink="https://github.com/Kshitij-2412/connectify-socialMedia"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={goldsgym}
              isBlog={false}
              title="Gold's Gym"
              description="Gold Gyms is a fitness guidance platform designed to support users in their wellness journey. The application offers a diverse range of exercises categorized by body parts, each accompanied by detailed tutorial videos. This user-friendly interface allows individuals to access a variety of workout routines and follow along with instructional content. By providing a comprehensive exercise library with visual guidance, Gold Gyms helps users explore different workouts and improve their fitness independently."
              ghLink="https://github.com/Kshitij-2412/Golds_Gym"
              demoLink="https://goldfitnesscenter.netlify.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={documentVerify}
              isBlog={false}
              title="Document Verification and OCR system"
              description="This Python-based project uses Convolutional Neural Network (CNN) classifiers and optical character recognition (OCR) to verify Indian identity documents like Aadhar Cards, PAN Cards, and Cheque Leaves. Integrated into a Flask application, the system employs custom CNN models for document authentication and OCR for data extraction. This combination streamlines document processing, enhancing accuracy and efficiency in verification workflows. The project showcases the practical application of deep learning in solving real-world document authentication challenges."
              ghLink="https://github.com/Kshitij-2412/Document-Verification"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={moviesland}
              isBlog={false}
              title="Movies Land"
              description="Movies Land is a dynamic movie search application that provides users with an extensive database of films. When a user inputs a search query, the platform efficiently retrieves and displays a comprehensive list of relevant movies. This streamlined search functionality enables movie enthusiasts to quickly find information about their favorite films or discover new ones, serving as a valuable resource for cinephiles and casual viewers alike."
              demoLink="https://movies-land-chi.vercel.app/"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
