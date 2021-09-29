import moment from "moment";
import { useEffect, useState } from "react";
import { Accordion, Button, Card, Row } from "react-bootstrap";
import { useHistory, useLocation } from "react-router-dom";
import Swal from "sweetalert2";
import { SEARCH_TYPES } from "../../constants/constants";
import {
  getServiceRequestById,
  getServiceRequestsByAddress,
} from "../../models/firebase";

export default function ViewRequests() {
  const [requests, setRequests] = useState([]);
  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    const fetchRequests = async () => {
      let requestsData = null;
      let params = new URLSearchParams(location.search);
      if (params.has(SEARCH_TYPES.REQUEST_ID)) {
        try {
          requestsData = await getServiceRequestById(
            params.get(SEARCH_TYPES.REQUEST_ID)
          );
          setRequests(requestsData);
        } catch (err) {
          Swal.fire({
            icon: "error",
            title: "Invalid Request ID",
          }).then((result) => {
            if (result.isConfirmed) {
              history.goBack();
            }
          });
        }
      } else if (params.has(SEARCH_TYPES.ADDRESS)) {
        try {
          requestsData = await getServiceRequestsByAddress(
            params.get(SEARCH_TYPES.ADDRESS)
          );
          setRequests(requestsData);
        } catch (err) {
          Swal.fire({
            icon: "error",
            title: "No requests found for provided address",
          }).then((result) => {
            if (result.isConfirmed) {
              history.goBack();
            }
          });
        }
      }
    };

    fetchRequests();
  }, []);

  const getLogDate = (requestData, logIndex) => {
    let logDate = null;
    if (
      requestData.logs &&
      requestData.logs[logIndex] &&
      requestData.logs[logIndex].timestamp
    ) {
      logDate = requestData.logs[logIndex].timestamp.toDate();
    } else {
      if (requestData.lastLoggedAt) {
        logDate = requestData.lastLoggedAt.toDate();
      } else return "-";
    }

    if (logDate != null) {
      return moment(logDate).format("DD/MM/YYYY");
    }
  };

  return (
    <section className="bg-light d-flex flex-column min-vh-100 pt-5">
      <div className="container pb-5 pt-5">
        <div className="card p-lg-5">
          <div className="row">
            <div className="col-md-12">
              <h2 className="mb-4">Request Status</h2>
            </div>
          </div>
          <Accordion defaultActiveKey="0">
            {requests.map((request, index) => (
              <Card key={request.id}>
                <Card.Header style={{ padding: 0 }}>
                  <Accordion.Toggle
                    as={Button}
                    variant="light"
                    eventKey={index.toString()}
                    className="pb-3 pl-4 pr-4 pt-3 w-100"
                    // style={{ padding: "0.75rem 1.25rem" }}
                  >
                    <div className="row w-100">
                      <div className="col-md-5 text-left">
                        Request ID:{" "}
                        <b style={{ userSelect: "text" }}>{request.id}</b>
                      </div>
                      {/* <div className="col-md-3 text-left">
                      Raised On:{" "}
                      {moment(request.data.createdAt.toDate()).format(
                        "Do MMMM YYYY"
                      )}
                    </div> */}
                      <div className="col-md-3 text-left">
                        Type: <b>{request.data.serviceType}</b>
                      </div>
                      <div className="col-md-4 text-left">
                        Status: <b>{request.data.status}</b>
                      </div>
                    </div>
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey={index.toString()}>
                  <Card.Body style={{ padding: 0 }}>
                    <table className="table">
                      <thead className="text-secondary">
                        <tr>
                          <th scope="col">Date</th>
                          <th scope="col">Event</th>
                          <th scope="col">Message</th>
                          <th scope="col">Action By</th>
                        </tr>
                      </thead>
                      <tbody>
                        {request.data.logs.map((log, index) => (
                          <tr style={{ width: "100%" }} key={index}>
                            <td scope="row" style={{ width: "15%" }}>
                              {getLogDate(request.data, index)}
                            </td>
                            <td style={{ width: "15%" }}>{log.event}</td>
                            <td
                              style={{ width: "55%", whiteSpace: "pre-wrap" }}
                            >
                              {log.message}
                            </td>
                            <td style={{ width: "15%" }}>{log.user}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
