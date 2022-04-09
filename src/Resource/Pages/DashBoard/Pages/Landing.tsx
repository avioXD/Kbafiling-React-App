import React from "react";
import { Container, Card } from "react-bootstrap";

function LandingPage() {
  return (
    <Container fluid className="p-1">
      <Container className="mx-auto p-2">
        <Card className="card-list-group">
          <Card.Header>Current Active Plan</Card.Header>
          <Card.Body></Card.Body>
        </Card>
      </Container>
    </Container>
  );
}

export default LandingPage;
