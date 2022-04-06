import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaPhone, FaWhatsapp, FaEnvelope, FaMap } from "react-icons/fa";
import QueryForm from "./Components/PageParts/QueryForm";

function Contact() {
  return (
    <Container fluid className="doted-background h-70">
      <Container className="mx-auto p-2 ">
        <Row>
          <Col sm={12}>
            <p className="h-2 animate-char-dark text-center mb-5">CONTACT US</p>
          </Col>
          <Col
            sm={6}
            className="d-flex justify-content-center flex-column mt-5"
          >
            <div className="flex-start mb-4">
              <div className="d-flex text-primary mx-2">
                <FaPhone className="h-b" />
              </div>
              <div className="d-flex flex-column ">
                <h4 className="title-primary text-primary">Contact no.</h4>
                <p className="text-sm">033-22429675, 033-46013191</p>
              </div>
            </div>
            <div className="flex-start mb-4">
              <div className="d-flex text-primary mx-2">
                <FaWhatsapp className="h-b" />
              </div>
              <div className="d-flex flex-column">
                <h4 className="title-primary text-primary">Whatsapp</h4>
                <p className="text-sm">+91 8466860071, +91 8466860093</p>
              </div>
            </div>

            <div className="flex-start mb-4">
              <div className="d-flex text-primary mx-2">
                <FaEnvelope className="h-b" />
              </div>
              <div className="d-flex flex-column">
                <h4 className="title-primary text-primary">Email</h4>
                <p className="text-sm">support@example.com</p>
              </div>
            </div>
            <div className="flex-start mb-4">
              <div className="d-flex text-primary mx-2">
                <FaMap className="h-b" />
              </div>
              <div className="d-flex flex-column">
                <h4 className="title-primary text-primary">Location</h4>
                <p className="text-sm">
                  Kbiafiling, 7th floor, Room No. 1, 10 Clive row, Rampuria
                  Chambers Kolkata - 700001
                </p>
              </div>
            </div>
            <p className="text-sm text-primary mb-4">
              Feel like reaching us? Locate us on Google Maps.
            </p>
          </Col>
          <Col sm={6}>
            <QueryForm />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Contact;
