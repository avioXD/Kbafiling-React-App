import React, { useState } from "react";
import { Container, Offcanvas, Button } from "react-bootstrap";
import {
  FaHome,
  FaUser,
  FaBell,
  FaFileUpload,
  FaCartArrowDown,
  FaFolder,
  FaUserFriends,
} from "react-icons/fa";
import { Route, Routes, useNavigate, Link, Outlet } from "react-router-dom";
import { default as threebar } from "../../../assets/images/menu.svg";
import LandingPage from "./Pages/Landing";

function DashboardIndex() {
  return (
    <Routes>
      <Route path="/" element={<DashboardLayout />}>
        <Route index element={<LandingPage />} />
        <Route path="/landing" element={<LandingPage />} />
        {/* <Route path="messages" element={<Messages />} /> */}
      </Route>
    </Routes>
  );
}

function DashboardLayout() {
  const [radioValue, setRadioValue] = useState("dashboard");
  let radios = [
    {
      name: "Dashboard",
      value: "dashboard",
      navigate: "/dashboard/landing ",
      Icon: <FaHome />,
    },
    {
      name: "Profile",
      value: "profile",
      navigate: "/dashboard/Profile",
      Icon: <FaUser />,
    },
    {
      name: "Notifications",
      value: "notifications",
      navigate: "/dashboard/Notifications",
      Icon: <FaBell />,
    },
    {
      name: "Upload",
      value: "upload",
      navigate: "/dashboard/DashboardHome",
      Icon: <FaFileUpload />,
    },
    {
      name: "My Purchases",
      value: "purchases",
      navigate: "/dashboard/My-Purchases",
      Icon: <FaCartArrowDown />,
    },
    {
      name: "Folder",
      value: "folder",
      navigate: "/dashboard/Folder",
      Icon: <FaFolder />,
    },
    {
      name: "Refer & Earn",
      value: "refer&Earn",
      navigate: "/dashboard/refer&Earn",
      Icon: <FaUserFriends />,
    },
  ];
  const navigate = useNavigate();
  const navigateTo = (path) => {
    navigate(path);
  };
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <Container fluid className="c-background mb-1 ">
      <div className="sidebar p-2  mt-4">
        <img src={threebar} alt="" className="img-icon" onClick={handleShow} />
        <Offcanvas show={show} onHide={handleClose}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>
              <h3 className="text-center title-primary h-2 text-uppercase">
                Kabiafiling
              </h3>
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body className="sidebar-items p-0">
            <ul>
              <ul>
                {radios.map((radio, idx) => (
                  <li
                    className={`list ${
                      radioValue === radio.value ? "active" : ""
                    }`}
                    id={`radio-${idx}`}
                  >
                    <Link to={radio.navigate}>
                      <p>
                        <span className="icon">{radio.Icon}</span>
                        <span className="title">{radio.name}</span>
                      </p>
                    </Link>
                  </li>
                ))}
              </ul>
            </ul>
          </Offcanvas.Body>
        </Offcanvas>
      </div>
      <Container className="mx-auto p-2 d-flex mb-5">
        <div className="navigation">
          <ul>
            {radios.map((radio, idx) => (
              <li
                className={`list ${radioValue === radio.value ? "active" : ""}`}
                id={`radio-${idx}`}
              >
                <p
                  onClick={() => {
                    setRadioValue(radio.value);
                    navigateTo(radio.navigate);
                  }}
                >
                  <span className="icon">{radio.Icon}</span>
                  <span className="title">{radio.name}</span>
                </p>
              </li>
            ))}
          </ul>
        </div>
        <Container className="dashboard-container p-2">
          <Outlet />
        </Container>
      </Container>
    </Container>
  );
}

export default DashboardIndex;
