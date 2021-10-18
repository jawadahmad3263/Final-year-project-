import React, { useState, useEffect } from "react";
import { Avatar, Button, Modal } from "antd";
import getUserOfReportApi from "../api/getUserOfReportsApi";
const ReportList = ({ reports, loading }) => {
  const [repBy, setRepBy] = useState();
  const [repByModal, setRepByModal] = useState(false);
  const [repOn, setRepOn] = useState();
  const [repOnModal, setRepOnModal] = useState(false);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  const reportedOn = (id) => {
    getUserOfReportApi(id).then((result) => {
      setRepOn(result);
      setRepOnModal(true);
    });
  };

  const reportedBy = (id) => {
    getUserOfReportApi(id).then((result) => {
      setRepBy(result);
      setRepByModal(true);
    });
  };
  const handleOk = () => {
    setRepByModal(false);
    setRepOnModal(false);
  };
  const handleCancel = () => {
    setRepByModal(false);
    setRepOnModal(false);
  };

  return (
    <div>
      <ul className="list-group mb-4">
        {reports.map((report) => (
          <li key={report._id} className="list-group-item">
            <div className="">
              <div className="d-flex">
                <div className="white"> Report Type:</div>{" "}
                <div className="red"> {report.report_type}</div>
              </div>

              <br />
              <div className="white">
                Report Detail
                <br />
                <textarea
                  cols="40"
                  style={{ border: "none", overflow: "auto", color: "black" }}
                >
                  {report.report_details}
                </textarea>
              </div>
            </div>

            <div className="d-flex justify-content">
              <div style={{ paddingLeft: "18px" }}>
                <Button
                  onClick={() => {
                    reportedOn(report.reported_On);
                  }}
                >
                  reported_On
                </Button>
              </div>

              <div style={{ paddingLeft: "18px" }}>
                <Button
                  onClick={() => {
                    reportedBy(report.reported_by);
                  }}
                >
                  reported_By
                </Button>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <div>
        <Modal
          title="Basic Modal"
          visible={repByModal}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          {repBy != null ? (
            <div>
              <div className="d-flex">
                <div>
                  {" "}
                  <Avatar
                    src={repBy.image}
                    size={{
                      xs: 34,
                      sm: 40,
                      md: 50,
                      lg: 64,
                      xl: 80,
                      xxl: 100,
                    }}
                  />
                </div>
                <div className="white data">
                  <p>{repBy.name}</p>
                  <p>{repBy.email}</p>
                  <p>{repBy.phone}</p>
                </div>
              </div>
            </div>
          ) : (
            "loading"
          )}
        </Modal>
      </div>
      <div>
        <Modal
          title="Basic Modal"
          visible={repOnModal}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          {repOn != null ? (
            <div>
              <div className="d-flex">
                <div>
                  {" "}
                  <Avatar
                    src={repOn.image}
                    size={{
                      xs: 34,
                      sm: 40,
                      md: 50,
                      lg: 64,
                      xl: 80,
                      xxl: 100,
                    }}
                  />
                </div>
                <div className="white data">
                  <p>{repOn.name}</p>
                  <p>{repOn.email}</p>
                  <p>{repOn.phone}</p>
                </div>
              </div>
            </div>
          ) : (
            "loading"
          )}
        </Modal>
      </div>
    </div>
  );
};

export default ReportList;
