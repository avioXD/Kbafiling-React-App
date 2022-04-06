import React from "react";
import { Container, Col, Row, Card, Form, Button } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { Other_Service } from "../../../content/OtherServices";
import QueryForm from "../Components/PageParts/QueryForm";
import { FaTags, FaServicestack, FaBoxes } from "react-icons/fa";
function PricingDetailed() {
  let { _id } = useParams();
  let content = Other_Service.filter((x) => x._id === _id)[0];
  const navigate = useNavigate();

  const navigateTo = () => {
    navigate(`/product/order/${_id}`);
  };

  return (
    <Container fluid className=" ">
      <Container className="mx-auto p-2  ">
        <Row>
          <Col sm={12} className="doted-background p-3 flex-center flex-column">
            <p className="title-primary h-1 animate-char-dark text-center">
              {content.label}
            </p>
            {/* <h1 className=" text-primary h-2   text-center">
              {" "}
              @ ₹ {content.price}
            </h1> */}
          </Col>
          <Col sm={6}>
            <Card className="card-list-group">
              <Card.Header className="flex-start">
                <i className="pi pi-eye"></i>
                About This Plan
              </Card.Header>
              <Card.Body>
                <p className="text-secondary">
                  <FaBoxes className="mx-2"></FaBoxes>
                  {content.about}
                </p>
              </Card.Body>
            </Card>
            <Card className="card-list-group">
              <Card.Header className="flex-start">
                <FaServicestack className="mx-2" />
                Services Covered
              </Card.Header>
              <Card.Body>
                {content.service.map((x) => (
                  <p className="text-secondary ">
                    <FaBoxes className="mx-2"></FaBoxes>
                    {x.label}
                  </p>
                ))}
              </Card.Body>
            </Card>
            <Card className="card-list-group">
              <Card.Header className="flex-start">
                <i className="pi pi-credit-card"></i>
                Who Should Buy
              </Card.Header>
              <Card.Body>
                {content.who_should_buy.map((x) => (
                  <p className="text-secondary ">
                    <FaBoxes className="mx-2"></FaBoxes>
                    {x.label}
                  </p>
                ))}
              </Card.Body>
            </Card>
            <Card className="card-list-group">
              <Card.Header className="flex-start">
                <i className="pi pi-file"></i>
                Documents Required
              </Card.Header>
              <Card.Body>
                {content.doc_required.map((x) => (
                  <p className="text-secondary ">
                    <FaBoxes className="mx-2"></FaBoxes>
                    {x.label}
                  </p>
                ))}
              </Card.Body>
            </Card>
          </Col>
          <Col sm={6}>
            <Card className="card-list-group">
              <Card.Header>
                {" "}
                <FaTags className="mx-2" />
                Price: ₹ {content.price}
              </Card.Header>
              <Card.Body>
                <p className="text-secondary text-center mt-2">
                  Have referral or coupon code?
                </p>
                <Form className="flex-center">
                  <Form.Group className="mb-3 mt-2 mx-2" controlId="email.from">
                    <Form.Control type="email" placeholder="CODE" />
                  </Form.Group>
                  <Button
                    variant="outline-primary"
                    className="m-btn-outline"
                    type="submit"
                  >
                    Apply
                  </Button>
                </Form>
                <div className="flex-center">
                  <Button
                    variant="primary"
                    onClick={navigateTo}
                    className="m-btn "
                    type="submit"
                  >
                    BUY NOW
                  </Button>
                </div>
              </Card.Body>
            </Card>
            <QueryForm />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default PricingDetailed;
