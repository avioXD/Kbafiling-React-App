import React, { useState } from "react";
import { default as heroImg } from "../../assets/images/loginHero.svg";
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
import { Link, useNavigate } from "react-router-dom";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { loginUser } from "../API/auth.service";
import AuthContext from "../Context/AuthContext";
const regex = {
  email:
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  password:
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
};

function Login() {
  const creds_init = {
    email: "",
    password: "",
  };

  const [creds, setCreds] = useState(creds_init);
  const navigate = useNavigate();
  return (
    <Container fluid className="doted-background">
      <Container className="mx-auto h-100  p-2   ">
        <Row>
          <Col sm={12}>
            <Card className="card-list-group">
              <Card.Header>
                <h2 className="h-2">Login</h2>
              </Card.Header>

              <Card.Body>
                <Row>
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
                  <Col sm={5} className=" mt-4">
                    <h3 className="text-primary title-primary text-center">
                      To stay connected, Login with your personal details.
                    </h3>
                    <div className="mx-auto m-w-30 mt-4 mb-3">
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
                          };

                          const onSubmit = (login) => {
                            if (creds.email !== "" && creds.password !== "") {
                              loginUser(creds)
                                .then((res) => {
                                  if (res.status === 200) {
                                    login(res.data.user, res.data.token);
                                    context.showToast("Login Successful", {
                                      type: "success",
                                    });
                                    navigate("/dashboard");
                                  }
                                })
                                .catch((err) => {
                                  console.log(err);
                                  context.showToast("Login Failed", {
                                    type: "error",
                                  });
                                  navigate("/register");
                                });
                            }
                          };
                          return (
                            <Form>
                              <Form.Group>
                                <FloatingLabel
                                  className="mb-3"
                                  controlId="floatingEmail"
                                  label="Email"
                                >
                                  <Form.Control
                                    id="email"
                                    value={creds.email}
                                    onChange={(e) =>
                                      handleChange({ email: e.target.value })
                                    }
                                    onBlur={(e) =>
                                      onBlur({ email: e.target.value })
                                    }
                                    type="mail"
                                    placeholder="Email"
                                  />
                                </FloatingLabel>
                              </Form.Group>
                              <Form.Group>
                                <FloatingLabel
                                  controlId="floatingPassword"
                                  label="Password"
                                >
                                  <Form.Control
                                    id="password"
                                    value={creds.password}
                                    onChange={(e) =>
                                      handleChange({ password: e.target.value })
                                    }
                                    onBlur={(e) =>
                                      onBlur({ password: e.target.value })
                                    }
                                    type="password"
                                    placeholder="Password"
                                  />
                                </FloatingLabel>
                              </Form.Group>
                              <div className="flex-center flex-column p-3">
                                <Button
                                  variant="primary"
                                  className="m-btn  "
                                  type="button"
                                  onClick={() => onSubmit(context.login)}
                                >
                                  Login
                                </Button>
                                <Link
                                  className="text-link mt-3"
                                  to={"/resetpassword"}
                                >
                                  Forgot Password?
                                </Link>
                                <p className="title-secondary text-between mt-3">
                                  New User?{" "}
                                  <Link className="text-link" to={"/register"}>
                                    Register Now
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
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Login;
