import React, { useState } from "react";
import { Container, Row, Col, Form, Card } from "react-bootstrap";
import Uploader from "../../Components/PageParts/Uploader";
import { ImLock } from "react-icons/im";
import { FaFileSignature } from "react-icons/fa";
function UploadFiles() {
  const [data, setData] = useState([
    {
      name: "",
      password: "",
      file: null,
    },
    {
      name: "",
      password: "",
      file: null,
    },
    {
      name: "",
      password: "",
      file: null,
    },
    {
      name: "",
      password: "",
      file: null,
    },
  ]);
  return (
    <Container fluid>
      <Container className="mx-auto p-2">
        <Row>
          {[0, 1, 2, 3].map((item, i) => (
            <Col sm={6}>
              <Card className="card-list-group">
                <Card.Header>Upload Files</Card.Header>
                <Card.Body>
                  <Uploader
                    value={data[i].file}
                    setRequireFile={(file) => {
                      setData((data) => {
                        return [
                          ...data.slice(0, i),
                          {
                            ...data[i],
                            file,
                          },
                          ...data.slice(i + 1),
                        ];
                      });
                    }}
                    label={"Upload"}
                    filetype="file"
                  ></Uploader>
                  <Form.Group className="mb-3 mx-2" controlId={`${i}formName`}>
                    <Form.Label>
                      <FaFileSignature /> Name the file
                    </Form.Label>
                    <Form.Control
                      value={data[i].name}
                      onChange={(e) => {
                        setData((data) => {
                          return [
                            ...data.slice(0, i),
                            {
                              ...data[i],
                              name: e.target.value,
                            },
                            ...data.slice(i + 1),
                          ];
                        });
                      }}
                      type="text"
                      placeholder="File Name"
                    />
                  </Form.Group>
                  <Form.Group
                    className="mb-3 mx-2"
                    controlId={`${i}formPassword`}
                  >
                    <Form.Label>
                      <ImLock /> Protect file with password
                    </Form.Label>
                    <Form.Control
                      value={data[i].password}
                      onChange={(e) => {
                        setData((data) => {
                          return [
                            ...data.slice(0, i),
                            {
                              ...data[i],
                              password: e.target.value,
                            },
                            ...data.slice(i + 1),
                          ];
                        });
                      }}
                      type="password"
                      placeholder="Password"
                    />
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
