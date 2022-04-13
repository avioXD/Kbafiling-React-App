import React, { useEffect, useState } from "react";
import { Container, Offcanvas, Button } from "react-bootstrap";
import {
  FaHome,
  FaUser,
  FaBell,
  FaFileUpload,
  FaCartArrowDown,
  FaFolder,
  FaUserFriends,
  FaTag,
} from "react-icons/fa";
import { useNavigate, Link, Outlet, useLocation } from "react-router-dom";
import { default as threebar } from "../../../assets/images/menu.svg";
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
    navigate: "/dashboard/profile",
    Icon: <FaUser />,
  },
  {
    name: "Notifications",
    value: "notifications",
    navigate: "/dashboard/notifications",
    Icon: <FaBell />,
  },
  {
    name: "Upload",
    value: "uploadfiles",
    navigate: "/dashboard/uploadfiles",
    Icon: <FaFileUpload />,
  },
  {
    name: "My Purchases",
    value: "purchases",
    navigate: "/dashboard/purchases",
    Icon: <FaTag />,
  },
  {
    name: "Order Status",
    value: "orderstatus",
    navigate: "/dashboard/orderstatus",
    Icon: <FaCartArrowDown />,
  },
  {
    name: "Folder",
    value: "folder",
    navigate: "/dashboard/folder",
    Icon: <FaFolder />,
  },
  {
    name: "Refer & Earn",
    value: "refer&Earn",
    navigate: "/dashboard/refer&Earn",
    Icon: <FaUserFriends />,
  },
];

function DashboardIndex() {
  const [radioValue, setRadioValue] = useState("dashboard");
  const location = useLocation();
  useEffect(() => {
    console.log(location.pathname);
    if (location.pathname === "/dashboard") {
      setRadioValue("dashboard");
    } else if (location.pathname === "/dashboard/orders") {
      setRadioValue("orders");
    } else if (location.pathname === "/dashboard/users") {
      setRadioValue("users");
    } else if (location.pathname === "/dashboard/settings") {
      setRadioValue("settings");
    } else if (location.pathname === "/dashboard/profile") {
      setRadioValue("profile");
    } else if (location.pathname === "/dashboard/notifications") {
      setRadioValue("notifications");
    } else if (location.pathname === "/dashboard/uploadfiles") {
      setRadioValue("uploadfiles");
    } else if (location.pathname === "/dashboard/purchases") {
      setRadioValue("purchases");
    } else if (location.pathname === "/dashboard/folder") {
      setRadioValue("folder");
    } else if (location.pathname === "/dashboard/refer&Earn") {
      setRadioValue("refer&Earn");
    }
  }, [location?.pathname]);
  const navigate = useNavigate();
  const navigateTo = (path) => {
    navigate(path);
  };
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Container fluid className="c-background ">
      <div className="sidebar p-2  mt-2">
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
                    onClick={() => {
                      setRadioValue(radio.value);
                      navigateTo(radio.navigate);
                    }}
                  >
                    <p>
                      <span className="icon">{radio.Icon}</span>
                      <span className="title">{radio.name}</span>
                    </p>
                  </li>
                ))}
              </ul>
            </ul>
          </Offcanvas.Body>
        </Offcanvas>
      </div>
      <Container fluid className="mx-auto p-2 d-flex mb-5">
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
        <Container fluid className="dashboard-container p-2 bg-light">
          <Outlet />
        </Container>
      </Container>
    </Container>
  );
}

export default DashboardIndex;
