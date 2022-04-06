import React, { useState } from "react";
import { default as busigrow } from "../../../../assets/images/aboutus/businessgrow.svg";
import { default as con } from "../../../../assets/images/aboutus/consultancy.svg";
import { default as lic } from "../../../../assets/images/aboutus/license.svg";
import { default as taxsave } from "../../../../assets/images/aboutus/tax_consultancy.svg";
import { Container, Row, Col, ToggleButton, Card } from "react-bootstrap";
import { serviceContent } from "../../../../content/content";
import { Markup } from "interweave";
function ServiceSlider() {
  const [radioValue, setRadioValue] = useState("0");

  const radios = [
    {
      name: `Business & Tax
    Registration`,
      value: "0",
      svg: busigrow,
    },
    {
      name: `Tax
      Consultancy`,
      value: "1",
      svg: taxsave,
    },
    {
      name: `License &
      Trademarks`,
      value: "2",
      svg: lic,
    },
    {
      name: `Financial
      Consultancy`,
      value: "3",
      svg: con,
    },
  ];
  return (
    <Container className="mx-auto flex-center p-2 ">
      <Row>
        <Col sm={6}>
          <Row>
            {radios.map((radio, idx) => (
              <Col xs={6} className="flex-center">
                <ToggleButton
                  className="m-card-btn m-btn mx-auto  p-1"
                  key={idx}
                  id={`radio-${idx}`}
                  type="radio"
                  variant={radioValue === idx.toString() ? "m-svg-white" : " "}
                  name="radio"
                  value={radio.value}
                  checked={radioValue === radio.value}
                  onChange={(e) => setRadioValue(e.currentTarget.value)}
                >
                  <Card
                    className={
                      radioValue === idx.toString()
                        ? "card-clicked m-card-btn  flex-center flex-column mb-2"
                        : "m-card-btn flex-center flex-column mb-2 "
                    }
                  >
                    <img
                      src={radio.svg}
                      className={
                        radioValue === idx.toString()
                          ? "w-h-10 bright"
                          : "w-h-10 "
                      }
                      alt=""
                    />
                    <p
                      className={
                        radioValue === idx.toString()
                          ? "text-medium text-center  mx-2 text-white"
                          : "text-medium text-center mx-2"
                      }
                    >
                      {radio.name}
                    </p>
                  </Card>
                </ToggleButton>
              </Col>
            ))}
          </Row>
        </Col>
        <Col sm={6} className="p-2">
          <>
            {serviceContent.map((x) => {
              if (x.key === radioValue)
                return (
                  <div className="text-start  ">
                    <h2 className="title-primary text-primary">{x.label}</h2>
                    <p className="text-sm">{x.content}</p>
                    <Markup className="text-between" content={x.points} />
                  </div>
                );
              else return <></>;
            })}
          </>
        </Col>
      </Row>
    </Container>
  );
}

export default ServiceSlider;
