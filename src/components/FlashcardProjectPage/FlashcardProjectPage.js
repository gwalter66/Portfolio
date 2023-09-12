import { Card, Col, Container, Row } from "react-bootstrap";
import FlashcardHomescreen from "./FlashcardsHomescreen.png";
import { Link } from "react-router-dom";

import deckCreationScreenShot from "./deckCreationScreenshot.png";
import studyScreenScreenshot from "./studyScreenScreenshot.png";

const FlashcardProjectPage = () => {
  return (
    <>
      <Container>
        <Row className="mt-3 mb-1">
          <h1>Flashcard-O-Matic</h1>
        </Row>

        <Row className="mb-3">
          <Col>
            <p>
              Flashcard-O-Matic is more than just a flashcard application; it's
              a versatile educational tool that bridges the gap between teachers
              and students. Whether you're an educator seeking to enhance your
              teaching materials or a student looking for an effective study
              aid, Flashcard-O-Matic has you covered
            </p>
          </Col>

          <Col>
            <p>
              Join the ranks of educators and learners who are revolutionizing
              the learning experience with Flashcard-O-Matic. Try it today and
              embark on a journey of interactive and effective learning like
              never before!
            </p>

            <Link
              to="https://github.com/gwalter66/CapStone-Flashcard-app"
              className="btn btn-primary"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-github"
                viewBox="0 0 16 16"
              >
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
              </svg>
              Github
            </Link>
          </Col>
        </Row>

        <Row className="mb-3">
          <img src={FlashcardHomescreen} alt="Flashcard Homescreen" />
        </Row>

        <Row className="mb-3">
          <h2>Key Features</h2>
        </Row>

        <Row className="mb-5">
          <Col>
            <Card
              bg="secondary"
              text="light"
              border="info"
              style={{ width: "20rem", height: "34rem" }}
            >
              <Card.Img
                variant="top"
                src={deckCreationScreenShot}
                style={{ height: "17rem" }}
              />
              <Card.Body>
                <Card.Title>Deck Creation</Card.Title>
                <Card.Text>
                  Teachers can easily craft comprehensive decks of flashcards
                  tailored to the subjects they teach. Our intuitive interface
                  ensures that educatiors can quickly assemble the perfect
                  learning resource.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col className="justify-content-center">
            <Card
              bg="secondary"
              text="light"
              border="info"
              style={{ width: "20rem", height: "34rem" }}
            >
              <Card.Img
                variant="top"
                src={studyScreenScreenshot}
                style={{ height: "17rem" }}
              />
              <Card.Body>
                <Card.Title>Interactive Learning</Card.Title>
                <Card.Text>
                  For Students, FlashMaster offers a seamless platform to access
                  and study the decks created by their teachers. Dive into
                  interactive and engaging learning sessions anytime, anywhere.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default FlashcardProjectPage;
