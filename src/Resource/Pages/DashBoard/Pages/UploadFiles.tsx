import React from "react";
import { Container, Row, Col, Form, Card } from "react-bootstrap";
import Uploader from "../../Components/PageParts/Uploader";

function UploadFiles() {
  return (
    <Container fluid>
      <Container className="mx-auto p-2">
        <Row>
          <Col sm={6}>
            <Card className="card-list-group">
              <Card.Header>Upload Files</Card.Header>
              <Card.Body>
                <Uploader label={"Upload"} filetype="file"></Uploader>
                <Form.Group className="mb-3 mx-2" controlId="formBasicEmail">
                  <Form.Label>File Name</Form.Label>
                  <Form.Control type="text" placeholder="Name" />
                </Form.Group>
                <Form.Group className="mb-3 mx-2" controlId="formBasicEmail">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Name" />
                </Form.Group>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={6}>
            <Card className="card-list-group">
              <Card.Header>Upload Files</Card.Header>
              <Card.Body>
                <Uploader label={"Upload"} filetype="file"></Uploader>
                <Form.Group className="mb-3 mx-2" controlId="formBasicEmail">
                  <Form.Label>File Name</Form.Label>
                  <Form.Control type="text" placeholder="Name" />
                </Form.Group>
                <Form.Group className="mb-3 mx-2" controlId="formBasicEmail">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Name" />
                </Form.Group>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={6}>
            <Card className="card-list-group">
              <Card.Header>Upload Files</Card.Header>
              <Card.Body>
                <Uploader label={"Upload"} filetype="file"></Uploader>
                <Form.Group className="mb-3 mx-2" controlId="formBasicEmail">
                  <Form.Label>File Name</Form.Label>
                  <Form.Control type="text" placeholder="Name" />
                </Form.Group>
                <Form.Group className="mb-3 mx-2" controlId="formBasicEmail">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Name" />
                </Form.Group>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={6}>
            <Card className="card-list-group">
              <Card.Header>Upload Files</Card.Header>
              <Card.Body>
                <Uploader label={"Upload"} filetype="file"></Uploader>
                <Form.Group className="mb-3 mx-2" controlId="formBasicEmail">
                  <Form.Label>File Name</Form.Label>
                  <Form.Control type="text" placeholder="Name" />
                </Form.Group>
                <Form.Group className="mb-3 mx-2" controlId="formBasicEmail">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Name" />
                </Form.Group>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default UploadFiles;
