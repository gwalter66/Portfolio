import { Col, Container, ListGroup, Row } from "react-bootstrap";
import weLoveMoviesCover from "./we-love-movies-cover.png";
import { Link } from "react-router-dom";

const WeLoveMoviesPage = () => {
  return (
    <>
      <Container>
        <Row className="mt-3 mb-3">
          <h1>We Love Movies</h1>
        </Row>

        <Row>
          <p>
            This Express, PostgreSQL, and Knex-Based Backend Project offers a
            feature-rish and user-friendly solution for managing and accessing
            movie information and reviews. Whether you're a movie enthusiast,
            developer, or theater owner, our API empowers you to deliver the
            latest cinematic experiences to your audience with ease.
          </p>
        </Row>

        <Row>
          <img src={weLoveMoviesCover} alt="We Love Movies Cover" />
        </Row>

        <Row className="mb-5">
          <Col>
            <h2 className="mb-3">Key Features</h2>
            <ListGroup>
              <ListGroup.Item variant="success">
                <Row style={{ width: "16rem" }}>
                  <h3>Current Movies</h3>
                </Row>
                <Row>
                  <p>
                    With the <b>`GET /movies/?is_showing=true`</b> endpoint,
                    users can effortlessly find movies currently in theaters,
                    ensuring they stay informed about the latest releases.
                  </p>
                </Row>
              </ListGroup.Item>

              <ListGroup.Item variant="success">
                <Row style={{ width: "15rem" }}>
                  <h3>Movie Details</h3>
                </Row>
                <Row>
                  <p>
                    Get in-depth information about specific movies using
                    <b>`GET /movies/21/reviews`</b>. For instance, discover
                    everything you need to know about "Spider-Man: Into the
                    Spider-Verse"
                  </p>
                </Row>
              </ListGroup.Item>

              <ListGroup.Item variant="success">
                <Row style={{ width: "16rem" }}>
                  <h3>Movie Reviews</h3>
                </Row>
                <Row>
                  <p>
                    Accress movie reviews with ease using the{" "}
                    <b>`GET /movies/21/reviews`</b>
                    endpoint. Stay connected to the opinions and insights of
                    fellow moviegoers.
                  </p>
                </Row>
              </ListGroup.Item>

              <ListGroup.Item variant="success">
                <Row style={{ width: "16rem" }}>
                  <h3>Theater Listings</h3>
                </Row>
                <Row>
                  <p>
                    <b>`GET /theaters`</b> provides a comprehensive list of all
                    theaters, making it simple for users to locate the nearest
                    venue for their next cinematic experience.
                  </p>
                </Row>
              </ListGroup.Item>
            </ListGroup>
          </Col>

          <Col>
            <Row className="mb-2">
              <h2>How It Works</h2>
            </Row>

            <Row>
              <Col>
                <ListGroup className="mb-5">
                  <ListGroup.Item variant="info">
                    <Row style={{ width: "16rem" }}>
                      <h3>Express.js Routing</h3>
                    </Row>

                    <Row>
                      <p>
                        This project leveraged Express.js to create clear and
                        efficient routes for easy access to movie and theater
                        data
                      </p>
                    </Row>
                  </ListGroup.Item>

                  <ListGroup.Item variant="info">
                    <Row style={{ width: "13rem" }}>
                      <h3>Database Management</h3>
                    </Row>

                    <Row>
                      <p>
                        PostgreSQL, in conjunction with Knex.js, efficiently
                        stores and retrieves data, ensuring optimal performance
                        and data integrity.
                      </p>
                    </Row>
                  </ListGroup.Item>

                  <ListGroup.Item variant="info">
                    <Row>
                      <h3>Error Handling</h3>
                    </Row>

                    <Row>
                      <p>
                        This API is equipped with robust error handling
                        mechanisms, ensuring that users recieve meaningful and
                        helpful error messages
                      </p>
                    </Row>
                  </ListGroup.Item>
                </ListGroup>

                <p>
                  Ready to enhance your cinema-related application? Visit the
                  Github repository and unlock the full potential of Express,
                  PostgreSQL, and Knex
                </p>
                <Link
                  to="https://github.com/gwalter66/WeLoveMovies"
                  className="btn btn-primary"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-github"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                  </svg>
                  Github
                </Link>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default WeLoveMoviesPage;
