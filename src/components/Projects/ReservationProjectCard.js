import { Card } from "react-bootstrap";
import reservationHome from "./reservationHome.png";
import { Link } from "react-router-dom";

const ReservationProjectCard = () => {
  return (
    <>
      <Card bg="secondary" style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src={reservationHome}
          style={{ height: "10rem " }}
        />
        <Card.Body>
          <Card.Title>Reservation App</Card.Title>
          <Card.Text style={{ height: "10rem" }}>
            Full-Stack application to allow a resturant to make, update, and
            delete reservations. Also allows a resturant to seat reservations a
            various tables
          </Card.Text>
          <Link to="projects/reservations" className="btn btn-primary">
            View
          </Link>
        </Card.Body>
      </Card>
    </>
  );
};

export default ReservationProjectCard;
