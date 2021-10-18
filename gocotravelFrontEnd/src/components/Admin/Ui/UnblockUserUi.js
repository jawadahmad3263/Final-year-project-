import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "antd/dist/antd.css";
import { Button, Avatar } from "antd";
import getConfirmUserApi from "../../Dashboard/api/getConfirmUserApi";
import fineReciptApi from "../api/fineReciptApi";
import UnBlockingUsersApi from "../api/UnblockingUserApi";
import DeleteReciptApi from "../api/deleteReciptApi";

const UnblockUserUi = (props) => {
  const { userId } = useParams();
  const [user, setUser] = useState("");
  const [recipt, setRecipt] = useState("");
  const [msg, setMsg] = useState("");

  useEffect(() => {
    getConfirmUserApi(userId).then((result) => {
      setUser(result);
    });
    fineReciptApi(userId).then((result) => {
      setRecipt(result);
    });
  }, []);
  console.log("recipt", recipt);
  const unblockFun = (userId, recipt_id) => {
    const user_id = userId;
    UnBlockingUsersApi(user_id).then((result) => {
      setMsg(result.message);
    });
    DeleteReciptApi(recipt_id).then((result) => {
      console.log("msgggg", result.message);
    });
  };
  return (
    <div className="UserMain-div">
      {msg != "" ? (
        <div className='boder ' style={{justifyContent: "center"}}><h1 className="mobile-font-35">Profile has been unblock successfully</h1></div>
      ) : (

        <div className="boder">
          <div className="left-section">
            <div className="left-title">
              <h1 className="white mobile-font-30">User Detail</h1>
            </div>
            <div className="left-Userdata">
              <div className="User-image">
                <Avatar
                  src={user.image}
                  size={{
                    xs: 45,
                    sm: 45,
                    md: 55,
                    lg: 65,
                    xl: 85,
                    xxl: 100,
                  }}
                />
              </div>
              <div className="user-detail">
                <div className="detail-user white">
                  <ui> 

                    <li className='mobile-font-23'>Name:{user.name}</li>
                    <li className='mobile-font-23'>Email:{user.email}</li>
                    <li className='mobile-font-23'> Contact:{user.phone}</li>
                  </ui>
                </div>
                <div className="end-btn ">
                  <Button
                    className="unblock-btn"
                    type={"primary"}
                    onClick={() => unblockFun(userId, recipt._id)}
                  >
                    Unblock profile
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="right-section">
            <div>
              {" "}
              <h1 className="white mobile-font-30">Fine Recipt</h1>
            </div>
            <div className="recpt-img">
              <img
                src={recipt.Recipt}
                style={{ width: "300px", height: "360px" }}
                alt="Fine Recipt"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UnblockUserUi;
