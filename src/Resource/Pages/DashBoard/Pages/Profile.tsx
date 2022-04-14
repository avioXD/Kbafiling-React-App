import React, { useEffect } from "react";
import { Container, Card, Row, Col, Form, Button } from "react-bootstrap";
import { ImProfile } from "react-icons/im";
import AuthContext from "../../../Context/AuthContext";
import { updateUser } from "../../../API/common_api.service";
const regex = {
  email:
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  password:
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
  phone: /^\d{10}$/,
  name: /^[a-zA-Z ]{2,30}$/,
};
function Profile() {
  const { user, login, showToast } = React.useContext(AuthContext);
  const [creds, setCreds] = React.useState({
    ...user,
    org_type: user.org_type ? user.org_type : "",
    company: user.company ? user.company : "",
    address: user.address ? user.address : "",
    whatsapp_no: user.whatsapp_no ? user.whatsapp_no : "",
  });
  useEffect(() => {
    setCreds(user);
  }, [user]);
  const [editable, setEditable] = React.useState(false);
  const onBlur = (obj: any) => {
    const key = Object.keys(obj)[0] as string;
    console.log(key);
    if (creds[key].match(regex[key]) && creds[key] !== "") {
      document.getElementById(key).classList.remove("is-invalid");
    } else {
      document.getElementById(key).classList.add("is-invalid");
    }
  };
  const handleChange = (obj) => {
    setCreds({ ...creds, ...obj });
  };
  const onSave = () => {
    if (editable) {
      console.log(creds);
      updateUser(creds)
        .then((res) => {
          if (res.status === 200) {
            login(res.data.user, res.data.token);
            showToast("Update Successful", {
              type: "success",
            });
            setCreds(user);
            setEditable(false);
          }
        })
        .catch((err) => {
          console.log(err);
          showToast("Update Failed", {
            type: "error",
          });
        });
    }
  };
  return (
    <Container fluid className="p-1">
      <Container className="mx-auto p-2">
        <Card className="card-list-group p-4">
          <p className="text-primary mb-4 h-2 animate-char-dark p-3">
            <ImProfile /> Profile
          </p>
          <Card.Body className="p-3  ">
            <Form>
              <Row>
                <Col sm={6}>
                  <Form.Group
                    className={
                      editable ? "form-primary" : "form-primary-disabled"
                    }
                    controlId="name"
                  >
                    <Form.Label>Your Name :</Form.Label>
                    <Form.Control
                      disabled={!editable}
                      type="text"
                      placeholder="Name"
                      value={creds.name}
                      onChange={(e) => handleChange({ name: e.target.value })}
                      onBlur={() => onBlur({ name: creds.name })}
                    />
                  </Form.Group>
                </Col>

                <Col sm={6}>
                  <Form.Group
                    className={
                      editable ? "form-primary" : "form-primary-disabled"
                    }
                    controlId="name"
                  >
                    <Form.Label>Email ID :</Form.Label>
                    <Form.Control
                      disabled={!editable}
                      type="text"
                      placeholder="Email"
                      value={creds.email}
                      onChange={(e) => handleChange({ email: e.target.value })}
                      onBlur={() => onBlur({ email: creds.email })}
                    />
                  </Form.Group>
                </Col>
                <Col sm={6}>
                  <Form.Group
                    className={
                      editable ? "form-primary" : "form-primary-disabled"
                    }
                    controlId="phone"
                  >
                    <Form.Label>Registered Mobile No. :</Form.Label>
                    <Form.Control
                      disabled={!editable}
                      type="text"
                      placeholder="Mobile No."
                      value={"+91 " + creds.phone}
                      onChange={(e) => handleChange({ phone: e.target.value })}
                      onBlur={() => onBlur({ phone: creds.phone })}
                    />
                  </Form.Group>
                </Col>
                <Col sm={6}>
                  <Form.Group
                    className={
                      editable ? "form-primary" : "form-primary-disabled"
                    }
                    controlId="phone"
                  >
                    <Form.Label>Whatsapp No. :</Form.Label>
                    <Form.Control
                      disabled={!editable}
                      type="text"
                      placeholder="Whatsapp No."
                      value={creds.whatsapp_no}
                      onChange={(e) =>
                        handleChange({ whatsapp_no: e.target.value })
                      }
                      onBlur={() => onBlur({ whatsapp_no: creds.whatsapp_no })}
                    />
                  </Form.Group>
                </Col>
                <Col sm={12}>
                  <Form.Group
                    className={
                      editable ? "form-primary" : "form-primary-disabled"
                    }
                    controlId="cname"
                  >
                    <Form.Label>Your Company Name :</Form.Label>
                    <Form.Control
                      disabled={!editable}
                      type="text"
                      as="textarea"
                      rows={2}
                      placeholder="Company Name"
                      value={creds.company_name}
                      onChange={(e) =>
                        handleChange({ company: e.target.value })
                      }
                      onBlur={() => onBlur({ company: creds.company })}
                    />
                  </Form.Group>
                </Col>
                <Col sm={12}>
                  <Form.Group
                    className={
                      editable ? "form-primary" : "form-primary-disabled"
                    }
                    controlId="Organisation "
                  >
                    <Form.Label>Organisation type :</Form.Label>
                    <Form.Control
                      disabled={!editable}
                      type="text"
                      placeholder="Organisation type"
                      value={creds.org_type}
                      onChange={(e) =>
                        handleChange({ org_type: e.target.value })
                      }
                      onBlur={() => onBlur({ org_type: creds.org_type })}
                    />
                  </Form.Group>
                </Col>
                <Col sm={12}>
                  <Form.Group
                    className={
                      editable ? "form-primary" : "form-primary-disabled"
                    }
                    controlId="name"
                  >
                    <Form.Label>Address :</Form.Label>
                    <Form.Control
                      disabled={!editable}
                      type="text"
                      as="textarea"
                      rows={3}
                      placeholder="Address"
                      value={creds.address}
                      onChange={(e) =>
                        handleChange({ address: e.target.value })
                      }
                      onBlur={() => onBlur({ address: creds.address })}
                    />
                  </Form.Group>
                </Col>
              </Row>
              <div className="flex-end">
                <Button
                  variant="primary"
                  className="m-btn flex-center"
                  onClick={() => (editable ? onSave() : setEditable(true))}
                >
                  {editable ? "Save" : "Edit"}
                </Button>
              </div>
            </Form>
          </Card.Body>
        </Card>
      </Container>
    </Container>
  );
}

export default Profile;
