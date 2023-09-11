import { Container, Row } from "react-bootstrap";
import FlashcardAppCard from "../Projects/FlashcardAppCard";
import ReservationProjectCard from "../Projects/ReservationProjectCard";
import WeLoveMoviesCard from "../Projects/WeLoveMoviesCard";

const ProjectView = () => {
  return (
    <>
      <Container>
        <h1>My Projects</h1>
        <Row className="justify-content-between m-1 p-1">
          <ReservationProjectCard />
          <WeLoveMoviesCard />
          <FlashcardAppCard />
        </Row>
      </Container>
    </>
  );
};

export default ProjectView;
