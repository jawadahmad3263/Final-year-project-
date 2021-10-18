import React, { useState, useEffect } from "react";
import ReactDom from "react-dom";
import "antd/dist/antd.css";
import { RollbackOutlined } from "@ant-design/icons";
import { Input, Button, Carousel, Card, Divider, Result, Rate } from "antd";
import { Typography } from "antd";
import RequestedUserApi from "../api/requestedUserApi";
import ConfirmUserApi from "../api/ConfirmUserApi";
import { ContextOne } from "../../contexts/contexts";
import ActiveRideApi from "../api/ActiveRideApi";
import CalculateStars from "../../../config/calculateStars";
const { Title } = Typography;
const carousalStyle = {
  height: "440px",
  color: "#fff",
  lineHeight: "10px",
  background: "#364d",
  padding: "10px",
};

const RequestedUserUi = (props) => {
  let { state, dispatch } = React.useContext(ContextOne);
  const { RequestedUser } = props;
  const [reqUser, setReqUser] = useState();
  const [stars, setStars] = useState(null);
  const [disableMsg, setDisableMsg] = useState("");
  const [CMessage, setCMessage] = useState("");
  console.log("so here we got req users", RequestedUser);
  const Rdata = {
    reqUser_id: RequestedUser,
    post_id: state.activePost._id,
  };
  console.log("Rdata", Rdata);
  useEffect(() => {
    RequestedUserApi(Rdata).then((result) => {
      console.log("here ....", result);
      if (result) {
        setReqUser(result.user);
        setDisableMsg(result.message);
        setStars(CalculateStars(result.user.reviewStars));
      }
    });
  }, []);
  var Cdata = {
    user_id: RequestedUser,
    post_id: state.activePost._id,
  };
  console.log("our users", reqUser);
  const ConfirmUser = () => {
    console.log("here confirmUsers");
    ConfirmUserApi(Cdata).then((result) => {
      if (result) setCMessage(result.message);
      ActiveRideApi().then((result) => {
        dispatch({ type: "activePost", payload: result.post });
      });
    });
  };

  return (
    <div>
      <div className="req-user-list">
        {
          reqUser != null ? (
            <div>
              <div>
                <div>
                  {
                    <Card
                      hoverable
                      style={{ width: "200px" }}
                      cover={<img alt="example" src={reqUser.image} />}
                    >
                      <span>
                        <Rate style={{ marginLeft: "14px" }} value={stars} />
                      </span>
                      <b>
                        <p>{reqUser.name}</p>
                      </b>

                      {disableMsg === "" ? (
                        <Button
                          className="dash-btn"
                          type={"primary"}
                          style={{ width: "100%", marginTop: "1px" }}
                          onClick={ConfirmUser}
                        >
                          Confirm
                        </Button>
                      ) : (
                        <Button
                          className="dash-btn"
                          disabled={true}
                          type={"primary"}
                          style={{ width: "100%", marginTop: "1px" }}
                        >
                          Confirmed
                        </Button>
                      )}
                    </Card>
                  }
                  <p>{CMessage}</p>
                </div>
              </div>
            </div>
          ) : (
            ""
          )
      
        }
      </div>
    </div>
  );
};

export default RequestedUserUi;
