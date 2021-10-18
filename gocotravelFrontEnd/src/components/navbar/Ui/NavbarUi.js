import React, { useState, useEffect } from "react";
import { Image } from "react-bootstrap";
import "../assets/style/navbar.css";
import { ContextOne } from "../../contexts/contexts";
import { Menu, Typography } from "antd";
import { withRouter } from "react-router-dom";
import {
  UserOutlined,
  SettingOutlined,
  CarOutlined,
  SearchOutlined,
  PlusCircleOutlined,
  LoginOutlined,
  HistoryOutlined,
  LogoutOutlined,
  ProfileOutlined
} from "@ant-design/icons";
import NavbarApi from "../api/NavbarApi";
const { SubMenu } = Menu;
const { Title } = Typography;

const NavigationBar = (props) => {
  let { state, dispatch } = React.useContext(ContextOne);
  const [user, setUser] = useState(null);
  const [check, setCheck] = useState(false);
  useEffect(() => {
    let token = localStorage.getItem("accessToken");

    if (token && token.length > 0) {
      NavbarApi().then((result) => {
        if (result) {
          console.log(result);
          setUser(result);
          setCheck(true);
          dispatch({ type: "login", payload: result });
        }
      });
    } else {
      setCheck(false);
    }
  }, [state.status]);

  const [current, setCurrent] = useState(["home"]);

  const handleClick = (e) => {
    console.log("click ", e);
    setCurrent({ current: e.key });
  };

  return (
    <>
      {state.userData.email != "gocotravel917@gmail.com" ? (
        <Menu
          onClick={handleClick}
          selectedKeys={[current]}
          mode="horizontal"
          className={"navbarCss"}
        >
          <Menu.Item key="home" onClick={() => props.history.push("/")}>
            <div className="nave-g">
              {" "}
              GOCO <span className="nave-t">TRAVEL</span>{" "}
            </div>
          </Menu.Item>
          {check == false ? (
            <Menu.Item
              key="login"
              className="flot"
              icon={<LoginOutlined style={{ fontSize: "18px" }} />}
              onClick={() => props.history.push("/Login")}
            >
              Login
            </Menu.Item>
          ) : (
            <Menu.Item
              key="logout"
              className="flot"
              onClick={() => props.history.push("/Dashboard")}
            >
              <span><ProfileOutlined />{user.name}</span>
            </Menu.Item>
          )}
          {check == false ? (
            <Menu.Item
              key="signup"
              className="flot"
              icon={<UserOutlined style={{ fontSize: "18px" }} />}
              onClick={() => props.history.push("Signup")}
            >
              SignUp
            </Menu.Item>
          ) : (
            <Menu.Item></Menu.Item>
          )}

          <Menu.Item
            key="searchRide"
            className="flot"
            icon={<SearchOutlined style={{ fontSize: "18px" }} />}
            onClick={() => props.history.push("/searchRide")}
          >
            Find a Ride
          </Menu.Item>
          <Menu.Item
            key="ride"
            className="flot"
            icon={<PlusCircleOutlined style={{ fontSize: "18px" }} />}
            onClick={() => props.history.push("/Ride")}
          >
            Offer a Ride
          </Menu.Item>
          <Menu.Item
            key="rideHistory"
            className="flot"
            icon={<HistoryOutlined style={{ fontSize: "18px" }} />}
            onClick={() => props.history.push("/rideHistory")}
          >
            Rides History
          </Menu.Item>
        </Menu>
      ) : (
        props.history.push("/adminDashboard")
      )}
    </>
  );
};
export default withRouter(NavigationBar);
