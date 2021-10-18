import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { ContextOne } from "../../contexts/contexts";
import getSingleUserReportApi from "../api/getSingleUserReportsApi";
import { Modal } from "antd";
import "../assets/reportTable.css";
import mailAboutReportApi from "../api/mailAboutReportApi";
const ReportUi = (props) => {
  const [reportList, setReportList] = useState([]);
  const [mailModel, setMailModel] = useState(false);
  const [mailText, setMailText] = useState("");
  const [repId, setRepId] = useState(null);
  let { state, dispatch } = React.useContext(ContextOne);
  useEffect(() => {
    getSingleUserReportApi().then((result) => {
      if (result) setReportList(result);
    });
  }, []);
  console.log(reportList);
  const showReportModal = (rId) => {
    console.log(rId, "Suhaib");
    setRepId(rId);
    setMailModel(true);
  };
  const mailData = {
    mailText: mailText,
    report_id: repId,
  };
  console.log("maildata", mailData);

  const CancelOk = () => {
    setMailModel(false);
  };
  const MailOk = (data) => {
    mailAboutReportApi(data).then((result) => {
      console.log("yes");
    });
    setMailModel(false);
  };
  return (
    <div>
      <Modal
        visible={mailModel}
        title="Send Mail to Admin about the report"
        onCancel={CancelOk}
        footer={[
          <Button
            className="dash-btn"
            key="submit"
            type="primary"
            onClick={() => MailOk(mailData)}
          >
            Send
          </Button>,
        ]}
      >
        <div>
          <div>
            <p className="w1">Write detailed message about the report</p>
            <textarea
              rows="5"
              cols="40"
              style={{ resize: "none" }}
              onChange={(event) => setMailText(event.target.value)}
            ></textarea>
          </div>
        </div>
      </Modal>
      <div>
        <p className="w1">
          You are reported <span> {state.userData.reportcounter} </span> times
          <br />
          !Be carefull if you are reported 20 times your ID will be blocked
          <br />
          Always give your best and be discipline
        </p>
      </div>

      <div>
        {reportList.length != 0 ? (
          <div className="w2">
            Reports List
            <table className={"table font-size20"}>
              <tr>
                <th>Report Type</th>
                <th>Report Detail</th>
                <th>Reported at</th>
                <th>Contact Admin</th>
              </tr>
            </table>
            {reportList.map(function (data, idx) {
              console.log(data, idx, "babar");
              return (
                <div>
                  <table className={"table"}>
                    <tr className={" font-size20"}>
                      <td>{data.report_type}</td>
                      <td>
                        <textarea style={{ width: "7%;", border: "none" }}>
                          {data.report_details}
                        </textarea>
                      </td>
                      <td>{data.created_at.slice(0, 10)}</td>
                      <td>
                        <Button
                          className="dash-btn"
                          style={{ marginRight: "30px" }}
                          type={"primary"}
                          onClick={() => showReportModal(data._id)}
                        >
                          Send mail
                        </Button>
                      </td>
                    </tr>
                  </table>
                </div>
              );
            })}
          </div>
        ) : (
          <div>
            <h3>"Good..No one reported you yet"</h3>
          </div>
        )}
      </div>
    </div>
  );
};
export default ReportUi;
