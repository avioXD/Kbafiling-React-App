import React from "react";
import { Container, Card, Row, Col, Form, Button } from "react-bootstrap";
import { ImProfile } from "react-icons/im";
import { GiConfirmed } from "react-icons/gi";
import AuthContext from "../../../Context/AuthContext";
import { Save } from "react-ionicons";
import { updateUser } from "../../../API/common_api.service";
function Profile() {
  const { user, login, showToast } = React.useContext(AuthContext);
  const [creds, setCreds] = React.useState({
    ...user,
    org_type: "",
    company_name: "",
    address: "",
  });
  const [editable, setEditable] = React.useState(false);
  const onSave = () => {
    if (editable) {
      updateUser(creds)
        .then((res) => {
          if (res.status === 200) {
            login({ ...user, ...res.data.user }, res.data.token);
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
          <h3 className="text-primary mb-4 p-3">
            <ImProfile /> Profile
          </h3>
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
                      // onChange={(e) => handleChange({ name: e.target.value })}
                      // onBlur={(e) => onBlur({ name: e.target.value })}
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
                      // onChange={(e) => handleChange({ name: e.target.value })}
                      // onBlur={(e) => onBlur({ name: e.target.value })}
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
                      // onChange={(e) => handleChange({ name: e.target.value })}
                      // onBlur={(e) => onBlur({ name: e.target.value })}
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
                      value={"+91 " + creds.phone}
                      // onChange={(e) => handleChange({ name: e.target.value })}
                      // onBlur={(e) => onBlur({ name: e.target.value })}
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
                      // onChange={(e) => handleChange({ name: e.target.value })}
                      // onBlur={(e) => onBlur({ name: e.target.value })}
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
                      // onChange={(e) => handleChange({ name: e.target.value })}
                      // onBlur={(e) => onBlur({ name: e.target.value })}
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
                      // onChange={(e) => handleChange({ name: e.target.value })}
                      // onBlur={(e) => onBlur({ name: e.target.value })}
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
