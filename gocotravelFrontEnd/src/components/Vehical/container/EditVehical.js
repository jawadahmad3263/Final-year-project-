import React, { useState, useEffect } from "react";
import EditVehicalUi from "../Ui/EditVehicalUi";
import EditVehicalApi from "../api/EditVehicalApi";
import { ContextOne } from "../../contexts/contexts";
const EditVehical = (props) => {
  const { setTrue } = props;
  let { state, dispatch } = React.useContext(ContextOne);
  const [file, setFile] = useState([]);
  const [vehicalResult, setVehicalResult] = useState("");
  const vehical_id = state.vehicalData._id;
  const onFinish = (values) => {
    values.vehical_id = vehical_id;
    values.file = file[0];
    EditVehicalApi(values).then((result) => {
      if (result && result.success == true) {
        setVehicalResult(result.Message);
        setTrue("not selected");
      }
    });
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <EditVehicalUi
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      setFile={setFile}
      vehicalResult={vehicalResult}
    />
  );
};
export default EditVehical;
