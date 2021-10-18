import React, { useState, useEffect } from "react";
import { Menu, Avatar, Rate, Statistic, Button, Modal } from "antd";
import {BarsOutlined,CloseOutlined} from "@ant-design/icons";
import "antd/dist/antd.css";
import "../assets/dashboard.css";
import ActiveRide from "./activeRide";
import OfferedRide from "./offeredRide";
import VehicalInfo from "./vehicalInfo";
import EditProfile from "../container/EditProfile";
import { ContextOne } from "../../contexts/contexts";
import ActiveRideApi from "../api/ActiveRideApi";
import VehicalInfoApi from "../api/VehicalInfoApi";
import { useHistory } from "react-router-dom";
import CalculateStars from "../../../config/calculateStars";
import Login from "../../login/containers/Login";
import ReportUi from "./reportsUi";
import OfferedRideUi from "./offeredRideUi";
import ImageUpload from "../../../config/ImageUpload";
import ContactAdminApi from "../api/contactAdminApi";
const Dashboard = (props) => {
  let { state, dispatch } = React.useContext(ContextOne);
  const [file, setFile] = useState([]);
  const [mode,setMode]  = useState("off");
  const [AdminMsg,setAdminMsg] = useState("")
  const history = useHistory();
  
  const [current, setCurrent] = useState("welcome");
 
  const handleClick = () => {};

  let stars = CalculateStars(state.userData.reviewStars);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const sendMail = () => {
    let values = {};
    values.file = file[0];
    ContactAdminApi(values).then((result) => {
      console.log("ressss", result);
      setAdminMsg("Please wait ..You will be unblock within 24 hours");
      setIsModalVisible(false);
    });
  };
  const handleCancel = () => {
    setIsModalVisible(false);
  };
  return (
    <div>
    <div className="dashboard_main">
    
      <div className="div-sidebar  " style={{ width: "30%" }}>
        {/* toggle sidebar button  for fone... */}
   
        
        <div className={"sidebar sidebar-dispaly"}>
          <Menu  className="sidebar-width"  defaultSelectedKeys={[]} mode="inline">
            <div className={"personalInfo"}>
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
              <p
                className="menuItem"
                // style={{ marginTop: "20px", marginLeft: "20px" }}
              >
                {state.userData.name}
              </p>
            </div>
            <div>
              <span>
                <Rate style={{ marginLeft: "44px" }} value={stars} />
              </span>
              <hr className="hhr" />
            </div>
            <Menu.Item
              onClick={() => {
                setCurrent("editProfile");
              }}
              className="menuitem"
            >
              Edit Profile
              
            </Menu.Item>
            <Menu.Item
              onClick={() => {
                setCurrent("activeRide");
              }}
              className="menuitem"
            >
              Active Ride
            </Menu.Item>
            <Menu.Item
              onClick={() => {
                setCurrent("offeredRide");
              }}
              className="menuitem"
            >
              Offered rides
            </Menu.Item>
            <Menu.Item
              onClick={() => {
                setCurrent("vehicalInfo");
              }}
              className="menuitem"
            >
              Vehical
            </Menu.Item>
            <Menu.Item
              onClick={() => {
                setCurrent("report");
              }}
              className="menuitem"
            >
              Reports
            </Menu.Item>
            <Menu.Item
              onClick={() => {
                history.push("/Login");
                dispatch({ type: "logout" });
              }}
              className="menuitem"
            >
              Logout
            </Menu.Item>
            <hr className="hhr" />
          </Menu>
        </div>
    {/* mobile dashboard ______________________________________________________________________*/}

   <div > {mode==="on"?
 <div className={"sidebar"}>
 <Menu  className="sidebar-width dashbored_sbar"  defaultSelectedKeys={[]} mode="inline">
 <Button type={"primary"} onClick={()=>setMode("off")} className='cross-btn dash-btn'><CloseOutlined /></Button>
   <div className={"personalInfo"}>
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
     <p
       className="menuItem"
       // style={{ marginTop: "20px", marginLeft: "20px" }}
     >
       {state.userData.name}
     </p>
   </div>
   <div>
     <span>
       <Rate style={{ marginLeft: "44px" }} value={stars} />
     </span>
     <hr className="hhr" />
   </div>
   <Menu.Item
     onClick={() => {
       setCurrent("editProfile");
       setMode("off")
     }}
     className="menuitem"
   >
     Edit Profile
     
   </Menu.Item>
   <Menu.Item
     onClick={() => {
       setCurrent("activeRide");
       setMode("off")
     }}
     className="menuitem"
   >
     Active Ride
   </Menu.Item>
   <Menu.Item
     onClick={() => {
       setCurrent("offeredRide");
       setMode("off")
     }}
     className="menuitem"
   >
     Offered rides
   </Menu.Item>
   <Menu.Item
     onClick={() => {
       setCurrent("vehicalInfo");
       setMode("off")
     }}
     className="menuitem"
   >
     Vehical
   </Menu.Item>
   <Menu.Item
     onClick={() => {
       setCurrent("report");
       setMode("off")
     }}
     className="menuitem"
   >
     Reports
   </Menu.Item>
   <Menu.Item
     onClick={() => {
       history.push("/Login");
       dispatch({ type: "logout" });
     }}
     className="menuitem"
   >
     Logout
   </Menu.Item>
   <hr className="hhr" />
 </Menu>
</div>
:""}
</div>
      </div>
      <div className="div-mid" style={{ width: "70%" }}>
      <div className="m-btn"><Button className="mobile-slidbar-btn dash-btn" type={"primary"} onClick={()=>setMode("on")}><BarsOutlined /></Button></div>
        <div className={"mid"}>
          {current == "activeRide" ? <div>{<ActiveRide />}</div> : ""}
          {current == "offeredRide" ? <div>{<OfferedRideUi />}</div> : ""}
          {current == "vehicalInfo" ? <div>{<VehicalInfo />}</div> : ""}
          {current == "editProfile" ? <div>{<EditProfile />}</div> : ""}
          {current == "welcome" ? (
            <div>
              <h4 className="w1">
                Welcome to <span className="w2"> GoCo  </span>  Travel 
              </h4>
              <div>
                {state.userData.isblock === true ? (
                 <div>{AdminMsg===""?
                 <>
                    <h5 className="w1">
                      Oop! Your ID is blocked
                      <br />
                      To unblock your Id
                    </h5>
                    <p className="w1">
                      You will have to pay a fine of Rs:1000 in Admin account
                      <br />
                      Dont forget to take a clear ScreenShot of the recipt and
                      then
                      <br /> click on Contact Admin below To upload the recipt{" "}
                      <br />
                      your Id will be unblock within 24 hours
                      <br />
                      Here's the accout details:xxxxxxxxx
                    </p>
                    <Button
                      type={"primary"}
                      className="dash-btn"
                      onClick={showModal}
                    >
                      Contact Admin
                    </Button>
                  </>:<div>{AdminMsg}</div>
                }</div>
                ) : (
                  ""
                )}
              </div>
            </div>
          ) : (
            ""
          )}
          {current == "report" ? <div>{<ReportUi />}</div> : ""}
        </div>
      </div>
      <Modal
        title="Apply to Unblock Id"
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={[
          <Button
            key="submit"
            type="primary"
            onClick={sendMail}
            
            className="dash-btn"
          >
            Submit
          </Button>,
        ]}
      >
        <h5 className="w1">
          Upload a recipt of Rs:1000 fine for unblocking your id
        </h5>
        <div>
          <ImageUpload setFile={setFile} />
        </div>
      </Modal>
     
    </div>
</div>
  );
};
export default Dashboard;
