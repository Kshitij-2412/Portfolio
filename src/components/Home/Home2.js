import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineClose ,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              Accomplished problem solver with a strong foundation in
              programming, leveraging analytical skills to tackle complex coding
              challenges efficiently.
              <br />
              <br />I am proficient in
              <i>
                <b className="purple">
                  {" "}
                  C++ and the MERN (MongoDB, Express.js, React.js, Node.js)
                  stack
                </b>
              </i>
              <br />
              <br />
              My expertise lies in &nbsp;
              <i>
                <b className="purple">
                  crafting robust and scalable web applications{" "}
                </b>
                from backend to frontend, as well as
                <b className="purple">
                  {" "}
                  pushing the boundaries of web development
                </b>
              </i>
              <br />
              <br />
              I'm dedicated to creating innovative solutions that blend
              creativity with technical excellence, using
              <i>
                <b className="purple">
                  {" "}
                  modern web technologies and frameworks
                </b>
              </i>
              &nbsp; such as
              <i>
                <b className="purple"> React.js and Node.js</b>
              </i>
              <br />
              <br />
              Recently, I've been expanding my skillset by
              <i>
                <b className="purple">
                  {" "}
                  embarking on an exciting journey into Artificial Intelligence
                  and Machine Learning
                </b>
              </i>
              , embracing cutting-edge technologies to stay at the forefront of
              the rapidly evolving tech landscape.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <br/>
        <br/>
        <br/>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Kshitij-2412"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://x.com/Kshitij12760428"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineClose  />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/kshitij-agarwal-565b3a220/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/kshitijagarwal_24?igsh=Mjlxc203N2dqcDlx"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
