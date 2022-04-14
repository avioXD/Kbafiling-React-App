import React, { useEffect, useContext, useState } from "react";
import { Container, Card, Table, Button } from "react-bootstrap";
import { ImBriefcase } from "react-icons/im";
import { getFiles, onDownloadFile } from "../../../API/common_api.service";
import AuthContext from "../../../Context/AuthContext";
import { Skeleton } from "primereact/skeleton";
import { AiOutlineDownload } from "react-icons/ai";
function Folder() {
  const { user, showToast } = useContext(AuthContext);
  const [files, setFiles] = useState(null);

  useEffect(() => {
    getFiles(user.id)
      .then((res) => {
        if (res.status === 200) {
          setFiles(res.data.documents);
        }
      })
      .catch((err) => {
        showToast(err.response.data.message, { type: "error" });
      });
  }, []);

  const onDownload = (id, idx) => {
    onDownloadFile(id)
      .then((res) => {
        if (res.status === 200) {
          console.log(res);
          // const blob = new Blob([res.data], {
          //   type: res.headers["content-type"],
          // });
          // const link = document.createElement("a");
          // link.href = window.URL.createObjectURL(blob);
          // link.download = `adawdaswd-${+new Date()}.jpg`;
          // link.click();
          showToast("File downloaded successfully", { type: "success" });
        }
      })
      .catch((err) => {
        showToast(err.response.data.message, { type: "error" });
      });
  };
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
                  <th>Name</th>
                  <th>Attachment</th>
                </tr>
              </thead>
              <tbody>
                {files ? (
                  files.map((n, idx) => (
                    <tr className="text-between">
                      <td>{n.title}</td>
                      <td className="cursor-pointer">
                        {/* {loading[idx] ? (
                          <i
                            className="pi pi-spin pi-spinner"
                            style={{ fontSize: "2em" }}
                          ></i>
                        ) : (
                          <AiOutlineDownload
                            className="text-primary h3"
                            onClick={() => onDownload(n.id, idx)}
                          />
                        )} */}
                        <AiOutlineDownload
                          className="text-primary h3"
                          onClick={() => onDownload(n.id, idx)}
                        />
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

export default Folder;
