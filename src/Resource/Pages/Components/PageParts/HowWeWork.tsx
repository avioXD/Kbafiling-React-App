import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Timeline } from "primereact/timeline";
import { default as purchase } from "../../../../assets/images/how_we_work/purchesorder.svg";
import { default as upload } from "../../../../assets/images/how_we_work/uploaddocument.svg";
import { default as taktoca } from "../../../../assets/images/how_we_work/talktoca.svg";
import { default as filing } from "../../../../assets/images/how_we_work/filing.svg";
function HowWeWork() {
  const events1 = [
    {
      status: `Purchase Plan`,
      process: `First, purchase the relevant service plan on our website.`,
      icon: "pi pi-money-bill",
      color: "#ff725e",
      svg: purchase,
    },
    {
      status: `Upload Documents`,
      process: `Next, upload required documents from your dashboard.`,
      icon: "pi pi-cloud-upload",
      color: "#ff725e",
      svg: upload,
    },
    {
      status: `Talk to our CA`,
      process: `Kbiafiling now assigns a tax expert, who would advice you on tax saving.`,
      icon: "pi pi-users",
      color: "#ff725e",
      svg: taktoca,
    },
    {
      status: `Preparation & Filing`,
      process: `Finally, your tax return is prepared and filled by a tax expert.`,
      icon: "pi pi-file",
      color: "#ff725e",
      svg: filing,
    },
  ];

  const customizedMarker = (item) => {
    return (
      <span
        className="custom-marker p-shadow-2"
        style={{ backgroundColor: item.color }}
      >
        <i className={item.icon}></i>
      </span>
    );
  };

  const customizedContent = (item) => {
    return (
      <Card className="card-list-group ">
        <Card.Header>{item.status}</Card.Header>
        <Card.Body className="p-2 flex-center flex-column">
          <img src={item.svg} className="w-h-15" alt="" />
          <p className="subtitle-primary text-between text-center   ">
            {item.process}
          </p>
        </Card.Body>
      </Card>
    );
  };
  return (
    <Container fluid>
      <Container className="mx-auto mt-3 p-2">
        <p className="text-divider text-primary">O</p>
        <Row>
          <Col sm={12} className="text-center">
            {" "}
            <h1 className="title-primary h-2 animate-char-dark">
              HOW DO WE WORK?
            </h1>
            <h4 className="text-between ">
              Our Tax Experts will help you file ITR without any hassle!
            </h4>
          </Col>
          <Col sm={12}>
            <div>
              <Timeline
                value={events1}
                align="alternate"
                className="timeline-demo"
                marker={customizedMarker}
                content={customizedContent}
              />
            </div>
          </Col>
        </Row>
        <p className="text-divider text-primary">O</p>
      </Container>
    </Container>
  );
}

export default HowWeWork;
