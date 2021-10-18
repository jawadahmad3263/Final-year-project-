import React, { useState, useEffect } from "react";
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
import ConfirmedUserUi from "./confirmedUserUi";
import { ContextOne } from "../../contexts/contexts";
import OfferedRideApi from "../api/offeredRideApi";

const { Meta } = Card;
const { Title } = Typography;

const OfferedRide = (props) => {
  let { state, dispatch } = React.useContext(ContextOne);
  const [offerRide, setOfferRide] = useState([]);
  useEffect(() => {
    OfferedRideApi().then((result) => {
      if (result.success === true) setOfferRide(result.post);
    });
  }, []);

  //converting 24 hours to 12 hours___________________
  const timeChange = (time) => {
    // if (state.activePost != null)
    var timeString = time.slice(0, 9);
    var H = +timeString.substr(0, 2);
    var h = H % 12 || 12;
    var ampm = H < 12 || H === 24 ? "AM" : "PM";
    timeString = h + timeString.substr(2, 3) + ampm;
    return timeString;
  };
  //___________________________________________________

  return (
    <div>
      {offerRide.length > 0 ? (
        <div>
          {" "}
          {offerRide.map(function (data, idx) {
            var postId = data._id;
            console.log("postiddd", postId);
            return (
              <div
                style={{
                  border: "1px solid gray",
                  marginTop: "5px",
                  padding: "5px",
                }}
              >
                <div>
                  <h5>Offered Ride No:{offerRide.length - idx}</h5>
                  <hr />
                  <p>
                    Destination:
                    <span>
                      {data.pick_up_city} TO {data.drop_off_city}
                    </span>
                  </p>
                  <p>
                    Pick_up_point:<span>{data.pick_up_point} </span>
                  </p>
                  <p>
                    Date:
                    <Tooltip title="Year Month Date">
                      <span>{data.pick_up_date.slice(0, 15)} </span>
                    </Tooltip>
                  </p>
                  <p>
                    Pick_up_Time:<span>{timeChange(data.pick_up_time)} </span>
                  </p>
                  <p>
                    Total Seats:<span>{data.total_seats}</span>
                  </p>

                  <p>
                    Status:<span>{data.post_status}</span>
                  </p>
                </div>
                <div>
                  <div>
                    Co-Traveller
                    {data.customer_array.map(function (data, idx) {
                      return (
                        <ConfirmedUserUi
                          ConfirmUser={data}
                          btnn={"report"}
                          postId={postId}
                        />
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div>You have zero Offered ride history</div>
      )}{" "}
    </div>
  );
};
export default OfferedRide;
