import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "antd/dist/antd.css";
import { Card, Avatar, Button, Divider, Modal } from "antd";
import getSingleReportApi from "../api/getSingleReportApi";
import reverseCounterApi from "../api/reverseCounterApi";

const ReportBack = (props) => {
  const { reportId } = useParams();
  const [repData, setRepData] = useState(null);
  const [counterMsg, setCounterMsg] = useState("");
  useEffect(() => {
    getSingleReportApi(reportId).then((result) => {
      if (result) {
        setRepData(result);
      }
    });
  }, []);
  const reverseCounter = (userId) => {
    console.log("id here ", userId);
    reverseCounterApi(userId).then((result) => {
      if (result.message === "decrease")
        setCounterMsg("Report counter has been decreased by one");
    });
  };
  return (
    <div  className='padding' >
      {" "}
      {repData != null ? (
        <div className='reportback-div'>
          <div className="">
            <h4>report type:{repData.report_type}</h4>
            <br />
            <h4>report details:{repData.report_details}</h4>
            <br />
          </div>

          <div>
            <Button
            className="dash-btn"
              type={"primary"}
              onClick={() => {
                reverseCounter(repData.reported_On);
              }}
            >
              reverse report counter
            </Button>
            <Button className="margin_left dash-btn" type={"primary"}>keep report</Button>
          </div>
          <br />
          <div>{counterMsg != "" ? <p>{counterMsg}</p> : ""}</div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
export default ReportBack;
