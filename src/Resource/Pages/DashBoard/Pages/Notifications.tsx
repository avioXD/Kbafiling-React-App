import React from "react";
import { Container, Card, Accordion } from "react-bootstrap";
import { resourcesContent } from "../../../../content/ResourcesContent";
import { ImBell } from "react-icons/im";
function Notification() {
  return (
    <Container fluid className="p-1">
      <Container className="mx-auto p-2">
        <h3 className="text-primary mb-4 p-2">
          <ImBell /> Notifications
        </h3>{" "}
        <Card className="card-list-group">
          <Card.Body className="p-3">
            {resourcesContent.map((item, i) => (
              <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey={`${i}`}>
                  <Accordion.Header>{item.label}</Accordion.Header>
                  {/* <Accordion.Body>
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
                </Accordion.Body> */}
                </Accordion.Item>
              </Accordion>
            ))}
          </Card.Body>
        </Card>
      </Container>
    </Container>
  );
}

export default Notification;
