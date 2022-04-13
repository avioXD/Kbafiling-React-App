import React from "react";
import { Container, Card } from "react-bootstrap";
import { Skeleton } from "primereact/skeleton";
function LandingPage() {
  return (
    <Container fluid className="p-1">
      <Container className="mx-auto p-2">
        <Card className="card-list-group">
          <Card.Header>Current Active Plan</Card.Header>
          <Card.Body>
            <Skeleton className="mb-2"></Skeleton>
            <Skeleton width="10rem" className="mb-2"></Skeleton>
            <Skeleton width="5rem" className="mb-2"></Skeleton>
            <Skeleton height="2rem" className="mb-2"></Skeleton>
            <Skeleton width="10rem" height="4rem"></Skeleton>
          </Card.Body>
        </Card>
      </Container>
    </Container>
  );
}

export default LandingPage;
