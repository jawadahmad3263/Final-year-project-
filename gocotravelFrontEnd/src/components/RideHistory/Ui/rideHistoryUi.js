import React, { useState, useEffect, useRef } from "react";
import RideHistoryCard from "./rideHistoryCard";
import rideHistoryApi from "../api/rideHistoryApi";
import Login from "../../login/containers/Login";
import "../assets/style/rideHistory.css";
import "antd/dist/antd.css";
import { Card, Avatar, Button, Divider, Modal, Rate, Checkbox } from "antd";
import { ContextOne } from "../../contexts/contexts";
const Ridehistory = () => {
  let { state, dispatch } = React.useContext(ContextOne);
  const [rideHistory, setRideHistory] = useState([]);
  const [msg,setMsg]  = useState("");

  useEffect(() => {
    rideHistoryApi().then((result) => {
      if (result) {
        console.log("got ride history", result);
        setRideHistory(result.availedPosts);
        setMsg(result.message);
      }
    });
  }, []);
  return (
    <div>
        
      {rideHistory.length != 0 ? (
        <div>
          {rideHistory.map((data, idx) => {
            return <RideHistoryCard data={data} idx={idx} />;
          })}
        </div>
      ) : (
        <div className="div-card">
         
          {msg==="no history"?
          <h4>zero rides</h4>: <h4>loading...</h4>  
        }
        </div>
        
      )
      }
      
    </div>
  );
};
export default Ridehistory;
