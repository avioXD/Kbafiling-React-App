import React, { useContext, useEffect, useState } from "react";
import { Container, Card, Table } from "react-bootstrap";
import { GoPackage } from "react-icons/go";
import { getUserOrders } from "../../../API/common_api.service";
import AuthContext from "../../../Context/AuthContext";
import { format } from "date-fns";
import { Skeleton } from "primereact/skeleton";
const notifications = [
  {
    id: 1,
    date: "2020-01-01",
    service: "This is a service",
    planname: "planname.pdf",
    status: "status",
  },
  {
    id: 2,
    date: "2020-01-01",
    service: "This is a service",
    planname: "planname.pdf",
    status: "status",
  },
  {
    id: 3,
    date: "2020-01-01",
    service: "This is a service",
    planname: "planname.pdf",
    status: "status",
  },
];
function OrderStatus() {
  const { user, showToast } = useContext(AuthContext);
  const [orders, setOrders] = useState(null);
  useEffect(() => {
    getUserOrders(user.id)
      .then((res) => {
        if (res.status === 200) {
          setOrders(res.data.orders);
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
          <GoPackage /> Order Status
        </p>
        <Card className="card-list-group  ">
          <Card.Body className="p-3">
            <Table hover className="text-center">
              <thead className="c-background text-white">
                <tr>
                  <th>Id</th>
                  <th>Date</th>
                  <th>Service</th>
                  <th>Plan Name</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {orders ? (
                  orders.map((n) => (
                    <tr className="text-between">
                      <td>{n.id}</td>
                      <td>{format(new Date(n.date), "yyyy-MM-dd, hh:mm")}</td>
                      <td>{n.service}</td>
                      <td className="cursor-pointer">{n.planname}</td>
                      <td>{n.status}</td>
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

export default OrderStatus;
