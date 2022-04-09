import React from "react";
import { Container, Row, Col, Form, Card } from "react-bootstrap";
import Uploader from "../../Components/PageParts/Uploader";
import { ImLock } from "react-icons/im";
import { FaFileSignature } from "react-icons/fa";
function UploadFiles() {
  return (
    <Container fluid>
      <Container className="mx-auto p-2">
        <Row>
          {[0, 1, 2, 3].map((item, i) => (
            <Col sm={6}>
              <Card className="card-list-group">
                <Card.Header>Upload Files</Card.Header>
                <Card.Body>
                  <Uploader label={"Upload"} filetype="file"></Uploader>
                  <Form.Group className="mb-3 mx-2" controlId="formBasicEmail">
                    <Form.Label>
                      <FaFileSignature /> Name the file
                    </Form.Label>
                    <Form.Control type="text" placeholder="Name" />
                  </Form.Group>
                  <Form.Group className="mb-3 mx-2" controlId="formBasicEmail">
                    <Form.Label>
                      <ImLock /> Protect file with password
                    </Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                  </Form.Group>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default UploadFiles;
