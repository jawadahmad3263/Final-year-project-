import React, { useState, useEffect } from "react";
import VehicalUi from "../Ui/vehicalUi";
import VehicalApi from "../api/vehicalApi";
const Vehical = (props) => {
  const [file, setFile] = useState([]);
  const [vehicalResult, setVehicalResult] = useState("");
  const onFinish = (values) => {
    values.file = file[0];
    VehicalApi(values).then((result) => {
      if (result && result.success == true) {
        setVehicalResult(result.Message);
      } else if (
        result.success == false &&
        result.Message === "Car number entered is already registered here"
      ) {
        setVehicalResult(result.Message);
      } else if (
        result.success == false &&
        result.Message === "Given licence number already registered here"
      ) {
        setVehicalResult(result.Message);
      }
    });
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <VehicalUi
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      setFile={setFile}
      vehicalResult={vehicalResult}
    />
  );
};
export default Vehical;
