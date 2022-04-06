import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { whyUsContent } from "../../../../content/content";
import { default as whyus } from "../../../../assets/images/why_us/whyus.svg";
function WhyUsSlider() {
  return (
    <Container className="mx-auto p-2 mt-5">
      <Row>
        <Col sm={12}>
          <img src={whyus} className="w-h-10 p-1" alt="" />
          <h1 className="title-secondary h-2   animate-char-dark">Why Us!</h1>
          <p className="text-sm text-secondary">
            At Kbiafiling, our aim is to change the way people look at tax and
            financial services. We want to increase financial & Tax literacy so
            that people become more aware of Indian tax laws & rules with
            adequate income tax consultancy and take better decisions. Likewise,
            we want to highlight the acquired professional knowledge about
            Indian Tax Legislation and Tax Procedures. It will help them in
            optimizing legal compliance & manage their tax savings.
          </p>
        </Col>
      </Row>

      <Container>
        {" "}
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          rewind={true}
          className="p-3"
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
          freeMode={true}
          autoplay={true}
          pagination={{ clickable: true }}
        >
          {whyUsContent.map((x) => (
            <>
              {" "}
              <SwiperSlide className="flex-center  ">
                <div className="card p-3 mt-4 h-50 designed-background">
                  <img src={x.img} alt="" className="w-h-15 mx-auto" />
                  <h6 className="subtitle-primary text-center">{x.label}</h6>
                  <p className="text-sm text-center">{x.content}</p>
                </div>
              </SwiperSlide>
            </>
          ))}
        </Swiper>
      </Container>
    </Container>
  );
}

export default WhyUsSlider;
