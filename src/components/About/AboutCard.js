import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone 👋,
            <br />
            <br />
            I'm <span className="purple">Kshitij Agarwal</span>, a final year student at NIT Jalandhar, originally from <span className="purple">Moradabad, Uttar Pradesh</span>. Currently, I'm interning at <span className="purple">DRDO</span> in New Delhi, where I'm honing my coding and technical skills.
            <br />
            <br />
            When I'm not immersed in technology, you can find me on the <span className="purple">basketball court</span> or exploring new destinations. I love balancing my passion for coding with my love for <span className="purple">sports and travel</span>.
            <br />
            <br />
            Looking forward to connecting with you all !
          </p>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful."{" "}
          </p>
          {/* <footer className="blockquote-footer">Kshitij</footer> */}
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
