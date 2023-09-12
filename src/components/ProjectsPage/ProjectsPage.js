import { Col, Container, Row } from "react-bootstrap";
import flashcardDashboard from "./flaschardsDashboard.png";
import weLoveMoviesCover from "./we-love-movies-cover.png";
import reservationsDashboard from "./reservations-dashboard.png";
import "./ProjectsPage.css";
import { Link } from "react-router-dom";

const ProjectsPage = () => {
  return (
    <>
      <Container>
        <Row className="mb-5">
          <h1 className="mt-3 mb-3">Exploring My Work</h1>
          <p>
            Welcome to the heart of my portfolio - the Projects page. Here,
            you'll find a curated collection of endeavors that reflect my
            passion, skills, and dedication as a Software Engineer. Each project
            tells a unique story, from inception to completion.
          </p>
          <p>
            I believe that the best way to showcase my abilities is through the
            work I've done. So, take your time, browse through these projects,
            and get a glimpse opf what I can bring to the table. If any project
            piques your intrest or you'd like to discuss potential
            collaborations, please dont hesitate to reach out via the contact
            page.
          </p>
          <p>Let's explore together and discover the possibilities</p>
        </Row>
        <Row className="mb-5">
          <Col>
            <img
              src={reservationsDashboard}
              alt="reservations dashboard"
              className="reservationsDashboard"
            />
          </Col>
          <Col>
            <h2>Resturant Reservations</h2>
            <p>
              This full-stack web application revolutionizes how resturants
              handle reservations. Built with JavaScript, Node.js, React,
              Express, PostgreSql, Knex, and Bootstrap, it's a powerhouse of
              convenience and efficiency
            </p>
            <Link to="/projects/reservations" className="btn btn-primary">
              View Project
            </Link>
          </Col>
        </Row>
        <Row className="mb-5">
          <Col>
            <h2>We Love Movies</h2>
            <p>
              Backend project, powered by Express, PostgrSQL, and Knex, is the
              backbone of a dynamic cinema application that offers users access
              to up-to-date movie listings, theater details, and reviews. With a
              range of endpoints designed for ease of use and robust
              functionality, this API simplifies the process of accessing movie
              information and managing reviews.
            </p>
            <Link to="/projects/welovemovies" className="btn btn-primary">
              View Project
            </Link>
          </Col>
          <Col>
            <img
              src={weLoveMoviesCover}
              alt="We Love Movies Cover"
              className="reservationsDashboard"
            />
          </Col>
        </Row>
        <Row className="mb-5">
          <Col>
            <img
              src={flashcardDashboard}
              alt="Flashcards Dashboard"
              className="reservationsDashboard"
            />
          </Col>
          <Col>
            <h2>Flashcard-O-Matic</h2>
            <p>
              Introducion Flashcard-O-Matic, a dynamic and user-freiendly
              flashcard application built with the power of JavaScript, Reactm
              HTML, CSS, and Bootstrap. This app is designed to streamline the
              learning process for both educators and students, making it a
              must-have tool in the world of education.
            </p>
            <Link to="/projects/flashcards" className="btn btn-primary">
              View Project
            </Link>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ProjectsPage;
