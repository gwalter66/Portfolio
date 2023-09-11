import { Container, Nav, Navbar } from "react-bootstrap";

const Footer = () => {
  return (
    <>
      <Navbar variant="dark" bg="dark">
        <Container>
          <Navbar.Brand>George Walter</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Footer;
