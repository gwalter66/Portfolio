import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

const Navbar1 = () => {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand>
            {
              <img
                src="./logo.png"
                alt="logo"
                width="30"
                height="30"
                className="d-inline-block align-top"
              />
            }
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link>
              <Link
                to="projects"
                className="nav.link"
                style={{ color: "inherit", textDecoration: "inherit" }}
              >
                Projects
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link
                to="/contact"
                className="nav.link"
                style={{ color: "inherit", textDecoration: "inherit" }}
              >
                {" "}
                Contact
              </Link>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Navbar1;
