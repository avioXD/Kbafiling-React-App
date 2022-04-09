import React from "react";
import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <Container fluid className="designed-background">
      <Container
        id="coming-soon"
        className="h-100 flex-center mx-auto flex-column
      "
      >
        <h1 className="text-center h-2 title-primary  animate-char-dark text-uppercase">
          KBIAFILING
        </h1>
        <hr />
        <h1 className="h-1 text-primary  text-center">404 Not Found</h1>
        <Link to={"/Home"}>
          <Button variant="primary" className="m-btn">
            Home
          </Button>
        </Link>
        <br />
      </Container>
    </Container>
  );
}

export default PageNotFound;
