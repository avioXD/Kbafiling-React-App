import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Form,
  FloatingLabel,
  Button,
} from "react-bootstrap";
import {
  FaSuperpowers,
  FaBinoculars,
  FaBookOpen,
  FaBoxes,
} from "react-icons/fa";
import { useParams } from "react-router-dom";
import { Other_Service } from "../../../content/OtherServices";

function OrderPage() {
  let { _id } = useParams();
  let content = Other_Service.filter((x) => x._id === _id)[0];
  return (
    <Container fluid className="doted-background h-100">
      <Container className="mx-auto p-2">
        <Row>
          <Col sm={12} className="mb-2 mt-5">
            <h1 className="h-2 text-primary text-center text-uppercase title-primary">
              Your Order Summary
            </h1>
            <p className="text-divider">0</p>
          </Col>
          <Col sm={6}>
            <Card className="card-list-group">
              <Card.Header>ORDER DETAILS</Card.Header>
              <Card.Body className="p-3">
                <h3 className="subtitle-primary ">
                  {" "}
                  <FaSuperpowers className="mx-2"></FaSuperpowers>{" "}
                  {content.label}
                </h3>
                <p className="text-sm text-secondary mx-3">
                  {" "}
                  <FaBinoculars className="mx-auto"></FaBinoculars>{" "}
                  {content.about}
                </p>
                <p className="text-divider"></p>
                <h5 className="subtitle-primary ">
                  {" "}
                  <FaBookOpen className="mx-2" /> Service Covered
                </h5>
                <div className="mx-1">
                  {content.service.map((x) => (
                    <p className="text-secondary ">
                      <FaBoxes className="mx-2"></FaBoxes>
                      {x.label}
                    </p>
                  ))}
                </div>
                <p className="text-divider"></p>
                <Form.Group className="" controlId="formBasicEmail">
                  <FloatingLabel
                    className="mb-3"
                    controlId="floatingEmail"
                    label="Email"
                  >
                    <Form.Control
                      disabled
                      type="mail"
                      placeholder="Email"
                      value={"example@gmail.com"}
                    />
                  </FloatingLabel>
                  <FloatingLabel
                    className="mb-3"
                    controlId="floatingName"
                    label="Name"
                  >
                    <Form.Control
                      type="text"
                      placeholder="Name"
                      value={"Jon Doe"}
                    />
                  </FloatingLabel>
                  <FloatingLabel
                    className="mb-3"
                    controlId="floatingPhone"
                    label="Phone"
                  >
                    <Form.Control type="number" placeholder="Phone" />
                  </FloatingLabel>
                </Form.Group>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={6}>
            <Card className="card-list-group">
              <Card.Header className="text-uppercase">
                Payment Details
              </Card.Header>
              <Card.Body>
                <div className="flex-between mt-2 p-2">
                  <h4 className="text-between">Service : </h4>
                  <p className="text-secondary">{content.label}</p>
                </div>
                <div className="flex-between mt-2 p-2">
                  <h4 className="text-between">Service Amount : </h4>
                  <h4 className="text-primary">₹{content.price}</h4>
                </div>
                <hr />
                <div className="flex-between mt-2 p-2">
                  <h4 className="text-between">Total Amount : </h4>
                  <h4 className="text-primary">₹{content.price}</h4>
                </div>
                <div className="flex-center mt-4 p-2">
                  <Form.Check
                    type={"checkbox"}
                    id={`default-checkbox`}
                    label={``}
                  />
                  <p className="text-between">
                    I agree the Terms & Conditions and Privacy Policy.
                  </p>
                </div>
                <Button variant="success" className="m-btn w-100 mt-2">
                  PAY
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default OrderPage;
