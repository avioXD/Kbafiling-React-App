import React from "react";
import { Col, Container, Row, Form, Button } from "react-bootstrap";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
function FooterBar() {
  return (
    <Container fluid className="c-background p-3">
      <Container className="mx-auto mt-5">
        <Row>
          <Col sm={5}>
            <div className="flex-center flex-column  ">
              <h1 className="title-primary  my-4  animate-char-dark h-1">
                KBIAFILING
              </h1>
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
              <Link className="li" to="/pricing">
                Services & Pricing
              </Link>
              <Link className="li" to="#">
                Blog
              </Link>
              <Link className="li" to="/contact">
                Contact Us
              </Link>
              <Link className="li" to="/resource">
                Resources
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
              © 2022 KBIAFILING. All rights reserved
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
