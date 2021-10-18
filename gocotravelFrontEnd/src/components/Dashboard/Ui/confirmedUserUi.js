import React, { useState, useEffect } from "react";
import ReactDom from "react-dom";
import "antd/dist/antd.css";
import { ContextOne } from "../../contexts/contexts";
import { Input, Button, Carousel, Card, Divider, Result, Modal, Radio, } from "antd";
import { Typography } from "antd";
import getConfirmUserApi from "../api/getConfirmUserApi";
import {AimOutlined} from "@ant-design/icons";
import reportUserApi from "../api/ReportUserApi";
import checkUserReportApi from "../api/CheckUserReportApi";
const { Title } = Typography;
const carousalStyle = {
  height: "440px",
  color: "#fff",
  lineHeight: "10px",
  background: "#364d",
  padding: "10px",
};

const ConfirmedUserUi = (props) => {
  let { state, dispatch } = React.useContext(ContextOne);
  const { ConfirmUser, btnn ,postId } = props;
  console.log("confirm user", ConfirmUser);
  const [CUser, setCUser] = useState();
  const [reportDetail, setReportDetail] = useState("");
  const [reportType, setReportType] = useState("");
  const [reportShow, setReportShow] = useState(false);
  const [userInfoShow, setUserInfoShow] = useState(false);
  const [checkReportMessage, setCheckReportMessage] = useState("pending");
  const crData = {
    user_id:ConfirmUser,
    post_id:postId
  }
  useEffect(() => {
    getConfirmUserApi(ConfirmUser).then((result) => {
      if (result) {
        setCUser(result);
      }
    });
    if(btnn==="report"){
      checkUserReportApi(crData).then((result)=>{
        setCheckReportMessage(result.message);
      })
    }
  }, []);
  const showReportModal = () => {
    setReportShow(true);
  };
  const setuserinfo = () => {
    setUserInfoShow(true)
  };
  const ReportOk = () => {
    reportUserApi(reportData).then((result) => {
      console.log("result in report", result);
    });
    setReportShow(false);
    setUserInfoShow(false);
  };

  const reportData = {
    post_id:postId,
    reported_id:ConfirmUser,
    report_details: reportDetail,
    report_type: reportType,
  };
  
  return (
    <div className='confirm-user-list'>
      {CUser != null ? (
        <Card
          hoverable
          style={{ maxWidth:170 }}
          cover={<img alt="example" src={CUser.image} />}
        >
          <b>
            <p>{CUser.name}</p>
          </b>
          {btnn === "" ? (
            <div>
            <Button className='dash-btn'
              type={"primary"}
              style={{ width: "100%", marginTop: "4px" }}
              onClick={setuserinfo}
            >
              Contact
            </Button>
            <Modal
            visible={userInfoShow}
            title="User Contact"
            onCancel={ReportOk}
            footer={[
              <Button  className='dash-btn' key="submit" type="primary" onClick={ReportOk}>
                OK
              </Button>,
            ]}
          >
            <div>
              <div className={"reportType w1"}>
                <h6 className='w1'>
                 
                  {CUser.name} Contact Details
                </h6>
                Email: {CUser.email}<br />
                Phone: {CUser.phone}<br />
                Address: {CUser.address}<br />
                
              </div>
             
            </div>
          </Modal>
            </div>
          ) : (
            <div>
              {checkReportMessage==="pending"?
            <Button className='dash-btn'
              type={"primary"}
              style={{ width: "100%", marginTop: "4px" }}
              onClick={showReportModal}
            >
              Report
            </Button>:
             <Button className='dash-btn'
             type={"primary"}
             style={{ width: "100%", marginTop: "4px" }}
             disabled
           >
             Reported
          </Button>}</div>
          )}
        </Card>
      ) : (
        ""
      )}
      <div>
      <Modal
            visible={reportShow}
            title="Report"
            onCancel={ReportOk}
            footer={[
              <Button  className='dash-btn' key="submit" type="primary" onClick={ReportOk}>
                Submit report
              </Button>,
            ]}
          >
            <div>
              <div className={"reportType w1"}>
                <h6 className='w1'>
                 
                  Please select type of your report
                </h6>
                <Radio.Group
                  required={true}
                  value={reportType}
                  onChange={(event) => setReportType(event.target.value)}
                >
                  <Radio value={"Harassment"} className='w1'>Harassment</Radio>
                  <Radio value={"Voilence"} className='w1'>Voilence</Radio>
                  <Radio value={"Hate Speech"} className='w1'>Hate Speech</Radio>
                  <Radio value={"Teririsom"} className='w1'>Teririsom</Radio>
                  <Radio value={"left ride"}className='w1'>Left Ride</Radio>
                  <Radio value={"Something Else"} className='w1'>Something Else</Radio>
                </Radio.Group>
              </div>
              <hr />
              <div>
                <h6 className='w1'>Describe report in few lines:</h6>
                <textarea
                  rows="5"
                  cols="40"
                  style={{ resize: "none" }}
                  onChange={(event) => setReportDetail(event.target.value)}
                ></textarea>
              </div>
             
            </div>
          </Modal>
        
      </div>
    </div>
  );
};

export default ConfirmedUserUi;
