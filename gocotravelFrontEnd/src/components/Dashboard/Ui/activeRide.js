import React, { useState, useEffect } from "react";
import Carousel from "nuka-carousel";

import "../assets/dashboard.css";
import { RollbackOutlined, DownOutlined, UpOutlined } from "@ant-design/icons";
import {
  Avatar,
  Rate,
  Button,
  Card,
  Tooltip,
  Form,
  Input,
  Typography,
  InputNumber,
  DatePicker,
  TimePicker,
  Switch,
} from "antd";
import ActiveRideApi from "../api/ActiveRideApi";
import RideCancelApi from "../api/RideCancelApi";
import RideStartApi from "../api/RideStartApi";
import FinishRideApi from "../api/FinishRideApi";
import EditRideApi from "../api/EditRideApi";
import EditRideUi from "../Ui/EditRideUi";
import RequestedUserUi from "./requestedUserUi";
import ConfirmedUserUi from "./confirmedUserUi";
import { ContextOne } from "../../contexts/contexts";

const { Meta } = Card;
const { Title } = Typography;

const ActiveRide = (props) => {
  let { state, dispatch } = React.useContext(ContextOne);
  const [actionMessage, setActionMessage] = useState("");
  const [rideMessage, setRideMessage] = useState("");
  useEffect(() => {
    ActiveRideApi().then((result) => {
      if (result.success === true) {
        dispatch({ type: "activePost", payload: result.post });
        console.log("yeahaa", result.post);
        setRideMessage(result.message);

        if (result.post.customer_array.length > 0) setActionMessage("close");
        else setActionMessage("open");
      }
    });
  }, []);

  const {} = props;
  //converting 24 hours to 12 hours___________________
  if (state.activePost != null) {
    var timeString = state.activePost.pick_up_time.slice(0, 9);
    var H = +timeString.substr(0, 2);
    var h = H % 12 || 12;
    var ampm = H < 12 || H === 24 ? "AM" : "PM";
    timeString = h + timeString.substr(2, 3) + ampm;
  }
  //___________________________________________________
  const [editRide, setEditRide] = useState(false);
  const [blabel, setBlabel] = useState("");
  const [showRUser, setShowRUser] = useState(false);
  const [showCUser, setShowCUser] = useState(false);

  const carousalStyle = {
    height: "440px",
    color: "#fff",
    lineHeight: "10px",
    background: "#364d",
    padding: "10px",
  };
  const EditRide = () => {
    if (actionMessage === "open") setEditRide(true);
    else
      setBlabel(
        "You can not edit ride now if any important info try inform your co-traveller "
      );
  };
  const CancelRide = (post_id) => {
    if (actionMessage === "open") {
      RideCancelApi(post_id).then((result) => {
        ActiveRideApi().then((result) => {
          dispatch({ type: "activePost", payload: result.post });
        });
        setBlabel(result.message);
      });
    } else
      setBlabel(
        "You can not Cancell or delete your ride now  if serious problem than contact ur co travller to avail another ride but they can report you"
      );
  };
  const FinishRide = (post_id) => {
    if (state.activePost.post_status === "start") {
      FinishRideApi(post_id).then((result) => {
        ActiveRideApi().then((result) => {
          dispatch({ type: "activePost", payload: result.post });
          setRideMessage(result.message);
        });
        setBlabel(result.message);
      });
    } else {
      setBlabel("first start your ride complete it then finish it");
    }
  };
  const StartRide = (post_id) => {
    RideStartApi(post_id).then((result) => {
      if (result.success === true)
        ActiveRideApi().then((result) => {
          dispatch({ type: "activePost", payload: result.post });
        });
      setBlabel(result.message);
    });
  };
  console.log("action message", actionMessage);
  const layout = {
    wrapperCol: {
      span: 25,
    },
  };
  const tailLayout = {
    wrapperCol: {
      offset: 3,
      span: 16,
    },
  };

  return (
    <div>
      <div>
        {editRide === true ? (
          <div>
            {<EditRideUi setEditRide={setEditRide} />}

            <div>{blabel}</div>
            <Button
              type={"primary"}
              onClick={() => setEditRide(false)}
              className="dash-btn"
            >
              <RollbackOutlined />
            </Button>
          </div>
        ) : (
          <div className="pp">
            {rideMessage != "active post" ? (
              <div className="pp">
                {rideMessage === "availed post" ? (
                  <div className="active-ride-div">
                    <h1>Availed Ride</h1>
                    <hr className="hhr" style={{ color: "white" }} />
                    <p>
                      Destination:
                      <span>
                        {state.activePost.pick_up_city} TO{" "}
                        {state.activePost.drop_off_city}
                      </span>
                    </p>
                    <p>
                      Date:
                      <Tooltip title="Year Month Date">
                        <span>
                          {" "}
                          {state.activePost.pick_up_date.slice(0, 15)}
                        </span>
                      </Tooltip>
                    </p>
                    <p>
                      Pick_up_point:
                      <span> {state.activePost.pick_up_point}</span>
                    </p>
                    <p>
                      Pick_up_Time:<span> {timeString}</span>
                    </p>
                    <p>
                      Total Seats:<span> {state.activePost.total_seats}</span>
                    </p>
                    <p>
                      Available Seats:
                      <span> {state.activePost.available_seats}</span>
          
                    </p>
                    <p className="pp">
                      Status:
                      <span className="pp">
                        {" "}
                        {state.activePost.post_status}
                      </span>
                    </p>
                  </div>
                ) : (
                  <div className="pp">
                    {blabel}
                    <h5 className="pp">No active or Availed ride</h5>
                  </div>
                )}
              </div>
            ) : (
              <div>
                {blabel === "" ? (
                  <div>
                    <div>
                      <h5 className="pp">Active Ride</h5>
                    </div>
                    <hr className="hhr" />
                    <div className={"ActiveRide"}>
                      <div>
                        {showRUser === false ? (
                          <Button
                            type={"primary"}
                            onClick={() => setShowRUser(true)}
                            style={{ marginRight: "5px" }}
                            className="dash-btn"
                          >
                            Show requests
                            <DownOutlined />
                          </Button>
                        ) : (
                          <Button
                            type={"primary"}
                            onClick={() => setShowRUser(false)}
                            style={{ marginRight: "5px" }}
                            className="dash-btn"
                          >
                            <UpOutlined />
                          </Button>
                        )}
                        {/* </div>
                  <div> */}
                        {showCUser === false ? (
                          <Button
                            type={"primary"}
                            onClick={() => setShowCUser(true)}
                            style={{ marginRight: "5px" }}
                            className="dash-btn margin-top"
                          >
                            Confirm Users
                            <DownOutlined />
                          </Button>
                        ) : (
                          <Button
                            type={"primary"}
                            onClick={() => setShowCUser(false)}
                            style={{ marginRight: "5px" }}
                            className="dash-btn"
                          >
                            <UpOutlined />
                          </Button>
                        )}
                      </div>

                      <div>
                        {showRUser === true ? (
                          <div>
                            <p>Requested Users</p>
                            {state.activePost.requestedUser.length != 0 ? (
                              <div className="req-user">
                                {state.activePost.requestedUser.map(function (
                                  data,
                                  idx
                                ) {
                                  return (
                                    <RequestedUserUi RequestedUser={data} />
                                  );
                                })}
                              </div>
                            ) : (
                              <p>Zero User request</p>
                            )}
                          </div>
                        ) : (
                          ""
                        )}
                      </div>

                      <div>
                        {showCUser === true ? (
                          <div>
                            <p>Confirm Users:</p>
                            {state.activePost.customer_array.length != 0 ? (
                              
                              <div className="req-user">
                                {state.activePost.customer_array.map(function (
                                  data,
                                  idx
                                ) {
                                  return (
                                    <ConfirmedUserUi
                                      ConfirmUser={data}
                                      btnn={""}
                                    />
                                  );
                                })}
                              </div>
                            ) : (
                              <p>No user is confirmed yet</p>
                            )}
                          </div>
                        ) : (
                          ""
                        )}
                      </div>

                      <hr className="hhr" />

                      <h5 className="pp">Ride Info</h5>
                      <hr className="hhr" />
                      <p className="pp">
                        Destination:
                        <span className="pp">
                          {state.activePost.pick_up_city} TO{" "}
                          {state.activePost.drop_off_city}
                        </span>
                      </p>
                      <p>
                        Pick_up_point:
                        <span> {state.activePost.pick_up_point}</span>
                      </p>
                      <p>
                        Date:
                        <Tooltip title="Year Month Date">
                          <span>
                            {" "}
                            {state.activePost.pick_up_date.slice(0, 15)}
                          </span>
                        </Tooltip>
                      </p>
                      <p>
                        Pick_up_Time:<span> {timeString}</span>
                      </p>
                      <p>
                        Total Seats:<span> {state.activePost.total_seats}</span>
                      </p>
                      <p>
                        Available Seats:
                        <span> {state.activePost.available_seats}</span>
                      </p>
                      <p>
                        Status:<span> {state.activePost.post_status}</span>
                      </p>
                      <div>
                        {" "}
                        {state.activePost.post_status != "complete" ? (
                          <div>
                            {state.activePost.post_status != "start" ? (
                              <>
                                <Button
                                  type={"primary"}
                                  onClick={EditRide}
                                  style={{ marginRight: "5px" }}
                                  className="dash-btn"
                                >
                                  Edit Ride Info
                                </Button>
                                <Button
                                  type={"danger"}
                                  onClick={() =>
                                    CancelRide(state.activePost._id)
                                  }
                                  style={{ marginRight: "5px" }}
                                  className="dash-btn"
                                >
                                  Cancel Ride
                                </Button>
                                <Button
                                  type={"primary"}
                                  onClick={() =>
                                    StartRide(state.activePost._id)
                                  }
                                  style={{ marginRight: "5px" }}
                                  className="dash-btn margin-top"
                                >
                                  Start Ride
                                </Button>
                              </>
                            ) : (
                              <Button
                                type={"primary"}
                                onClick={() => FinishRide(state.activePost._id)}
                                style={{ marginRight: "5px" }}
                                className="dash-btn"
                              >
                                Finish Ride
                              </Button>
                            )}
                            <div>{blabel}</div>
                          </div>
                        ) : (
                          ""
                        )}
                      </div>
                    </div>
                  </div>
                ) : (
                  <div>{blabel}</div>
                )}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
export default ActiveRide;
