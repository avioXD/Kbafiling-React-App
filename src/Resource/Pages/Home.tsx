import React, { useEffect, useState } from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Card,
  ButtonGroup,
  ToggleButton,
} from "react-bootstrap";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  EffectCoverflow,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { default as HeroImg } from "../../assets/images/hero-img.svg";
import whoweare from "../../assets/images/whoweare.svg";
import { default as Pricing } from "../../assets/images/pricing.svg";

import { default as files } from "../../assets/images/us/files.svg";
import { default as taxsave } from "../../assets/images/us/taxsave.svg";
import { default as happycustomer } from "../../assets/images/us/happycustomer.svg";
import { hero_swiper_content, pricingCards } from "../../content/content";
import RequestToUs from "./Components/PageParts/RequestToUs";
import WhyUsSlider from "./Components/PageParts/WhyUsSlider";
import HowWeWork from "./Components/PageParts/HowWeWork";
import { Link } from "react-router-dom";

const CardComp = (props) => {
  return (
    <Card style={{ width: "18rem" }} className="designed-background">
      <Card.Body>
        {/* <img src={props.value.svg} className="mx-auto w-h-10" alt="" /> */}
        <Card.Title className="text-between  mb-4">
          {props.value.label}
        </Card.Title>
        <Card.Text>{props.value.content}</Card.Text>
      </Card.Body>
    </Card>
  );
};

const CardService = (props) => {
  useEffect(() => {});
  return (
    <Swiper
      // install Swiper modules
      effect={"coverflow"}
      grabCursor={true}
      centeredSlides={false}
      slidesPerView={"auto"}
      loop={true}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: false,
      }}
      breakpoints={{
        450: {
          slidesPerView: 1,
          spaceBetween: 0,
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 5,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      }}
      pagination={{ clickable: true }}
      modules={[EffectCoverflow, Pagination]}
      className="p-5 pt-4 m-swiper"
    >
      {pricingCards.map((x) => {
        if (x.cat === props.radioValue) {
          return (
            <>
              {""}
              <SwiperSlide className="flex-center">
                <div className="card-3d text-start flex-column  ">
                  <h3 className="subtitle-primary animate-char  bold">
                    {x.label}
                  </h3>
                  <h4 className="text-white ">
                    {" "}
                    Pricing: <span className="h2"></span> @ ₹ {x.price} Onwards
                  </h4>

                  <p className="text-divider">Service</p>
                  <p className="text-sm text-white">{x.sublabel}</p>
                </div>
              </SwiperSlide>
            </>
          );
        } else {
          return <></>;
        }
      })}
    </Swiper>
  );
};

export const Home = () => {
  const [radioValue, setRadioValue] = useState("personal");

  const radios: any = [
    { name: "Personal", value: "personal" },
    { name: "Business", value: "business" },
  ];

  return (
    <>
      <Container
        fluid
        className="d-flex justify-content-center flex-column c-background"
      >
        <Container className="mx-auto">
          <Row>
            <Col sm={12} className="mx-auto d-flex justify-content-center">
              <img src={HeroImg} alt="" />
            </Col>
            <Col sm={12} className="d-flex justify-content-center">
              <div className="p-3 my-auto mt-4 ">
                <p className="title-primary h-1 text-warp text-center animate-char text-uppercase">
                  Welcome to <span className="logo"> Kba filing</span>
                </p>
                <p className="text-white text-center">
                  Committed towards eminent tax & financial assistance!
                </p>
                <div className=" flex-center mt-4">
                  <Link to={"/contact"}>
                    <Button
                      variant="outline-light"
                      className="m-btn-outline mx-2"
                    >
                      Request A Call Back
                    </Button>
                  </Link>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
        <Container fluid className="doted-background">
          <Container className="p-3 mx-auto mt-5">
            <Swiper
              // install Swiper modules
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              rewind={true}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 40,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
              }}
              freeMode={true}
              autoplay={true}
              pagination={{ clickable: true }}
            >
              {hero_swiper_content.map((x) => (
                <>
                  {" "}
                  <SwiperSlide className="flex-center">
                    <CardComp value={x} />
                  </SwiperSlide>
                </>
              ))}
            </Swiper>
          </Container>
        </Container>
      </Container>
      <Container fluid className="d-flex justify-content-center flex-column  ">
        <Container className="mx-auto mt-5">
          <Row>
            <Col sm={6} className="flex-center">
              <div className="p-2">
                <img src={whoweare} alt="" />
              </div>
            </Col>
            <Col sm={6} className="flex-center ">
              <Container className="text-start p-3">
                <h1 className="title-primary mb-2 h-2 animate-char-dark">
                  Who We are?
                </h1>
                <h5 className="subtitle-primary mt-2">
                  Focused on trouble free Fin-ancial solutions!
                </h5>
                <p className="text-sm">
                  Kbiafiling is a finance and tax advisory start-up conceived
                  and founded with a vision of making India more Tax &
                  Financially literate. As a financial advisory, we feel that
                  knowledge should be free and everyone should have access to
                  it. It is in fact said that none of school/college teaches us
                  the basics of tax returns and tax savings although everyone
                  has to ultimately manage their finance and pay taxes after a
                  certain age. Because of lack of knowledge and awareness
                  related to tax and finance, either people become too
                  conservative and park their savings in bank accounts or fixed
                  deposits yielding real negative return after adjusting tax and
                  inflation; or invest in risky assets (such as shares, mutual
                  funds) without prior knowledge and later end up making
                  losses...{" "}
                  <a className="text-link" href="#">
                    {"Learn More >>"}
                  </a>
                </p>
              </Container>
            </Col>
          </Row>
        </Container>
        <Container className="p-3 mx-auto">
          <Row>
            <Col sm={12} className=" flex-center flex-column">
              <div className="  mx-auto">
                <img src={Pricing} alt="" />
              </div>
            </Col>
            <Col sm={12} className="flex-center flex-column text-center">
              <h1 className="title-secondary h-2 animate-char-dark">
                Pricing Plans!
              </h1>
              <h5 className="subtitle-primary  ">
                Explore our range of affordable service plans
              </h5>
              <ButtonGroup className="mt-3">
                {radios.map((radio, idx) => (
                  <ToggleButton
                    key={idx}
                    id={`radio-${idx}`}
                    type="radio"
                    variant={
                      radioValue === idx
                        ? "primary m-btn"
                        : "outline-primary m-btn-outline"
                    }
                    name="radio"
                    value={radio.value}
                    checked={radioValue === radio.value}
                    onChange={(e) => setRadioValue(e.currentTarget.value)}
                  >
                    {radio.name}
                  </ToggleButton>
                ))}
              </ButtonGroup>
            </Col>
          </Row>
        </Container>
        <Container className="mx-auto">
          <CardService radioValue={radioValue} />
        </Container>
        <WhyUsSlider />
        <Container fluid className="doted-background">
          <Container className="mx-auto">
            <Row>
              <Col sm={4}>
                <div className="flex-center p-4 flex-column">
                  <img src={taxsave} alt="" className="w-h-15" />
                  <h2 className="text-primary">50 lakhs+</h2>
                  <h4 className="text-uppercase title-primary text-between">
                    Tax Saved
                  </h4>
                </div>
              </Col>
              <Col sm={4}>
                <div className="flex-center p-4 flex-column">
                  <img src={happycustomer} alt="" className="w-h-15" />
                  <h2 className="text-primary">500+</h2>
                  <h4 className="text-uppercase title-primary text-between">
                    Happy Customers
                  </h4>
                </div>
              </Col>
              <Col sm={4}>
                <div className="flex-center p-4 flex-column">
                  <img src={files} alt="" className="w-h-15" />
                  <h2 className="text-primary">1000+</h2>
                  <h4 className="text-uppercase title-primary text-between">
                    Returned Field
                  </h4>
                </div>
              </Col>
            </Row>
          </Container>
        </Container>
        <HowWeWork />
        <RequestToUs />
      </Container>
    </>
  );
};
