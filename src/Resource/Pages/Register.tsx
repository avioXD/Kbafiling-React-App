import React, { useState } from "react";
import { default as heroImg } from "../../assets/images/registerHero.svg";
import { default as googleLogin } from "../../assets/images/google-login.svg";
import {
  Container,
  Row,
  Col,
  Card,
  Form,
  FloatingLabel,
  Button,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
function Register() {
  return (
    <Container fluid className="doted-background">
      <Container className="mx-auto h-100  p-2   ">
        <Row>
          <Col sm={12}>
            <Card className="card-list-group">
              <Card.Header>
                <h2 className="h-2">Register</h2>
              </Card.Header>

              <Card.Body>
                <Row>
                  <Col xs={{ order: "last" }} sm={5} className=" mt-4">
                    <h3 className="text-primary title-primary text-center">
                      Enter your details and start your journey with us.
                    </h3>
                    <div className="mx-auto m-w-30 mt-4 mb-5">
                      <Form>
                        <Form.Group className="" controlId="formBasicEmail">
                          <FloatingLabel
                            className="mb-3"
                            controlId="floatingName"
                            label="Name"
                          >
                            <Form.Control type="text" placeholder="Name" />
                          </FloatingLabel>
                          <FloatingLabel
                            className="mb-3"
                            controlId="floatingEmail"
                            label="Email"
                          >
                            <Form.Control type="mail" placeholder="Email" />
                          </FloatingLabel>
                          <FloatingLabel
                            className="mb-3"
                            controlId="floatingPhone"
                            label="Phone"
                          >
                            <Form.Control type="number" placeholder="Phone" />
                          </FloatingLabel>

                          <FloatingLabel
                            className="mb-3"
                            controlId="floatingPassword"
                            label="Password"
                          >
                            <Form.Control
                              type="password"
                              placeholder="Password"
                            />
                          </FloatingLabel>
                          <FloatingLabel
                            className="mb-3"
                            controlId="floatingCPassword"
                            label="Confirm Password"
                          >
                            <Form.Control
                              type="password"
                              placeholder="Confirm Password"
                            />
                          </FloatingLabel>
                        </Form.Group>
                        <div className="flex-center flex-column p-3">
                          <Button
                            variant="primary"
                            className="m-btn  "
                            type="submit"
                          >
                            Register
                          </Button>
                          <p className="title-secondary text-between mt-3">
                            Already user?{" "}
                            <Link className="text-link" to={"/login"}>
                              Login Now
                            </Link>
                          </p>
                        </div>
                      </Form>
                      <p className="text-divider text-primary">OR</p>
                      <div className="flex-center">
                        <img
                          className="m-btn cursor-pointer mx-auto "
                          style={{ maxWidth: "18rem" }}
                          src={googleLogin}
                          alt=""
                        />
                      </div>
                    </div>
                  </Col>
                  <Col sm={6} className="flex-center flex-column">
                    <img src={heroImg} alt="" />
                    <Col sm={12} className="mb-3">
                      <div className="d-flex justify-content-center align-item-center">
                        <p className="text-primary">Follow us on </p>
                        <FaFacebook className="m-icon-dark" />
                        <FaTwitter className="m-icon-dark" />
                        <FaInstagram className="m-icon-dark" />
                        <FaLinkedinIn className="m-icon-dark" />
                      </div>
                    </Col>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Register;
