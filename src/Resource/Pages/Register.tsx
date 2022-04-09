import React, { useState } from "react";
import { default as heroImg } from "../../assets/images/registerHero.svg";
import { default as googleLogin } from "../../assets/images/google-login.svg";
import {
  Container,
  Row,
  Col,
  Card,
  Form,
  FloatingLabel,
  Button,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { registerUser } from "../API/auth.service";
import AuthContext from "../Context/AuthContext";
const regex = {
  email:
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  password:
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
  phone: /^\d{10}$/,
  name: /^[a-zA-Z ]{2,30}$/,
};

function Register() {
  const creds_init = {
    email: "",
    password: "",
    confirmPassword: "",
    name: "",
    phone: "",
  };
  const [creds, setCreds] = useState(creds_init);

  return (
    <Container fluid className="doted-background">
      <Container className="mx-auto h-100  p-2   ">
        <Row>
          <Col sm={12}>
            <Card className="card-list-group">
              <Card.Header>
                <h2 className="h-2">Register</h2>
              </Card.Header>

              <Card.Body>
                <Row>
                  <Col xs={{ order: "last" }} sm={5} className=" mt-4">
                    <h3 className="text-primary title-primary text-center">
                      Enter your details and start your journey with us.
                    </h3>
                    <div className="mx-auto m-w-30 mt-4 mb-5">
                      <AuthContext.Consumer>
                        {(context) => {
                          const handleChange = (obj) => {
                            setCreds({ ...creds, ...obj });
                          };
                          const onBlur = (obj: any) => {
                            const key = Object.keys(obj)[0] as string;
                            console.log(key);
                            if (
                              creds[key].match(regex[key]) &&
                              creds[key] !== ""
                            ) {
                              document
                                .getElementById(key)
                                .classList.remove("is-invalid");
                            } else {
                              document
                                .getElementById(key)
                                .classList.add("is-invalid");
                            }
                            if (
                              key === "confirmpassword" &&
                              creds.password !== creds.confirmPassword
                            ) {
                              document
                                .getElementById("confirmPassword")
                                .classList.add("is-invalid");
                            } else {
                              document
                                .getElementById("confirmPassword")
                                .classList.remove("is-invalid");
                            }
                          };
                          const onSubmit = (login) => {
                            if (creds.confirmPassword !== creds.password) {
                              document
                                .getElementById("confirmPassword")
                                .classList.add("is-invalid");
                            }
                            if (
                              creds.email !== "" &&
                              creds.password !== "" &&
                              creds.name !== "" &&
                              creds.phone !== "" &&
                              creds.confirmPassword === creds.password
                            ) {
                              registerUser(creds)
                                .then((res) => {
                                  if (res.status === 200) {
                                    login(res.data.user, res.data.token);
                                    context.showToast("Register Successful", {
                                      type: "success",
                                    });
                                    setCreds(creds_init);
                                    context.navigateTo("/dashboard");
                                  }
                                })
                                .catch((err) => {
                                  console.log(err);
                                  context.showToast("Login Failed", {
                                    type: "error",
                                  });
                                });
                            }
                          };

                          return (
                            <Form>
                              <Form.Group className="" controlId="form">
                                <FloatingLabel
                                  className="mb-3"
                                  controlId="name"
                                  label="Name"
                                >
                                  <Form.Control
                                    type="text"
                                    placeholder="Name"
                                    value={creds.name}
                                    onChange={(e) =>
                                      handleChange({ name: e.target.value })
                                    }
                                    onBlur={(e) =>
                                      onBlur({ name: e.target.value })
                                    }
                                  />
                                </FloatingLabel>
                                <FloatingLabel
                                  className="mb-3"
                                  controlId="email"
                                  label="Email"
                                >
                                  <Form.Control
                                    type="mail"
                                    placeholder="Email"
                                    value={creds.email}
                                    onChange={(e) => {
                                      handleChange({
                                        email: e.target.value,
                                      });
                                    }}
                                    onBlur={(e) => {
                                      onBlur({ email: e.target.value });
                                    }}
                                  />
                                </FloatingLabel>
                                <FloatingLabel
                                  className="mb-3"
                                  controlId="phone"
                                  label="Phone"
                                >
                                  <Form.Control
                                    type="number"
                                    placeholder="Phone"
                                    value={creds.phone}
                                    onChange={(e) =>
                                      handleChange({ phone: e.target.value })
                                    }
                                    onBlur={(e) => {
                                      onBlur({ phone: e.target.value });
                                    }}
                                  />
                                </FloatingLabel>

                                <FloatingLabel
                                  className="mb-3"
                                  controlId="password"
                                  label="Password"
                                >
                                  <Form.Control
                                    type="password"
                                    placeholder="Password"
                                    value={creds.password}
                                    onChange={(e) =>
                                      handleChange({
                                        password: e.target.value,
                                      })
                                    }
                                    onBlur={(e) =>
                                      onBlur({ password: e.target.value })
                                    }
                                  />
                                </FloatingLabel>
                                <FloatingLabel
                                  className="mb-3"
                                  controlId="confirmPassword"
                                  label="Confirm Password"
                                >
                                  <Form.Control
                                    type="password"
                                    placeholder="Confirm Password"
                                    value={creds.confirmPassword}
                                    onChange={(e) =>
                                      handleChange({
                                        confirmPassword: e.target.value,
                                      })
                                    }
                                    onBlur={(e) =>
                                      onBlur({
                                        confirmPassword: e.target.value,
                                      })
                                    }
                                  />
                                </FloatingLabel>
                              </Form.Group>
                              <div className="flex-center flex-column p-3">
                                <Button
                                  variant="primary"
                                  className="m-btn "
                                  type="button"
                                  onClick={() => onSubmit(context.login)}
                                >
                                  Register
                                </Button>
                                <p className="title-secondary text-between mt-3">
                                  Already user?{" "}
                                  <Link className="text-link" to={"/login"}>
                                    Login Now
                                  </Link>
                                </p>
                              </div>
                            </Form>
                          );
                        }}
                      </AuthContext.Consumer>

                      <p className="text-divider text-primary">OR</p>
                      <div className="flex-center">
                        <img
                          className="m-btn cursor-pointer mx-auto "
                          style={{ maxWidth: "18rem" }}
                          src={googleLogin}
                          alt=""
                        />
                      </div>
                    </div>
                  </Col>
                  <Col sm={6} className="flex-center flex-column">
                    <img src={heroImg} alt="" />
                    <Col sm={12} className="mb-3">
                      <div className="d-flex justify-content-center align-item-center">
                        <p className="text-primary">Follow us on </p>
                        <FaFacebook className="m-icon-dark" />
                        <FaTwitter className="m-icon-dark" />
                        <FaInstagram className="m-icon-dark" />
                        <FaLinkedinIn className="m-icon-dark" />
                      </div>
                    </Col>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Register;
