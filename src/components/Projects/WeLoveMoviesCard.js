import { Card } from "react-bootstrap";
import weLoveMoviesCover from "./we-love-movies-cover.png";
import { Link } from "react-router-dom";

const WeLoveMoviesCard = () => {
  return (
    <>
      <Card bg="secondary" style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src={weLoveMoviesCover}
          style={{ height: "10rem" }}
        />
        <Card.Body>
          <Card.Title>We Love Movies</Card.Title>
          <Card.Text style={{ height: "10rem" }}>
            A backend Express application, Allowing the Front-End application to
            gain access to data about movies, theaters, and reviews.
          </Card.Text>
          <Link to="/projects/welovemovies" className="btn btn-primary">
            View
          </Link>
        </Card.Body>
      </Card>
    </>
  );
};

export default WeLoveMoviesCard;
