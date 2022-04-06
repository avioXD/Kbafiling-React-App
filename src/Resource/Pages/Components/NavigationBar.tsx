import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../../Context/AuthContext";
function NavigationBar() {
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
                      return <></>;
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
