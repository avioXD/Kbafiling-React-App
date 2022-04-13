import React, { useState } from "react";
import {
  Button,
  Container,
  Nav,
  Navbar,
  OverlayTrigger,
  Popover,
} from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../../Context/AuthContext";
import { Avatar } from "primereact/avatar";
import { ImCodepen, ImUser, ImExit } from "react-icons/im";
function NavigationBar() {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const navigateToLogin = () => {
    navigate("/login");
  };
  const navigateToRegister = () => {
    navigate("/register");
  };
  return (
    <>
      <Container fluid className="flex-center ">
        <Container className="mx-2">
          <Navbar bg="light" expand="lg">
            <Navbar.Brand>
              <Link to="/" className="title-primary h-2 animate-char-dark">
                {" "}
                Kbiafiling
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle
              className="custom-toggler"
              aria-controls="navbarScroll"
            />
            <Navbar.Collapse id="navbarScroll">
              <Nav className="my-2  flex-center" navbarScroll>
                <Link className="nav-link" to="/home">
                  Home
                </Link>
                <Link className="nav-link" to="/about">
                  About Us
                </Link>
                <Link className="nav-link" to="/pricing">
                  Services & Pricing
                </Link>
                <Link className="nav-link" to="#">
                  Blog
                </Link>
                <Link className="nav-link" to="/contact">
                  Contact Us
                </Link>
                <Link className="nav-link" to="/resource">
                  Resources
                </Link>
                <AuthContext.Consumer>
                  {(context) => {
                    if (context.isAuthenticated) {
                      return (
                        <div className=" mx-4 flex-start  flex-column  ">
                          <OverlayTrigger
                            show={show}
                            placement="bottom"
                            overlay={
                              <Popover
                                id="popover-basic "
                                className="  flex-start flex-column p-0  border-0 shadow-lg"
                              >
                                <Nav
                                  className="my-2  flex-start "
                                  navbarScroll
                                  onClick={() => {
                                    setShow(!show);
                                  }}
                                >
                                  <Link
                                    className="nav-link  text-start"
                                    to="/dashboard/profile"
                                  >
                                    <ImUser /> profile
                                  </Link>
                                  <Link
                                    className="nav-link  text-start"
                                    to="/dashboard"
                                  >
                                    <ImCodepen /> Dashboard
                                  </Link>
                                  <Link
                                    className="nav-link  text-start"
                                    onClick={() => context.logout()}
                                    to="/home"
                                  >
                                    <ImExit /> logout
                                  </Link>
                                </Nav>
                              </Popover>
                            }
                          >
                            <Avatar
                              className="mr-2 shadow "
                              size="large"
                              onClick={() => setShow(!show)}
                              style={{
                                //  padding: "0.5rem",
                                background: `linear-gradient(
                                90deg,
                                rgba(170, 42, 61, 1) 1%,
                                rgba(214, 57, 81, 1) 52%,
                                rgba(255, 133, 77, 1) 100%
                              )`,
                                color: "#ffffff",
                                fontzize: "0.6rem",
                              }}
                              shape="circle"
                              icon="pi pi-user"
                            />
                          </OverlayTrigger>
                        </div>
                      );
                    } else {
                      return (
                        <div>
                          <Button
                            variant="primary"
                            className="m-btn"
                            onClick={navigateToLogin}
                          >
                            Login
                          </Button>
                          <Button
                            variant="outline-primary"
                            className="m-btn-outline"
                            onClick={navigateToRegister}
                          >
                            Register
                          </Button>
                        </div>
                      );
                    }
                  }}
                </AuthContext.Consumer>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Container>
      </Container>
    </>
  );
}

export default NavigationBar;
