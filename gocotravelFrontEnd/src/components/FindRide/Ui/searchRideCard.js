import React, { useEffect, useState } from "react";
import "antd/dist/antd.css";
import { SearchOutlined, CarOutlined } from "@ant-design/icons";
import { Modal, Card, Rate, Avatar, Button } from "antd";
import "../assets/style/searchRide.css";
import RideCardVehicalApi from "../api/RideCardVehicalApi";
import ApplytoRideApi from "../api/ApplytoRideApi";
import RiderInfoApi from "../api/RiderInfoApi";
import CalculateStars from "../../../config/calculateStars";
const { Meta } = Card;
const SearchRideCard = ({ currentRide, loading }) => {
  const [visible, setVisible] = useState(false);
  const [riderVehical, setRiderVehical] = useState();
  const [visibleRideDetail, setVisibleRideDetal] = useState(false);
  const [rideApplyModal, setRideApplyModal] = useState(false);
  const [applyMessage, setApplyMessage] = useState("");
  const [riderInfo, setRiderInfo] = useState();
  const [stars, setStars] = useState();

  if (loading) {
    return <h2>Loading...</h2>;
  }
  const showModal = () => {};
  const showApplyModal = () => {
    setRideApplyModal(true);
  };

  const handleOk = () => {
    setVisible(false);
    setVisibleRideDetal(false);
  };

  const confirmApply = (id) => {
    console.log("id caught here is :", id);
    setRideApplyModal(false);
    ApplytoRideApi(id).then((result) => {
      setApplyMessage(result.Message);
    });
  };
  console.log("....", applyMessage);
  const cancelApply = () => {
    setRideApplyModal(false);
  };
  const gridStyle = {
    width: "33.33%",
    textAlign: "center",
  };

  const getVehical = (car_id) => {
    RideCardVehicalApi(car_id).then((result) => {
      setRiderVehical(result);
      setVisible(true);
    });
  };

  const showRider = (rider_id) => {
    RiderInfoApi(rider_id).then((result) => {
      setRiderInfo(result);
      console.log("kajas", result.reviewStars);
      setStars(CalculateStars(result.reviewStars));
    });
    setVisibleRideDetal(true);
  };

  //converting 24 hours to 12 hours___________________
  const timeChange = (time) => {
    var timeString = time.slice(0, 9);
    var H = +timeString.substr(0, 2);
    var h = H % 12 || 12;
    var ampm = H < 12 || H === 24 ? "AM" : "PM";
    timeString = h + timeString.substr(2, 3) + ampm;
    return timeString;
  };
  return (
    <ul className="list-group mb-4">
      {currentRide.map((Ride) => (
        <li key={Ride._id} className="list-group-item">
          <div className={"rideCard"}>
            <Card
              hoverable={true}
              style={{  marginTop: 15, paddingTop: 15 }}
            >
              <Meta
                description={
                  <div className={"rideInfo"}>
                    <p>
                      Ride Status:<span>{Ride.post_status}</span>
                    </p>
                    <p style={{ float: "left" }}>
                      From:<span>{Ride.pick_up_city}</span>
                    </p>
                    <p style={{ float: "left" }}>
                      To:<span>{Ride.drop_off_city}</span>
                    </p>
                    <p>
                      Pick_up_point:<span> {Ride.pick_up_point}</span>
                    </p>
                    <p style={{ float: "left" }}>
                      Date:<span>{Ride.pick_up_date.slice(0, 15)}</span>
                    </p>
                    <p style={{ float: "left" }}>
                      Time:<span>{timeChange(Ride.pick_up_time)}</span>
                    </p>
                    <p style={{ float: "left" }}>
                      Total Seats:<span>{Ride.total_seats}</span>
                    </p>
                    <p style={{ float: "left" }}>
                      Available Seats:<span>{Ride.available_seats}</span>
                    </p>
                    <p style={{ float: "left" }}>
                      Charges:<span>{Ride.charges}</span>
                    </p>

                    <p>
                      Description:<span>{Ride.description}</span>
                    </p>
                  </div>
                }
              />

              <Card.Grid style={gridStyle}>
                <>
                  <Button
                    type="primary"
                    onClick={(key) => getVehical(Ride.car_id)}
                    // icon={<CarOutlined />}
                    className="ride-btn"
                  >
                    Vehical Info
                  </Button>
                  <Modal
                    visible={visible}
                    title="Vehical Info"
                    onCancel={handleOk}
                    footer={[
                      <Button
                        key="submit"
                        type="primary"
                        onClick={handleOk}
                        className="ride-btn"
                      >
                        OK
                      </Button>,
                    ]}
                  >
                    <div>
                      {riderVehical != null ? (
                        <div style={{ width: "500px", height: "180px" }}>
                          <div style={{ float: "left", marginTop: "1px" }}>
                            <img
                              src={riderVehical.car_image}
                              style={{ width: "180px", height: "160px" }}
                              alt="Vehical"
                            />
                          </div>
                          <div
                            style={{
                              marginLeft: "5px",
                              float: "left",
                              marginTop: "4px",
                            }}
                            className="white"
                          >
                            <p>Car:{riderVehical.car_type}</p>
                            <p>Color:{riderVehical.car_color}</p>
                            <p>Number:{riderVehical.car_number}</p>
                          </div>
                        </div>
                      ) : (
                        ""
                      )}
                    </div>
                  </Modal>
                </>
              </Card.Grid>

              <Card.Grid style={gridStyle}>
                <>
                  <Button
                    type="primary"
                    className="ride-btn"
                    onClick={(key) => showRider(Ride.rider_id)}
                    className="ride-btn"
                  >
                    Rider Info
                  </Button>
                  <Modal
                    visible={visibleRideDetail}
                    title="Rider Info"
                    onCancel={handleOk}
                    footer={[
                      <Button
                        type="primary"
                        onClick={handleOk}
                        className="ride-btn"
                      >
                        OK
                      </Button>,
                    ]}
                  >
                    <div>
                      {riderInfo != null ? (
                        <div style={{ width: "500px", height: "180px" }}>
                          <div style={{ float: "left", marginTop: "1px" }}>
                            <img
                              src={riderInfo.image}
                              style={{ width: "180px", height: "160px" }}
                            />
                            <div>
                              Rating:{" "}
                              <Rate
                                style={{ marginLeft: "44px" }}
                                value={stars}
                              />
                            </div>
                          </div>

                          <div style={{ float: "left", marginTop: "1px" }} className="white">
                            <p>Rider:{riderInfo.name}</p>
                            <p>Current City:{riderInfo.city}</p>
                            <p>Address:{riderInfo.address}</p>
                            <p>contact:{riderInfo.phone}</p>
                          </div>
                        </div>
                      ) : (
                        ""
                      )}
                    </div>
                  </Modal>
                </>
              </Card.Grid>

              <Card.Grid style={gridStyle}>
                <>
                  <Button
                    type="primary"
                    onClick={showApplyModal}
                    className="ride-btn"
                  >
                    Apply
                  </Button>
                  <Modal
                    visible={rideApplyModal}
                    title="Are you sure You want to avail this ride"
                    onCancel={cancelApply}
                    footer={[
                      <Button
                        key="cancel"
                        type="danger"
                        onClick={cancelApply}
                        className="ride-btn"
                      >
                        No
                      </Button>,
                      <Button
                        key="submit"
                        type="primary"
                        onClick={(key) => confirmApply(Ride._id)}
                        className="ride-btn"
                      >
                        Yes!
                      </Button>,
                    ]}
                  ></Modal>
                </>
              </Card.Grid>
              <div className="end-div">
              {applyMessage.length > 0 ? <div>{applyMessage}</div> : ""}
            </div>
            </Card>
         
          </div>
        </li>
      ))}
    </ul>
  );
};
export default SearchRideCard;
