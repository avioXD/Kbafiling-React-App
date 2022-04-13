import React, { useContext, useEffect, useState } from "react";
import { Container, Card, Table } from "react-bootstrap";
import { ImBell } from "react-icons/im";
import { FaLink } from "react-icons/fa";
import { MdOutlineDeleteSweep } from "react-icons/md";
import { getNotification } from "../../../API/common_api.service";
import AuthContext from "../../../Context/AuthContext";
import { format } from "date-fns";
import { Skeleton } from "primereact/skeleton";

function Notification() {
  const { user, showToast } = useContext(AuthContext);
  const [notifications, setNotifications] = useState(null);
  useEffect(() => {
    getNotification(user.id)
      .then((res) => {
        if (res.status === 200) {
          console.log(res.data);
          setNotifications(res.data.notifications);
        }
      })
      .catch((err) => {
        showToast(err.response.data.message, { type: "error" });
      });
  }, []);
  return (
    <Container fluid className="p-1 ">
      <Container className="mx-auto p-2">
        <p className="text-primary mb-4 h-2 animate-char-dark p-3">
          <ImBell /> Notifications
        </p>{" "}
        <Card className="card-list-group">
          <Card.Body className="p-3">
            <Table hover className="text-center">
              <thead className="c-background text-white">
                <tr>
                  <th>Date</th>
                  <th>Comment</th>
                  <th>Attachment</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {notifications ? (
                  notifications.map((n) => (
                    <tr className="text-between">
                      <td>{format(new Date(n.date), "yyyy-MM-dd")}</td>
                      <td>{n.comment}</td>
                      <td className="cursor-pointer">
                        <FaLink className="text-primary" />
                      </td>
                      <td>
                        <MdOutlineDeleteSweep className="text-danger  h2 cursor-pointer" />
                      </td>
                    </tr>
                  ))
                ) : (
                  <>
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => (
                      <tr className="text-between">
                        <td>
                          <Skeleton width="100%" className="mb-2"></Skeleton>
                        </td>
                        <td>
                          {" "}
                          <Skeleton width="100%" className="mb-2"></Skeleton>
                        </td>
                        <td className="cursor-pointer">
                          <Skeleton width="100%" className="mb-2"></Skeleton>
                        </td>
                        <td>
                          <Skeleton width="100%" className="mb-2"></Skeleton>
                        </td>
                      </tr>
                    ))}
                  </>
                )}
              </tbody>
            </Table>
          </Card.Body>
        </Card>
      </Container>
    </Container>
  );
}

export default Notification;
