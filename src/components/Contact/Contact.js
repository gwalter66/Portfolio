import { Container, Form, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

import linkedinLogo from "./linkedinLogo.png";
import githubLogo from "./githubLogo.png";

const Contact = () => {
  return (
    <>
      <Container className="mb-5">
        <h1 className="mb-5">Contact Me</h1>

        <Row className="mb-5">
          <Col className="mt-5 pt-5">
            <p>
              Im thrilled that you've taken the time to explore my portfolio.
              Whether you have a project in mind, a question to ask, or just
              wanted to say hello, I'd love to hear from you. Your ideas and
              feedback are important to me.
            </p>
            <p>
              Feel free to reach out using the contact form on the right or
              connect with me on LinkedIn or Github below. I'm always open to
              new collaborations and opportunities, so don't hesitate and turn
              your ideas into reality.
            </p>
          </Col>
          <Col>
            <Form>
              <Form.Group controlId="name">
                <Form.Label>Your Name</Form.Label>
                <Form.Control type="text" placeholder="Your Name" />
              </Form.Group>
              <Form.Group controlId="email">
                <Form.Label>Your Email</Form.Label>
                <Form.Control type="email" placeholder="example@email.com" />
              </Form.Group>
              <Form.Group controlId="message">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows={7} />
              </Form.Group>
              <button type="submit" className="btn btn-info mt-2">
                Send
              </button>
            </Form>
          </Col>
        </Row>
        <Row>
          <Col>
            <Link to="https://github.com/gwalter66" className="btn btn-info">
              <Card bg="info" style={{ width: "18rem" }}>
                <Card.Img variant="top" src={githubLogo} />
                Github
              </Card>
            </Link>
          </Col>
          <Col>
            <Link
              to="https://www.linkedin.com/in/gwalter1/"
              className="btn btn-info"
            >
              <Card bg="info" style={{ width: "18rem" }}>
                <Card.Img variant="top" src={linkedinLogo} />
                LinkedIn
              </Card>
            </Link>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Contact;
