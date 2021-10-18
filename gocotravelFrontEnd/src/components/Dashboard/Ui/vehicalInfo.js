import React, { useState, useEffect } from "react";
import { Button } from "antd";
import rideCar from "../../RideHistory/assets/icons/rideCar.jpg";
import Vehical from "../../Vehical/Ui/vehicalUi";
import { ContextOne } from "../../contexts/contexts";
import EditVehical from "../../Vehical/container/EditVehical";
import VehicalInfoApi from "../api/VehicalInfoApi";
import { Link } from "react-router-dom";
import vehicalUi from "../../Vehical/Ui/vehicalUi";
const VehicalInfo = (props) => {
  // const {isvehical}=props;
  let { state, dispatch } = React.useContext(ContextOne);

  const [current, setCurrent] = useState("");
  useEffect(() => {
    let token = localStorage.getItem("accessToken");
    if (token && token.length > 0) {
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
  // const [isVehical,setIsVehical] = useState(false)
  // const [vehical,setVehical] = useState(null)
  //   useEffect(() => {
  //   let token = localStorage.getItem("accessToken");
  //   if (token && token.length > 0) {
  //     VehicalInfoApi().then((result) => {
  //       if (result.Message=="No_Vehical"){
  //         dispatch({type:'NoVehical',payload:result})

  //       } else{

  //         setVehical(result);
  //         console.log("vehical",vehical)
  //         console.log(result)
  //         setIsVehical(true);
  //         dispatch({type:'vehical',payload:result})
  //         console.log(state.vehicalFound)
  //       }

  //     });
  //   } else {
  //     setIsVehical(false);
  //   }
  // }, [state.status]);
  return (
    <div className="">
      {state.vehicalFound != false ? (
        <div>
          
              {current == "vehical" ? (
                <div>
                  {<EditVehical />}
                  <div>
                    <Button
                      className="dash-btn"
                      type={"primary"}
                      onClick={() => {
                        setCurrent("");
                      }}
                    >
                      Back
                    </Button>
                  </div>
                </div>
              ) : (
                <div>
                  {
                    <div>
                      <div className="vehical-main">
                        <div className="vehical-pic">
                          <img
                            src={state.vehicalData.car_image}
                            style={{ width: "300px", height: "360px" }}
                            alt="Vehical"
                          />
                        </div>
                        <div className="vehical-detail">
                          <div>
                            <h5 className="w1">Vehical Info</h5>
                            <hr />
                            <p className="w1">
                              Car Modal:{state.vehicalData.car_type}
                            </p>
                            <p className="w1">
                              Color:{state.vehicalData.car_color}
                            </p>
                            <p className="w1">
                              Car Number:{state.vehicalData.car_number}
                            </p>
                            <p className="w1">
                              Licence Number:{state.vehicalData.licence_number}
                            </p>
                          </div>
                        </div>
                        <div className="btn-main">
                          <div className="btn-submain ">
                            <Button
                              className="dash-btn"
                              type={"primary"}
                              onClick={() => {
                                setCurrent("vehical");
                              }}
                            >
                              Change Vehical
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  }
                </div>
              )}
          
        </div>
      ) : (
        <div>
          <Vehical />
        </div>
      )}
    </div>
  );
};
export default VehicalInfo;
