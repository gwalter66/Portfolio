import { Card, Button } from "react-bootstrap";
import reservationHome from "./reservationHome.png";

const ReservationProjectCard = () => {
  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={reservationHome} />
        <Card.Body>
          <Card.Title>Resturant Reservation App</Card.Title>
          <Card.Text>
            Full-Stack application to allow a resturant to make, update, and
            delete reservations. Also allows a resturant to seat reservations a
            various tables
          </Card.Text>
          <Button variant="primary">View</Button>
        </Card.Body>
      </Card>
    </>
  );
};

export default ReservationProjectCard;
