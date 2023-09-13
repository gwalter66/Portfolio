import { Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

import reservationsDashboard from "./reservations-dashboard.png";
import reservationsControlScreenshot from "./reservationControlScreenshot.png";
import tableAssignmentScreenshot from "./tableAssignmentScreenshot.png";
import tableManagementScreenshot from "./tableManagementScreenshot.png";
import userFriendlyInterfaceScreenshot from "./userFriendlyInterfaceScreenshot.png";
import robustBackendScreenshot from "./robustBackendScreenshot.png";
import restfulApisScreenshot from "./restfulApisScreenshot.png";

const ReservationsProject = () => {
  return (
    <>
      <Container>
        <Row>
          <h1>Effortless Resturant Reservation Management</h1>
        </Row>
        <Row className="mt-3 mb-5">
          <Col>
            <p>
              This application simplifies resturant reservation management,
              enhancing the dining experience for both customers and staff. Say
              goodbye to reservation hassles and hello to efficient, organized,
              and stress-free resturant operations.
            </p>
          </Col>
          <Col>
            <p>
              Ready to optimize your restaurants's reservation system? Try this
              web application today and transform the way you manage
              reservations!
            </p>
            <Link to="" className="btn btn-primary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-github"
                viewBox="0 0 16 16"
              >
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
              </svg>{" "}
              Github
            </Link>
          </Col>
        </Row>
        <Row className="mb-5">
          <img src={reservationsDashboard} alt="Reservations Dashboard" />
        </Row>
        <Row className="mb-3">
          <Col>
            <h2>Key Features</h2>
          </Col>
        </Row>
        <Row className="mb-5">
          <Col>
            <Card
              bg="info"
              border="dark"
              style={{ width: "18rem", height: "24rem" }}
            >
              <Card.Img
                variant="top"
                src={reservationsControlScreenshot}
                style={{ height: "15rem" }}
              />
              <Card.Body>
                <Card.Title>Reservation Control</Card.Title>
                <Card.Text>
                  Make, update or delete reservations seamlessly with just a few
                  clicks.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card
              bg="info"
              border="dark"
              style={{ width: "18rem", height: "24rem" }}
            >
              <Card.Img
                variant="top"
                src={tableAssignmentScreenshot}
                style={{ height: "15rem" }}
              />
              <Card.Body>
                <Card.Title>Table Assignment</Card.Title>
                <Card.Text>
                  Easily seat reservations at specified tables to optimize your
                  restaurant's seating arrangement
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card
              bg="info"
              border="dark"
              style={{ width: "18rem", height: "24rem" }}
            >
              <Card.Img
                variant="top"
                src={tableManagementScreenshot}
                style={{ height: "15rem" }}
              />
              <Card.Body>
                <Card.Title>Table Management</Card.Title>
                <Card.Text>
                  Efficiently clear and prepare tables for the next party once
                  the dining experience is complete
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <h2>How It Works</h2>
        </Row>
        <Row className="mt-3 mb-5">
          <Col>
            <Card
              bg="secondary"
              border="info"
              style={{ width: "18rem", height: "26rem" }}
            >
              <Card.Img
                variant="top"
                src={userFriendlyInterfaceScreenshot}
                style={{ height: "15rem" }}
              />
              <Card.Body>
                <Card.Title>User-Friendly Interface</Card.Title>
                <Card.Text>
                  The intuitive user interface powered by REact and Bootstrap
                  makes managing reservations a breeze.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card
              bg="secondary"
              border="info"
              style={{ width: "18rem", height: "26rem" }}
            >
              <Card.Img
                variant="top"
                src={robustBackendScreenshot}
                style={{ height: "15rem" }}
              />
              <Card.Body>
                <Card.Title>Robust Backend</Card.Title>
                <Card.Text>
                  Our Node.js and Express backend, coupled with PostgreSQL and
                  Knex, ensures your data is handled securely and reliably.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card
              bg="secondary"
              border="info"
              style={{ width: "18rem", height: "26rem" }}
            >
              <Card.Img
                variant="top"
                src={restfulApisScreenshot}
                style={{ height: "15rem" }}
              />
              <Card.Body>
                <Card.Title>RESTful API's</Card.Title>
                <Card.Text>
                  We've implemented RESTful API's to facilitate smooth
                  communication between the front-end and back-end components.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ReservationsProject;
