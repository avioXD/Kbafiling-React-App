import React from "react";
import {
  Container,
  Card,
  Form,
  Row,
  Col,
  Button,
  FloatingLabel,
} from "react-bootstrap";
import { default as heroImg } from "../../assets/images/resetpasswordHero.svg";
function ResetPassword() {
  return (
    <Container fluid className="c-background mb-1">
      <Container className="mx-auto p-2 h-100  doted-background">
        <Card className="card-list-group mt-4">
          <Card.Header>
            <h2 className="h-2">Reset Password</h2>
          </Card.Header>
          <Card.Body className=" ">
            <Row>
              <Col sm={12} className="flex-center">
                <img src={heroImg} alt="" />
              </Col>
              <Col sm={6} className="mx-auto">
                <p className="text-between text-center">
                  No worries! Enter your email and we will send you a reset
                  link.
                </p>
                <Form className="mx-auto">
                  <Form.Group
                    className="mb-3 m-w-30 "
                    controlId="formBasicEmail"
                  >
                    <FloatingLabel
                      className="mb-3"
                      controlId="floatingEmail"
                      label="Email"
                    >
                      <Form.Control type="mail" placeholder="Email" />
                    </FloatingLabel>
                  </Form.Group>
                  <div className="flex-center flex-column p-3">
                    <Button variant="primary" className="m-btn  " type="submit">
                      Submit
                    </Button>
                  </div>
                </Form>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Container>
    </Container>
  );
}

export default ResetPassword;
