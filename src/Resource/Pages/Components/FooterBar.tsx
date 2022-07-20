import React from "react";
import { Col, Container, Row, Form, Button } from "react-bootstrap";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { Link } from "react-router-dom";
function FooterBar() {
  return (
    <Container fluid className="c-background p-3">
      <Container className="mx-auto mt-5">
        <Row>
          <Col sm={5}>
            <div className="flex-center flex-column  ">
              <div className="title-primary logo">
                <Link to="/" className="h-1 ">
                  {" "}
                  Kba filing
                </Link>
                <p>YOU GROW WE GROW</p>
              </div>
            </div>
          </Col>
          <Col sm={3}>
            <div className="flex-center flex-column text-start"></div>
            <h5 className="title-secondary text-primary-offset">Quick Links</h5>
            <ul className="m-ul">
              <Link className="li" to="/home">
                Home
              </Link>
              <Link className="li" to="/about">
                About Us
              </Link>
              <Link className="li" to="/contact">
                Our Team
              </Link>
              <Link className="li" to="/pricing">
                Services
              </Link>
              <Link className="li" to="/pricing">
                Pricing
              </Link>
              <Link className="li" to="#">
                Updates
              </Link>
              <Link className="li" to="/contact">
                Contact Us
              </Link>
              <Link className="li" to="/resource">
                Important link
              </Link>
              <Link className="li" to="/resource">
                Calender
              </Link>
            </ul>
          </Col>
          <Col sm={3}>
            <div className="flex-center flex-column text-start"></div>
            <h5 className="title-secondary text-primary-offset ">
              Our Policies
            </h5>
            <ul className="m-ul ">
              <Link className="li" to={"/policy"}>
                Privacy Policy
              </Link>
              <Link className="li" to={"/terms"}>
                Terms of Use
              </Link>
              <Link className="li" to={"/refundpolices"}>
                Refund Policies
              </Link>
            </ul>
          </Col>
          <Col sm={6}>
            <div className="flex-center flex-column p-3 text-center">
              <h3 className="title-secondary my-4 text-primary-offset">
                Signup For our newsletter
              </h3>
            </div>
          </Col>
          <Col sm={4}>
            <div className="d-flex justify-content-center flex-column text-start">
              <Form>
                <Form.Group className="mb-3" controlId="email.from">
                  <Form.Label class="text-primary-offset">
                    Email address
                  </Form.Label>
                  <Form.Control type="email" placeholder="Email" />
                </Form.Group>
                <Button variant="primary" className="m-btn" type="submit">
                  Submit
                </Button>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
      <hr className="text-white" />
      <Container className="mx-auto">
        <Row>
          <Col sm={4}>
            <p className="text-white  text-center">
              © 2022 KBA FILING. All rights reserved
            </p>
          </Col>
          <Col sm={4}>
            <div className="d-flex justify-content-center align-item-center">
              <p className="text-white">Follow us on </p>
              <FaFacebook className="m-icon" />
              <FaTwitter className="m-icon" />
              <FaInstagram className="m-icon" />
              <FaLinkedinIn className="m-icon" />
            </div>
          </Col>
          <Col sm={4}>
            <div className="d-flex justify-content-center align-item-center">
              <p className="text-white">Designed & Developed by Crawlers </p>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default FooterBar;
