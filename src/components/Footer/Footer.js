import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <Navbar variant="dark" bg="dark">
        <Container>
          <Navbar.Brand>George Walter</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link>
              <Link
                to="/contact"
                style={{ color: "inherit", textDecoration: "inherit" }}
              >
                Contact
              </Link>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Footer;
