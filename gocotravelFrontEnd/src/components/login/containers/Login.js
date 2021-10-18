import React, { useEffect, useState } from "react";
import LoginUI from "../Ui/loginUi";
import loginApi from "../api/loginApi";
import { ContextOne } from "../../contexts/contexts";
import { withRouter } from "react-router-dom";
import { message } from "antd";
import rideHistoryApi from "../../RideHistory/api/rideHistoryApi";

const Login = (props) => {
  let { state, dispatch } = React.useContext(ContextOne);
  const [failMessage, setFailMessage] = useState();
  console.log(state, "State");
  const onFinish = (values) => {
    console.log("Success:", values);
    loginApi(values).then((result) => {
      if (result) {
        if (result.success === true) {
          console.log(props);

          localStorage.setItem("accessToken", result.token);

          if (result.Message === "admin") {
            dispatch({ type: "login", payload: result.data });
            props.history.push("/AdminDashboard");
          } else {
            dispatch({ type: "login", payload: result.data });

            props.history.push("/Dashboard");
          }
        } else if (result.Message === "Not a Valid Email") {
          setFailMessage(result.Message);
        } else if (result.Message === "Wrong Password") {
          setFailMessage(result.Message);
        }
      } else {
        alert("Some server error");
      }
    });
  };
  const onLogout = () => {
    localStorage.clear();
    dispatch({ type: "logout" });
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <LoginUI
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      failMessage={failMessage}
    />
  );
};

export default withRouter(Login);
