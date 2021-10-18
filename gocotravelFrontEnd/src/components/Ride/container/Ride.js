import React, { useEffect, useState } from "react";
import RideUi from "../Ui/RideUi";
import rideApi from "../api/rideApi";

const Ride = (props) => {
  const [rideResult, setRideResult] = useState("");
  const onFinish = (values) => {
    rideApi(values).then((result) => {
      if (result && result.success == true) {
        setRideResult(result.Message);
      }
    });
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <RideUi
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      rideResult={rideResult}
    />
  );
};
export default Ride;
