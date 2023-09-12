import { Col, Container, Row } from "react-bootstrap";
import "./About.css";
import headshot from "./headshot.png";

const About = () => {
  return (
    <>
      <Container className="mt-5 mb-5">
        <Row>
          <h1 className="mb-5">About Me</h1>
          <Col>
            <img src={headshot} className="headshot mb-3" alt="Headshot" />
          </Col>
          <Col>
            <div className="about">
              <h3>Hi, I'm George</h3>
              <p>
                I am a Software Engineer with a unique journey. My Career
                originally started on the open road as a Tractor Trailer Driver,
                where I learned the importance of precision, adaptability, and
                relentless dedication.
              </p>
              <p>
                Inspired by the ever-evolving tech landscape, I transitioned
                into software engineering through THinkful's comprehensive
                program. Now, I specialize in a reange of skills, including
                JavaScript, HTML, CSS, React, Node.js, Express, and PostgreSQL.
              </p>
              <p>
                My diverse background fuels my problem-solving mindset and
                attention to detail. Whether I'm optimizing supply chains or
                writing efficient code, I bring a strong work ethic and a
                commitment to excellence to every endeavor.
              </p>
              <p>
                I'm passionate about creating solutions that bridge the gap
                between the physical and digital worlds. Let's collaborate on
                projects that drive innovation and transfor industries. Reach
                out to any of my contacts below to discuss exciting
                opportunities
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default About;
