import React from "react";
import "../assets/style/hero.css";
import {
  SearchOutlined,
  RiseOutlined,
  PlusCircleOutlined,
} from "@ant-design/icons";
import {
  Button,
} from "antd";
import { useHistory } from "react-router-dom";
import SearchRide from "../../FindRide/Ui/searchRidesUi"
const Hero = (props) => {
  const history=useHistory();
  return (
    <div id="main_hero">
      <div className="bottom_section">
        <h1 className="text_5">Go any where any time Search a ride now.</h1>

        <div>
          <Button
            className="search_btn"
            type="primary"
            htmlType="submit"
            icon={<SearchOutlined />}
            onClick={() => props.history.push("/searchRide")}
          
          >
            Search
          </Button>
        </div>
      </div>

      <div className="text_1">
        {" "}
        <span className="text_2">GOCO</span> TRAVEL
        <h1 className="text_3">WE ARE ALWAYS THERE AT YOUR SERVICE</h1>
      </div>


      <div className="bottom_left">
          <div><h1 className="bottom_left_text_1"> Driving in Your Car soon?</h1></div>
          <div><p className="bottom_left_text_2">     Let's make this your least expensive journey ever</p></div>
          <div><button>button</button></div>
      </div>
    </div>
  );
};

export default Hero;
