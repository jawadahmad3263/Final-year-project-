import React, { useState } from "react";
import "antd/dist/antd.css";
import { SearchOutlined, CarOutlined } from "@ant-design/icons";
import SearchRideCard from "./searchRideCard";
import RidesPagination from "../../RideHistory/Ui/ridesPagination";
import RiderInfoApi from "../api/RiderInfoApi";
import moment from 'moment';
import { ContextOne } from "../../contexts/contexts";
import Login from "../../login/containers/Login";
import {
  Form,
  Input,
  Button,
  InputNumber,
  DatePicker,
  TimePicker,
} from "antd";
import "../assets/style/searchRide.css";
import { Typography } from "antd";
import ApplytoRideApi from "../api/ApplytoRideApi";
const { Title } = Typography;
const layout = {
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

const SearchRideUi = (props) => {
  const { onFinish, onFinishFailed, searchLength, searchResult,loading } = props;
  const dateFormat = "YYYY-MM-DD";
  let { state, dispatch } = React.useContext(ContextOne);
  const [currentPage, setCurrentPage] = useState(1);
  const [ridePerPage] = useState(2);
  function disabledDate(current) {
    // Can not select days before today
    return current <moment().startOf('day');
  }
  const indexOfLastPost = currentPage * ridePerPage;
  const indexOfFirstPost = indexOfLastPost - ridePerPage;
  const currentRide = searchResult.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);
  return (
    <div>{state.userData.isblock===false?
    <div className='padding-top'>
      <Form
        className={"searchRide"}
        name="basic"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        layout={"inline"}
      >
        <Form.Item
          name="pick_up_city"
          rules={[
            {
              required: true,
              message: "Please input the city to leave!",
            },
          ]}
        >
          <Input className={"searchItem"} placeholder="Leaving From/From" />
        </Form.Item>
        <Form.Item
          name="drop_off_city"
          rules={[
            {
              required: true,
              message: "Please input the city to arive!",
            },
          ]}
        >
          <Input className={"searchItem"} placeholder="TO/ Going To" />
        </Form.Item>
        <Form.Item
          name="pickUpDate"
          rules={[
            {
              required: true,
              message: "Please input the Date to leave!",
            },
          ]}
        >
          <DatePicker
            className={"searchItem"}
            disabledDate={disabledDate}
            placeholder="Date"
            style={{ width: "100%" }}
            format={dateFormat}
          />
        </Form.Item>
        <Form.Item
          name="pickUpTime"
          rules={[
            {
              required: true,
              message: "Please input the Time to leave!",
            },
          ]}
        >
          <TimePicker
            use12Hours
            format="h:mm a"
            placeholder="pick up time"
            style={{ width: "100%" }}
          />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" icon={<SearchOutlined  />} className='ride-btn'>
            Search
          </Button>
        </Form.Item>
      </Form>

      <div>
        {searchLength === "yes" ? (
          <div>
           
             <SearchRideCard currentRide={currentRide} loading={loading} />;
              <RidesPagination
              ridesPerPage={ridePerPage}
              totalRides={searchResult.length}
              paginate={paginate}
            />
          
           </div>
        ) : (
          <p>{searchLength}</p>
        )}
      </div>
    </div>: <div className="div-card"><h4>Oop! Your ID is blocked </h4></div>
   } </div>
  );
};

export default SearchRideUi;
