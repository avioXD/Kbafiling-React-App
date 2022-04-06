import React, { useState } from "react";
import { default as Pricing } from "../../../../assets/images/pricing.svg";
import {
  Container,
  Row,
  Col,
  ButtonGroup,
  ToggleButton,
  Button,
} from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, EffectCoverflow } from "swiper";
import { pricingCardContent } from "../../../../content/content";
import { Markup } from "interweave";
import { useNavigate } from "react-router-dom";

function PricingCard() {
  const [radioValue, setRadioValue] = useState("individual");
  const navigate = useNavigate();
  const navigateTo = (_id) => {
    navigate(`/product/order/${_id}`);
  };
  const radios: any = [
    { name: "Individual", value: "individual" },
    { name: "Business", value: "business" },
  ];

  return (
    <Container fluid className="doted-background">
      <Container className="p-3 mx-auto">
        <Row>
          <Col sm={12} className="flex-center flex-column text-center  ">
            <h1 className="title-secondary h-1 animate-char-dark ">
              Pricing Plans!
            </h1>
            <Col sm={12} className=" flex-center flex-column">
              <div className="  mx-auto">
                <img src={Pricing} alt="" />
              </div>
            </Col>
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
          className="p-5 pt-5 m-swiper"
        >
          {pricingCardContent.map((x) => {
            if (x.type === radioValue) {
              return (
                <>
                  {""}
                  <SwiperSlide className="flex-center">
                    <div className="card-3d text-start flex-column   ">
                      <h3 className="subtitle-primary animate-char  bold">
                        {x.label}
                      </h3>
                      <h4 className="text-white ">
                        {" "}
                        Pricing: <span className="h2"></span> @ ₹ {x.price}{" "}
                        Onwards
                      </h4>
                      <div className="flex-center ">
                        <Button
                          variant="primary"
                          className="  mt-2 m-btn mx-auto"
                          onClick={() => navigateTo(x.key)}
                        >
                          Buy Now
                        </Button>
                      </div>
                      <p className="text-divider">Includes</p>
                      <Markup
                        className="text-white"
                        content={`<ul>` + x.plans + `</ul>`}
                      />
                    </div>
                  </SwiperSlide>
                </>
              );
            } else {
              return <></>;
            }
          })}
        </Swiper>
      </Container>
    </Container>
  );
}

export default PricingCard;
