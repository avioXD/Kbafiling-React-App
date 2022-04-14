import React, { useState } from "react";
import { Container, Row, Col, Form, Card, Button } from "react-bootstrap";
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

  const onUpload = () => {
    console.log(data);
    const formData = new FormData();
    data.forEach((item, idx) => {
      if (item.file) {
        formData.append(`file${idx}`, item.file);
        formData.append(`name${idx}`, item.name);
        formData.append(`password${idx}`, item.password);
      }
    });
    console.log(formData);
  };
  return (
    <Container fluid>
      <Container className="mx-auto p-2">
        <Row>
          {data.map((item, i) => (
            <Col sm={6}>
              <Card className="card-list-group">
                <Card.Header>Upload Files</Card.Header>
                <Card.Body>
                  <Uploader
                    maxSize={5000000}
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
                      autoComplete="off"
                      placeholder="File Name"
                      name={`name${i}`}
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
                      name={`password${i}`}
                    />
                  </Form.Group>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        <div className="flex-center my-3">
          <Button variant="primary" className="m-btn" onClick={onUpload}>
            Upload
          </Button>
        </div>
      </Container>
    </Container>
  );
}

export default UploadFiles;
