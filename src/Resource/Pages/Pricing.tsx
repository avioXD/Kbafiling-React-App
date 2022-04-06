import React from "react";
import { Container, Row, Card, Col } from "react-bootstrap";
import PricingCard from "./Components/PageParts/PricingCards";
import { default as Checkmark } from "../../assets/svg/checkmark.svg";
import { Other_Service } from "../../content/OtherServices";
import HowWeWork from "./Components/PageParts/HowWeWork";
import RequestToUs from "./Components/PageParts/RequestToUs";
import { useNavigate } from "react-router-dom";
function groupBy(list, keyGetter) {
  const map = new Map();
  list.forEach((item) => {
    const key = keyGetter(item);
    const collection = map.get(key);
    if (!collection) {
      map.set(key, [item]);
    } else {
      collection.push(item);
    }
  });
  const arr = new Array();
  map.forEach((x) => {
    arr.push(x);
  });
  return arr;
}
let grouped = groupBy(Other_Service, (item) => item.type);

function Pricing() {
  const navigate = useNavigate();
  const onNavigate = (_id) => navigate(`/pricing/category/${_id}`);
  return (
    <Container fluid>
      <PricingCard />

      <Container className="mx-auto mt-5 mb-3  ">
        <h2 className="text-divider title-secondary text-primary">
          All plans include
        </h2>
        <Row>
          <Col sm={3} className="flex-start">
            <img src={Checkmark} className="w-h-6" alt="" />
            <p className="text-sm text-between">
              Dedicated Expert & Account Manager for you
            </p>
          </Col>
          <Col sm={3} className="flex-start">
            <img src={Checkmark} className="w-h-6" alt="" />
            <p className="text-sm text-between">
              Your data reviewed and corrected by Expert
            </p>
          </Col>
          <Col sm={3} className="flex-start">
            <img src={Checkmark} className="w-h-6" alt="" />
            <p className="text-sm text-between">
              Suggestion on best tax saving options
            </p>
          </Col>
          <Col sm={3} className=" flex-start">
            <img src={Checkmark} className="w-h-6" alt="" />
            <p className="text-sm text-between">
              Post return filing supporter you
            </p>
          </Col>
        </Row>
      </Container>
      <Container className="mx-auto">
        <Row className="p-2">
          {grouped.map((val) => {
            return (
              <Col sm={3}>
                <Card className="card-list-group">
                  <Card.Header>{val[0].type}</Card.Header>
                  <Card.Body className="p-0">
                    {val.map((item) => (
                      <div
                        className="item"
                        onClick={() => onNavigate(item._id)}
                      >
                        {item.label}
                      </div>
                    ))}
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
      <HowWeWork />
      <RequestToUs />
    </Container>
  );
}

export default Pricing;
