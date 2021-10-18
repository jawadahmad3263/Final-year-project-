import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { ContextOne } from "../../contexts/contexts";
import getSingleUserReportApi from "../api/getSingleUserReportsApi";
import {Modal} from "antd";
import "../assets/reportTable.css"
import mailAboutReportApi from "../api/mailAboutReportApi";
const SendMailModel = (props) => {
  const {repId}=props;
  const [mailModel, setMailModel] = useState(true);
  const [mailText, setMailText] = useState("");
  let { state, dispatch } = React.useContext(ContextOne);
  const showMailModal = () => {
    setMailModel(true);
  };
 
  const CancelOk = () => {
    setMailModel(false);
  };
  
    const MailOk = () => {
          console.log("mailData",mailData)
       
      };
      const mailData={
          mailText:mailText,
          report_id:repId
      }
        return (
                <div>
                  {/* <Modal
            visible={showMailModal}
            title="Send Mail to Admin about the report"
            onCancel={CancelOk}
            footer={[
              <Button key="submit" type="primary" onClick={MailOk()}>
                Send
              </Button>,
            ]}
          > */}
            <div>
              <div>
                <p>Write detailed message about the report</p>
                <textarea
                  rows="5"
                  cols="40"
                  style={{ resize: "none" }}
                  onChange={(event) => setMailText(event.target.value)}
                ></textarea>
              </div>
             
            </div>
        
             
    </div>
  );
};
export default SendMailModel;
