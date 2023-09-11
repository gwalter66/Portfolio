import { Button, Card } from "react-bootstrap";
import FlashcardHome from "./FlashcardHome.png";

const FlashcardAppCard = () => {
  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={FlashcardHome} />
        <Card.Body>
          <Card.Title>Flashcard-O-Matic</Card.Title>
          <Card.Text>
            Application built with React.js intended for both teachers to create
            decks of flashcards for the subjects they teach, as well as for
            students to study the decks their teachers have created.
          </Card.Text>
          <Button variant="primary">View</Button>
        </Card.Body>
      </Card>
    </>
  );
};

export default FlashcardAppCard;
