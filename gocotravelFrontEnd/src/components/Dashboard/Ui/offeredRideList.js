import React from "react";
import { Avatar, Button, Tooltip } from "antd";
import ConfirmedUserUi from "./confirmedUserUi";
const OfferedRideList = ({ offeredride, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }
  //converting 24 hours to 12 hours___________________
  const timeChange = (time) => {
   
    var timeString = time.slice(0, 9);
    var H = +timeString.substr(0, 2);
    var h = H % 12 || 12;
    var ampm = H < 12 || H === 24 ? "AM" : "PM";
    timeString = h + timeString.substr(2, 3) + ampm;
    return timeString;
  };
  //___________________________________________________
  return (
    <div className="oferRideMain">
      <ul className="list-group mb-4">
        {offeredride.map((offeredRide) => (
          <li key={offeredRide._id} className="list-group-item">
            <div className="bg-oferRide">
              <div
                style={{
                  border: "1px solid gray",
                  marginTop: "5px",
                  padding: "5px",
                 
                }}
              >
                <div>
                  <p>
                    Destination:
                    <span>
                      {offeredRide.pick_up_city} TO {offeredRide.drop_off_city}
                    </span>
                  </p>
                  <p>
                    Pick_up_point:<span>{offeredRide.pick_up_point} </span>
                  </p>
                  <p>
                    Date:
                    <Tooltip title="Year Month Date">
                      <span>{offeredRide.pick_up_date.slice(0, 15)} </span>
                    </Tooltip>
                  </p>
                  <p>
                    Pick_up_Time:
                    <span>{timeChange(offeredRide.pick_up_time)} </span>
                  </p>
                  <p>
                    Total Seats:<span>{offeredRide.total_seats}</span>
                  </p>

                  <p>
                    Status:<span>{offeredRide.post_status}</span>
                  </p>
                </div>
                <div>
                  Co-Traveller
                  <div className="co-traveller">
                    {offeredRide.customer_array.map(function (data, idx) {
                      return (
                        <ConfirmedUserUi
                          ConfirmUser={data}
                          btnn={"report"}
                          postId={offeredRide._id}
                        />
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OfferedRideList;
