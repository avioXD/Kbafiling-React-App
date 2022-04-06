import React from "react";
import { Button, Card, Col, FloatingLabel, Form, Row } from "react-bootstrap";
import { FaCommentDots } from "react-icons/fa";

function QueryForm() {
  return (
    <Card className="card-list-group ">
      <Card.Header>
        <FaCommentDots className="mx-2" />
        Have Queries ?
      </Card.Header>
      <Card.Body className="p-3">
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <FloatingLabel controlId="floatingName" label="Name">
              <Form.Control type="text" placeholder="Name" />
            </FloatingLabel>
            <FloatingLabel controlId="floatingEmail" label="Email">
              <Form.Control type="mail" placeholder="Email" />
            </FloatingLabel>
            <FloatingLabel controlId="floatingPhone" label="Phone">
              <Form.Control type="number" placeholder="Phone" />
            </FloatingLabel>
            <FloatingLabel controlId="floatingComments" label="Message">
              <Form.Control
                as="textarea"
                placeholder="Leave a comment here"
                style={{ height: "100px" }}
              />
            </FloatingLabel>
          </Form.Group>
          <p className="text-primary text-center">
            *we will never share your information to anyone
          </p>
          <div className="flex-center mt-2">
            <Button variant="primary" className="m-btn mx-auto" type="submit">
              Request A Call
            </Button>
          </div>
        </Form>
      </Card.Body>
    </Card>
  );
}

export default QueryForm;
