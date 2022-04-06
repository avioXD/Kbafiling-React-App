import React from "react";
import { Container, Row, Col, Accordion, Card, Table } from "react-bootstrap";
import { FaDownload, FaLink } from "react-icons/fa";
import { Link } from "react-router-dom";
import { resourcesContent } from "../../content/ResourcesContent";
import QueryForm from "./Components/PageParts/QueryForm";

function Resource() {
  return (
    <Container fluid className="c-background mb-1">
      <Container fluid className=" designed-background  ">
        <Container className="mx-auto p-2 pt-4   h-100">
          <Row>
            <Col sm={12}>
              <h1 className="h-2 text-white title-primary text-center">
                RESOURCES
              </h1>
            </Col>
            <Col sm={12}>
              <Card className="card-list-group">
                <Card.Header>
                  All important compliance related resources you need, at one
                  place
                </Card.Header>
                <Card.Body className="p-4">
                  {resourcesContent.map((item, i) => (
                    <Accordion defaultActiveKey="0">
                      <Accordion.Item eventKey={`${i}`}>
                        <Accordion.Header>{item.label}</Accordion.Header>
                        <Accordion.Body>
                          <Table hover className="text-center">
                            <thead className="c-background text-white">
                              <tr>
                                <th>S.No.</th>
                                <th>{item.label}</th>
                                <th>Attachment</th>
                              </tr>
                            </thead>
                            <tbody>
                              {item.table.map((t) => (
                                <tr className="text-between">
                                  <td>{parseInt(t.sl) + 1}</td>
                                  <td>{t.label}</td>
                                  <td className="cursor-pointer">
                                    <a href={t.link ? t.link : t.attachment}>
                                      {t.link ? (
                                        <FaLink className="text-primary" />
                                      ) : (
                                        <FaDownload className="text-primary" />
                                      )}
                                    </a>
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </Table>
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                  ))}
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Container className="mx-auto m-w-30">
            <QueryForm />
          </Container>
        </Container>
      </Container>
    </Container>
  );
}

export default Resource;
