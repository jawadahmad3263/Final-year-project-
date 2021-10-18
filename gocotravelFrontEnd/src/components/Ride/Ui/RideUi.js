import React, { useState, useEffect } from "react";
import Login from "../../login/containers/Login";
import { Link } from "react-router-dom";
import "antd/dist/antd.css";
import "../assets/style/ride.css";
import {
  Form,
  Input,
  Button,
  InputNumber,
  DatePicker,
  TimePicker,
  Switch,
  Radio,
} from "antd";
import VehicalInfoApi from "../../Dashboard/api/VehicalInfoApi";
import { Typography } from "antd";
import { Modal } from "react-bootstrap";
import Rideform from "./rideForm";
import Vehical from "../../Vehical/container/Vehical";
import { ContextOne } from "../../contexts/contexts";
import EditVehical from "../../Vehical/container/EditVehical";
import NavbarApi from "../../navbar/api/NavbarApi";
const { Title } = Typography;

const Ride = (props) => {
  const [RadioValue, setRadioValue] = React.useState("");
  const [isTrue, setTrue] = React.useState("");
  const [isVehical, setIsVehical] = React.useState(true);
  const handleRadio = (e) => {
    setRadioValue(e.target.value);
  };
  let { state, dispatch } = React.useContext(ContextOne);
  useEffect(() => {
    let token = localStorage.getItem("accessToken");
    if (token && token.length > 0) {
      NavbarApi().then((result) => {
        if (result) {
          dispatch({ type: "login", payload: result });
        }
      });
      VehicalInfoApi().then((result) => {
        if (result.Message == "No_Vehical") {
          dispatch({ type: "NoVehical", payload: result });
        } else {
          dispatch({ type: "vehical", payload: result });
          console.log(state.vehicalFound);
        }
      });
    }
  }, []);
  const { onFinish, onFinishFailed, rideResult } = props;
  console.log("jajajaj", state.userData.currentPosition);
  return (
    <div>
      {state.userData.isblock === false ? (
        <div>
          {state.userData.currentPosition != true ? (
            <div>
              {" "}
              {
                <div>
                  {state.vehicalFound == false ? (
                    <div> {<div>{<Vehical />}</div>}</div>
                  ) : (
                    <div>
                      {
                        <div>
                          <div className={"changeVehicalTitle"}>
                            <Title level={5}>
                              Do you want to change Your Vehical Info:
                            </Title>
                            <Radio.Group
                              onChange={handleRadio}
                              value={RadioValue}
                            >
                              <Radio
                                onClick={() => setTrue("selected")}
                                value={"yes"}
                              >
                                Yes
                              </Radio>
                              <Radio
                                onClick={() => setTrue("not selected")}
                                value={"no"}
                              >
                                No
                              </Radio>
                            </Radio.Group>
                          </div>
                          {isTrue.length > 0 ? (
                            isTrue == "selected" ? (
                              <div>{<EditVehical setTrue={setTrue} />}</div>
                            ) : (
                              <div className="ss">
                                {
                                  <Rideform
                                    onFinish={onFinish}
                                    onFinishFailed={onFinishFailed}
                                    rideResult={rideResult}
                                  />
                                }
                              </div>
                            )
                          ) : (
                            ""
                          )}
                        </div>
                      }
                    </div>
                  )}
                </div>
              }
            </div>
          ) : (
            <div>
              {
                <div className="div-card">
                  <h4>You have to complete your previous ride first</h4>
                </div>
              }
            </div>
          )}
        </div>
      ) : (
        <div>
          <div className="div-card">
            <h4>Oop! Your ID is blocked </h4>
          </div>
        </div>
      )}{" "}
    </div>
  );
};
export default Ride;
