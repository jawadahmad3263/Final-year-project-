import React, { useState, useEffect } from "react";
import "../assets/style/rideHistory.css";
import "antd/dist/antd.css";
import RiderInfoApi from "../../FindRide/api/RiderInfoApi";
import {
  Card,
  Avatar,
  Button,
  Divider,
  Modal,
  Radio,
  Rate,
  Checkbox,
} from "antd";
import RideCardVehicalApi from "../../FindRide/api/RideCardVehicalApi";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
  AimOutlined,
  FrownOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { CarOutlined } from "@ant-design/icons";
import reviewApi from "../api/reviewApi";
import checkReviewApi from "../api/checkReviewApi";
import checkReportApi from "../api/checkReportApi";
import reportApi from "../api/reportApi";
const { Meta } = Card;
const RideHistoryCard = (props) => {
  
  const [visible, setVisible] = useState(false);
  const [reviewShow, setReviewShow] = useState(false);
  const [reportShow, setReportShow] = useState(false);
  const [starValue, setStarValue] = useState(3);
  const [riderStar, setRiderStar] = useState(3);
  const [riderInfo, setRiderInfo] = useState([]);
  const [riderVehical, setRiderVehical] = useState([]);
  const [checkReviewMessage, setcheckReviewMessage] = useState("pending");
  const [checkReportMessage, setCheckReportMessage] = useState("pending");
  const [comment, setComment] = useState("");
  const [reportDetail, setReportDetail] = useState("");
  const [reportType, setReportType] = useState("");
  
  const desc = ["terrible", "bad", "normal", "good", "Very good"];
  var rider_id = props.data.rider_id;
  var car_id = props.data.car_id;
  var post_id = props.data._id;
  var key = props.idx;
  
  useEffect(() => {
    RiderInfoApi(rider_id).then((result) => {
      console.log("rider info ", result);
      setRiderInfo(result);
    });
    checkReviewApi(post_id).then((result) => {
      console.log("Message", result.message);
      setcheckReviewMessage(result.message);
    });
    checkReportApi(post_id).then((result) => {
    console.log("Message", result.message);
    setCheckReportMessage(result.message);
    });
  }, []);
  const showModal = () => {
    setVisible(true);
  };
  const handleOk = () => {
    setVisible(false);
  };
  const showReviewModal = () => {
    setReviewShow(true);
  };

  const showReportModal = () => {
    setReportShow(true);
  };
  const ReportOk = () => {
    reportApi(reportData).then((result) => {
      console.log("result in report", result);
    });
    setReportShow(false);
  };
  const handleChange = (starValue) => {
    setStarValue(starValue);
  };

  const handleRiderStar = (riderStar) => {
    setRiderStar(riderStar);
  };
  console.log("star value", riderStar);
  const gridStyle = {
    width: "33.33%",
    textAlign: "center",
  };
 
  const getVehical = (car_id) => {
    RideCardVehicalApi(car_id).then((result) => {
      setRiderVehical(result);
      console.log("rider vehical", result);
      setVisible(true);
    });
  };
  const data = {
    post_id: props.data._id,
    review_number: riderStar,
    comment: comment,
  };
  const reportData = {
    post_id: props.data._id,
    reported_id:props.data.rider_id,
    report_details: reportDetail,
    report_type: reportType,
  };
  const ReviewOk = () => {
    reviewApi(data).then((result) => {
      console.log("result in review", result);
    });
    setReviewShow(false);
  };
  console.log("data for api", data);
  let status = props.data.post_status;
 
  //converting time
  var timeString = props.data.pick_up_time.slice(0, 9);
  var H = +timeString.substr(0, 2);
  var h = H % 12 || 12;
  var ampm = H < 12 || H === 24 ? "AM" : "PM";
  timeString = h + timeString.substr(2, 3) + ampm;
  return (
    <div className={"rideCard"}>
      <Card
        hoverable={true}
        className='ride-card-card'
      >
        <Meta
          avatar={<Avatar src={riderInfo.image} />}
          title={riderInfo.name}
          description={
            <div className={"rideInfo"}>
              <p>
                Ride Status:<span>{props.data.post_status}</span>
              </p>
              <p style={{ float: "left" }}>
                From:<span>{props.data.pick_up_city}</span>
              </p>
              <p style={{ float: "left" }}>
                To:<span>{props.data.drop_off_city}</span>
              </p>
              <p style={{ float: "left" }}>
                pick up location:<span>{props.data.pick_up_point}</span>
              </p>
              <p style={{ float: "left" }}>
                Date:<span>{props.data.pick_up_date.slice(0,15)}</span>
              </p>
              <p style={{ float: "left" }}>
                Time:<span>{timeString}</span>
              </p>
            </div>
          }
        />
        <Card.Grid style={gridStyle} className="width-37">
          {" "}
          <>
            <Button
            className='ride-btn'
              type="primary"
              onClick={(key) => getVehical(car_id)}
              icon={<CarOutlined />}
            >
              Vehical 
            </Button>
          
            <Modal
              visible={visible}
              title="Vehical Info"
              onCancel={handleOk}
              footer={[
                <Button key="submit" type="primary" onClick={handleOk }  className='ride-btn'>
                  OK
                </Button>,
              ]}
            >
              <div style={{ width: "500px", height: "180px" }}>
                <div style={{ float: "left", marginTop: "1px" }}>
                  <img
                    src={riderVehical.car_image}
                    style={{ width: "180px", height: "160px" }}
                    alt="Vehical"
                  />
                </div>
                <div className="white"
                  style={{ marginLeft: "5px", float: "left", marginTop: "4px" }}
                >
                  <p>Car:{riderVehical.car_type}</p>
                  <p>Color:{riderVehical.car_color}</p>
                  <p>Number:{riderVehical.car_number}</p>
                </div>
              </div>

            </Modal>
          </>
        </Card.Grid>
        <Card.Grid style={gridStyle} className="width-31" >
          {status != "active" ? (
            <div >
              {checkReviewMessage === "pending" ? (
                <Button type={"primary"} onClick={showReviewModal} >
                  Review
                </Button>
              ) : (
                <Button type="primary" disabled >
                  Reviewed
                </Button>
              )}
            </div>
          ) : (
            ""
          )}
          <Modal
            visible={reviewShow}
            title="Review"
            onCancel={ReviewOk}
            footer={[
              <Button key="submit" type="primary" onClick={ReviewOk}  className='ride-btn' >
                Done
              </Button>,
            ]}
          >
            <div>
              <div style={{ marginBottom: "25%" }}>
                <h6  className='white'>
                  Let us know about your experience by giving a honest review
                  <br />
                </h6>
                <div>
                  <img
                    src={riderInfo.image}
                    alt="rider Image"
                    width="80"
                    height="80"
                    style={{ borderRadius: "50%" }}
                  />
                </div>
                <div
                // style={{
                //   float: "left",
                //   paddingTop: "18px",
                //   paddingLeft: "28px",
                // }}
                className='white'
                >
                  {" "}
                  Rider:<span>{riderInfo.name}</span>
                  <br />
                  <span>
                    <Rate
                      tooltips={desc}
                      onChange={handleRiderStar}
                      value={riderStar}
                    />
                    {starValue ? (
                      <span className="ant-rate-text">
                        {desc[riderStar - 1]}
                      </span>
                    ) : (
                      ""
                    )}
                  </span>
                  <br />
                  <label  className='white'>Comment:</label>
                  <input className='black'
                    type={'textarea'}
                    onChange={(event) => setComment(event.target.value)}
                  ></input>
                </div>
              </div>
            </div>
          </Modal>
        </Card.Grid>
        <Card.Grid style={gridStyle} className="width-30" >
          {status != "active" ? (
            <div>{checkReportMessage === "pending" ? (
              <Button type={"danger"} onClick={showReportModal} >
                Report
              </Button>):(
                <Button type="primary" disabled>
                  Reported
                </Button>
              )}
            </div>
          ) : (
            ""
          )}
          <Modal
            visible={reportShow}
            title="Report"
            onCancel={ReportOk}
            footer={[
              <Button key="submit" type="danger" onClick={ReportOk}>
                Submit report
              </Button>,
            ]}
          >
            <div>
              <div className={"reportType white"}>
                <h5 className={"reportType white"}>
                  
                   Please select type of your report
                </h5>
                <Radio.Group
                  required={true}
                  value={reportType}
                  onChange={(event) => setReportType(event.target.value)} 
                >
                  <Radio value={"Harassment"} className="white">Harassment</Radio>
                  <Radio value={"Voilence"} className="white">Voilence</Radio>
                  <Radio value={"Hate Speech"} className="white">Hate Speech</Radio>
                  <Radio value={"Teririsom"} className="white">Teririsom</Radio>
                  <Radio value={"Wrong Drive"} className="white">Wrong Drive</Radio>
                  <Radio value={"incomplete trip"} className="white">incomplete trip</Radio>
                  <Radio value={"Something Else"}className="white">Something Else</Radio>
                </Radio.Group>
              </div>
              <hr />
              <div>
                <h5 className={"reportType white"}> Describe report in few lines:</h5>
                <textarea
                  rows="5"
                  cols="40"
                  style={{ resize: "none" }}
                  onChange={(event) => setReportDetail(event.target.value)}
                ></textarea>
              </div>
             
            </div>
          </Modal>
        </Card.Grid>
      </Card>
      <hr className='ride-hrr'></hr>
    </div>
  );
};
export default RideHistoryCard;

