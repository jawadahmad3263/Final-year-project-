import React, { useState, useEffect } from "react";
import { Menu, Avatar, Rate, Statistic,Button } from "antd";
import {BarsOutlined,CloseOutlined} from "@ant-design/icons";
import "antd/dist/antd.css";
import { ContextOne } from "../../contexts/contexts";
import { useHistory } from "react-router-dom";
import CalculateStars from "../../../config/calculateStars";
import Login from "../../login/containers/Login";
import AllUsersCard from "./AllUsersUi";
import BlockedUsersCard from "./BlockedUsersUi";
import ReportListCard from "./AllReportsUi";
import "../assets/admin.css";
const AdminDashboardUi = (props) => {
  let { state, dispatch } = React.useContext(ContextOne);
  const history = useHistory();
  const [current, setCurrent] = useState("welcome");
  const [mode,setMode] = useState("off");

  return (

    
    <>
     <div className="admin-navbar">
        <div> <h4 className='nave-t'>GOCO<span className='admin-nave'>Travel</span></h4></div>
      </div>
    <div className="admin-dashboard-main">
     
      <div className="admin-mobile"  style={{width:"30%"}}>
      <div className={"sidebar disply-none-mobile"}>
        <Menu style={{ width: 256 }} defaultSelectedKeys={[]} mode="inline">
          <div>
            <div className="personalInfo">
              <Avatar
                src={state.userData.image}
                size={{
                  xs: 34,
                  sm: 40,
                  md: 50,
                  lg: 64,
                  xl: 80,
                  xxl: 100,
                }}
                />
            </div>
            <hr className="hhr" />
            <p style={{ marginTop: "20px", marginLeft: "20px" }}>
              <span className="menuItem">{state.userData.name}</span>
            </p>
          </div>
          <hr />
          <Menu.Item
            className="menuItem"
            onClick={() => {
              setCurrent("AllUsers");
            }}
            >
            All Users
          </Menu.Item>
          <Menu.Item
            className="menuItem"
            onClick={() => {
              setCurrent("BlockedUsers");
            }}
            >
            Blocked Users
          </Menu.Item>
          <Menu.Item
            className="menuItem"
            onClick={() => {
              setCurrent("ShowReport");
            }}
            >
            Show Reports
          </Menu.Item>
          <Menu.Item
            className="menuItem"
            onClick={() => {
              history.push("/Login");
              dispatch({ type: "logout" });
            }}
            >
            Logout
          </Menu.Item>
          <hr className="hhr" />
        </Menu>
      </div>
      {/* mobile sidebar_______________ */}
      <Button  className='dash-btn' type={"primary"} onClick={()=>{setMode("on")}}><BarsOutlined/></Button>
        <div  >{mode==="on"?
  <div className={"sidebar"}>
    

 <Menu style={{ width: 256 }} defaultSelectedKeys={[]} mode="inline" >
   <div style={{ textAlign: "end"}} >  <Button  className='dash-btn' type={"primary"} onClick={()=>setMode("off")}><CloseOutlined /></Button></div>
   <div>
     <div className="personalInfo">
       <Avatar
         src={state.userData.image}
         size={{
           xs: 34,
           sm: 40,
           md: 50,
           lg: 64,
           xl: 80,
           xxl: 100,
          }}
          />
     </div>
     <hr className="hhr" />
     <p style={{ marginTop: "20px", marginLeft: "20px" }}>
       <span className="menuItem">{state.userData.name}</span>
     </p>
   </div>
   <hr />
   <Menu.Item
     className="menuItem"
     onClick={() => {
       setCurrent("AllUsers");
       setMode("off")
      }}
   >
     All Users
   </Menu.Item>
   <Menu.Item
     className="menuItem"
     onClick={() => {
       setCurrent("BlockedUsers");
       setMode("off")
      }}
      >
     Blocked Users
   </Menu.Item>
   <Menu.Item
     className="menuItem"
     onClick={() => {
       setCurrent("ShowReport");
       setMode("off")
      }}
      >
     Show Reports
   </Menu.Item>
   <Menu.Item
     className="menuItem"
     onClick={() => {
       history.push("/Login");
       dispatch({ type: "logout" });
      }}
      >
     Logout
   </Menu.Item>
   <hr className="hhr" />
 </Menu>
</div>
       :""
      }</div>
      </div>
      <div className={"main_div"}>
        {current == "AllUsers" ? <div>{<AllUsersCard />}</div> : ""}
        {current == "BlockedUsers" ? <div>{<BlockedUsersCard />}</div> : ""}
        {current == "ShowReport" ? <div>{<ReportListCard />}</div> : ""}

        {current == "welcome" ? (
          <div className="mid">
            <h1 className="white">
              Welcome to <span className="yellow">GoCo</span> Travel{" "}
            </h1>
          </div>
        ) : (
          ""
          )}
      </div>
    </div>
          </>
  );
};


export default AdminDashboardUi;
