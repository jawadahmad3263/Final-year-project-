import React from "react";
import EditRideApi from "../api/EditRideApi";
import activeRide from "../Ui/activeRide";
import EditRideUi from "../Ui/EditRideUi";
const EditRide = (props) => {
    
  const onFinish = (values) => {
    EditRideApi(values).then((result=>{
     console.log("result heree",result)
      }))
      }
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  }
  
  return <EditRide onFinish={onFinish} onFinishFailed={onFinishFailed}  />;
};
export default EditRide;
