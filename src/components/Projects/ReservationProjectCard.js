import { Card } from "react-bootstrap";
import reservationHome from "./reservationHome.png";
import { Link } from "react-router-dom";

const ReservationProjectCard = () => {
  return (
    <>
      <Card bg="secondary" style={{ width: "18rem" }}>
        <Card.Img variant="top" src={reservationHome} />
        <Card.Body>
          <Card.Title>Resturant Reservation App</Card.Title>
          <Card.Text>
            Full-Stack application to allow a resturant to make, update, and
            delete reservations. Also allows a resturant to seat reservations a
            various tables
          </Card.Text>
          <Link
            to="https://github.com/gwalter66/Resturant-Reservation-System"
            className="btn btn-primary"
          >
            View
          </Link>
        </Card.Body>
      </Card>
    </>
  );
};

export default ReservationProjectCard;
