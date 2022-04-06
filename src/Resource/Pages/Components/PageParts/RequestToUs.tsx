import React from "react";
import {
  Button,
  Row,
  Col,
  Card,
  Container,
  Form,
  FloatingLabel,
} from "react-bootstrap";

function RequestToUs() {
  return (
    <Container fluid className="doted-background">
      <Container className="mx-auto p-3">
        <Row>
          <h2 className="title-primary animate-char-dark h-2 text-center">
            Request To Us
          </h2>
          <Col sm={8} className="mx-auto">
            <Card className=" designed-background card-list-group">
              <Card.Header>
                Don’t stress, just secure your financial goals!
              </Card.Header>
              <Card.Body className="p-2">
                <Form>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <FloatingLabel controlId="floatingName" label="Name">
                      <Form.Control type="text" placeholder="Name" />
                    </FloatingLabel>
                    <Row>
                      <Col sm={6}>
                        <FloatingLabel controlId="floatingEmail" label="Email">
                          <Form.Control type="mail" placeholder="Email" />
                        </FloatingLabel>
                      </Col>
                      <Col sm={6}>
                        <FloatingLabel controlId="floatingPhone" label="Phone">
                          <Form.Control type="number" placeholder="Phone" />
                        </FloatingLabel>
                      </Col>
                    </Row>
                    <FloatingLabel
                      controlId="floatingSelect"
                      label="Service Required"
                    >
                      <Form.Select aria-label="Default select example">
                        <option value="TDS Return">TDS Return</option>
                        <option value="GST Return">GST Return</option>
                        <option value="Business Registrations">
                          Business Registrations
                        </option>
                        <option value="Digital Signature">
                          Digital Signature
                        </option>
                        <option value="Business Incorporation">
                          Business Incorporation
                        </option>
                        <option value="MCA Compliance">MCA Compliance</option>
                        <option value="Income Tax">Income Tax</option>
                        <option value="Consultancy Services">
                          Consultancy Services
                        </option>
                        <option value="Miscellaneous Services">
                          Miscellaneous Services
                        </option>
                      </Form.Select>
                    </FloatingLabel>

                    <FloatingLabel
                      controlId="floatingComments"
                      label="Comments"
                    >
                      <Form.Control
                        as="textarea"
                        placeholder="Leave a comment here"
                        style={{ height: "100px" }}
                      />
                    </FloatingLabel>
                  </Form.Group>
                  <div className="flex-center">
                    <Button
                      variant="primary"
                      className="m-btn mx-auto"
                      type="submit"
                    >
                      Submit
                    </Button>
                  </div>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default RequestToUs;
