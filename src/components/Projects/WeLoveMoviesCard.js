import { Button, Card } from "react-bootstrap";
import weLoveMoviesCover from "./we-love-movies-cover.png";

const WeLoveMoviesCard = () => {
  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={weLoveMoviesCover} />
        <Card.Body>
          <Card.Title>We Love Movies</Card.Title>
          <Card.Text>
            A backend Express application, Allowing the Front-End application to
            gain access to data about movies, theaters, and reviews.
          </Card.Text>
          <Button variant="primary">View</Button>
        </Card.Body>
      </Card>
    </>
  );
};

export default WeLoveMoviesCard;
