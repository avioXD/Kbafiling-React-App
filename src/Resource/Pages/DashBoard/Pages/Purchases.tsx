import React, { useContext, useState, useEffect } from "react";
import { Container, Card, Table, Button } from "react-bootstrap";
import { ImBriefcase } from "react-icons/im";
import { getUserPurchases } from "../../../API/common_api.service";
import AuthContext from "../../../Context/AuthContext";
import { Skeleton } from "primereact/skeleton";
const notifications = [
  {
    id: 1,
    date: "2020-01-01",
    service: "This is a service",
    planname: "planname.pdf",
    price: "price",
  },
  {
    id: 2,
    date: "2020-01-01",
    service: "This is a service",
    planname: "planname.pdf",
    price: "price",
  },
  {
    id: 3,
    date: "2020-01-01",
    service: "This is a service",
    planname: "planname.pdf",
    price: "price",
  },
];
function Purchases() {
  const { user, showToast } = useContext(AuthContext);
  const [purchases, setPurchases] = useState(null);
  useEffect(() => {
    getUserPurchases(user.id)
      .then((res) => {
        if (res.status === 200) {
          console.log(res.data.purchases);
          setPurchases(res.data.purchases);
        }
      })
      .catch((err) => {
        showToast(err.response.data.message, { type: "error" });
      });
  }, []);
  return (
    <Container fluid className="p-1">
      <Container className="mx-auto p-2">
        <p className="text-primary mb-4 h-2 animate-char-dark p-3">
          <ImBriefcase /> My Purchases
        </p>
        <Card className="card-list-group">
          <Card.Body className="p-3">
            <Table hover className="text-center">
              <thead className="c-background text-white">
                <tr>
                  <th>Date</th>
                  <th>Service</th>
                  <th>Plan Name</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                {purchases ? (
                  purchases.map((n) => (
                    <tr className="text-between">
                      <td>{n.date}</td>
                      <td>{n.service}</td>
                      <td className="cursor-pointer">{n.planname}</td>
                      <td> ₹{n.price}</td>
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

export default Purchases;
