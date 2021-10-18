import React, { useState } from "react";
import moment from "moment";
import ReactDom from "react-dom";
import EditRideApi from "../api/EditRideApi";
import "antd/dist/antd.css";
import { RollbackOutlined } from "@ant-design/icons";
import { ContextOne } from "../../contexts/contexts";
import {
  Form,
  Input,
  Button,
  InputNumber,
  Upload,
  Divider,
  message,
  DatePicker,
  TimePicker,
} from "antd";
import { Typography } from "antd";

const { Title } = Typography;

const layout = {
  wrapperCol: {
    span: 25,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 3,
    span: 16,
  },
};

const EditRideUi = (props) => {
  let { state, dispatch } = React.useContext(ContextOne);
  const { setEditRide } = props;
  const [Slabel, setSlabel] = useState("");
  // const [pdate, setPdate] = useState(postInfo.pick_up_date);
  const [allValues, setAllValues] = useState({
    pick_up_city: state.activePost.pick_up_city,
    pick_up_point: state.activePost.pick_up_point,
    drop_off_city: state.activePost.drop_off_city,
    pick_up_date: state.activePost.pick_up_date,
    pick_up_time: state.activePost.pick_up_time,
    available_seats: state.activePost.available_seats,
    charges: state.activePost.charges,
    description: state.activePost.description,
  });

  const changeHandler = (e) => {
    setAllValues({ ...allValues, [e.target.name]: e.target.value });
    console.log("pickupcity", allValues);
  };
  // const dateHandler = (e) => {
  //   console.log("event",e)
  //   // setAllValues({ ...allValues, [e.target.selected]: e });
  //   // console.log("pickupcity", allValues);
  //   setPdate(e)
  // };
  //  console.log("allvalues",allValues);
  const onFinish = () => {
    console.log(allValues);
    // allValues.pick_up_date=pdate
    allValues.post_id = state.activePost._id;

    EditRideApi(allValues).then((result) => {
      if (result) setSlabel(result.message);
    });
    console.log(allValues);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  // console.log("date here",pdate);
  return (
    <div>
      <Form
        {...layout}
        name="basic"
        initialValues={allValues}
        // initialValues={{

        //   pick_up_city:postInfo.pick_up_city,
        //   drop_off_city:postInfo.drop_off_city,
        //   pick_up_date:postInfo.pick_up_date,
        //   pick_up_time:postInfo.pick_up_time,
        //   available_seats:postInfo.available_seats,
        //   charges:postInfo.charges,
        //   description:postInfo.description,
        //   remember: true,
        // }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Title className={"titleCss"} level={4}>
          Edit your ride info
        </Title>
        <Form.Item
          name="pick_up_city"
          rules={[
            {
              required: true,
              message: "Please input the city to leave!",
            },
          ]}
        >
          <label>From</label>
          <Input
            name="pick_up_city"
            initialValues={allValues.pick_up_city}
            defaultValue={allValues.pick_up_city}
            onChange={changeHandler}
            placeholder="FROM / pick up city"
          />
        </Form.Item>
        <Form.Item
          name="pick_up_point"
          rules={[
            {
              required: true,
              message: "Please input the exact pick up point!",
            },
          ]}
        >
          <label>Exact pick up location</label>
          <Input
            initialValues={allValues.pick_up_point}
            defaultValue={allValues.pick_up_point}
            onChange={changeHandler}
            placeholder="Exact pick up point "
          />
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
          <label>To</label>
          <Input
            name="drop_off_city"
            initialValues={allValues.drop_off_city}
            defaultValue={allValues.drop_off_city}
            onChange={changeHandler}
            placeholder="TO / departure city"
          />
        </Form.Item>
        <Form.Item
          name="pick_up_date"
          rules={[
            {
              required: true,
              message: "Please input the Date to leave!",
            },
          ]}
        >
          <label>Date</label>
          <DatePicker
            selected={allValues.pick_up_date}
            name="pick_up_date"
            initialValues={allValues.pick_up_date}
            //defaultValue={allValues.pick_up_date}
            // initialValues={pdate}
            // defaultPickerValue={pdate}
            // onFocus={(e)=>setPdate(e)}
            onChange={(e) =>
              setAllValues({ ...allValues, [allValues.pick_up_date]: e })
            }
            //onChange={changeHandler}
            placeholder={allValues.pick_up_date}
            style={{ width: "100%" }}
          />
        </Form.Item>
        <Form.Item
          selected="pick_up_time"
          rules={[
            {
              required: true,
              message: "Please input the Time to leave!",
            },
          ]}
        >
          <label>Pick up time</label>
          <TimePicker
            selected="pick_up_time"
            initialValues={allValues.pick_up_time}
            onChange={changeHandler}
            // defaultValue={allValues.pick_up_city}
            use12Hours
            format="h:mm a"
            placeholder={state.activePost.pick_up_time}
            style={{ width: "100%" }}
          />
        </Form.Item>
        <Form.Item
          name="available_seats"
          rules={[
            {
              required: true,
              message: "Please input the number of passengers !",
            },
            // {
            //   negative: false,
            //   message: "Please input the correct number of passengers !",
            // },
          ]}
        >
          <label>No of seats</label>
          <Input
            name="available_seats"
            onChange={changeHandler}
            initialValues={allValues.available_seats}
            defaultValue={allValues.available_seats}
            type="number"
            placeholder="no of passenger seats"
            min="1"
            style={{ width: "100%" }}
          />
        </Form.Item>

        <Form.Item
          name="charges"
          rules={[
            {
              required: true,
              message: "Please input charges per seat !",
            },
            // {
            //   negative: false,
            //   message: "Please input the correct amount !",
            // },
          ]}
        >
          <label>Charge per seat</label>
          <Input
            name="charges"
            onChange={changeHandler}
            initialValues={allValues.charges}
            defaultValue={allValues.charges}
            type="number"
            placeholder="Charges per seat"
            min="150"
            style={{ width: "100%" }}
          />
        </Form.Item>

        <Form.Item
          name="description"
          rules={[
            {
              message: "Other info about ride",
            },
          ]}
        >
          <label>Description</label>
          <Input
            name="description"
            onChange={changeHandler}
            initialValues={allValues.description}
            defaultValue={allValues.description}
            placeholder="Detail description / luggage limit / Exact pick up etc "
          />
          <br />
          <br />
          <Button
            onClick={() => onFinish}
            className={"buttonStyle dash-btn "}
            type="primary"
            htmlType="submit"
          >
            Done
          </Button>
        </Form.Item>
      </Form>
      <div>{Slabel}</div>
    </div>
  );
};

export default EditRideUi;
