import React from "react";
import { Col, Container, Row, Card } from "react-bootstrap";
import { default as aboutHero } from "../../assets/images/aboutus/about-hero.svg";
import { default as vision } from "../../assets/images/aboutus/vision.svg";
import { default as mission } from "../../assets/images/aboutus/mission.svg";
import ServiceSlider from "./Components/PageParts/ServiceSlider";
import WhyUsSlider from "./Components/PageParts/WhyUsSlider";
import RequestToUs from "./Components/PageParts/RequestToUs";
function About() {
  return (
    <Container fluid>
      <Container className="mx-auto p-2">
        <Row>
          <Col sm={5} className="flex-center">
            <img src={aboutHero} alt="" />
          </Col>
          <Col sm={7}>
            <div className="flex-center flex-column ">
              <h1 className="title-primary animate-char-dark text-center h-1">
                Who We are?
              </h1>
              <p className="subtitle-primary text-primary h2">
                Focused on trouble free Financial solutions!
              </p>
              <p className="text-sm p-2">
                Kbiafiling is a finance and tax advisory start-up conceived and
                founded with a vision of making India more Tax & Financially
                literate. We feel that knowledge should be free and everyone
                should have access to it. Our mission is to make India more
                aware of finance and tax and help them grow and achieve long
                term financial goals and security. We want to make these
                services available to common people and at an affordable price.
                We Indians are although very good at saving money, but we are
                not very good at Investing. This is because of lack of awareness
                among the large group of people, even the educated ones.
                Investing is as important as saving, since the value of money
                depreciates over time due to inflation, and the money saved but
                not invested well will lose its value. However, we are not
                taught about this in any school or college. Because of lack of
                knowledge and awareness related to tax and finance people lose
                their wealth both in terms of loss / low return on their
                investment and higher tax liabilities. Most people keep their
                funds idle in banks and insurance products which mostly have
                zero or negative real return. Some people do try investing in
                risky asset classes (equity, mutual funds etc.) without any
                knowledge and experience and end up making losses. We are
                dedicated to the needs of such people to help them achieve their
                ambitions successfully. We work closely with our clients to
                understand their personal and business financial needs and help
                them achieve their goals in a very planned manner. So, let’s
                build and grow India together one step at a time. Let’s be
                Kbiafiling !!
              </p>
            </div>
          </Col>
        </Row>
      </Container>
      <Container fluid className="doted-background mx-auto pt-5">
        <Container className="mx-auto p-3">
          <Row>
            <Col sm={6} className="flex-center">
              <Card>
                <div className=" p-4">
                  <h3 className="title-primary text-primary ">Our Mission</h3>
                  <p className="text-sm">
                    Transforming knowledge into value to help people achieve
                    their financial objectives and also fulfill all their legal
                    compliance obligations with very cost effective solutions.
                  </p>
                </div>
              </Card>
            </Col>
            <Col sm={6} className="flex-center flex-column p-2">
              <img src={mission} alt="" />
            </Col>
            <Col sm={6} className="flex-center flex-column p-2">
              <img src={vision} alt="" />
            </Col>
            <Col sm={6} className="flex-center">
              <Card>
                <div className=" p-4">
                  <h3 className="title-primary text-primary ">Our Vision</h3>
                  <p className="text-sm">
                    To be one of the largest search engine & solution providers
                    for all financial matters. To make financial services
                    accessible and usable for all.
                  </p>
                </div>
              </Card>
            </Col>
          </Row>
        </Container>
      </Container>
      <Container className="mx-auto p-3 my-4">
        <h1 className="title-primary animate-char-dark text-center h-2 mt-4">
          Our Services
        </h1>
        <ServiceSlider />
      </Container>
      <WhyUsSlider />
      <RequestToUs />
    </Container>
  );
}

export default About;
