import React, { useState } from "react";
import "antd/dist/antd.css";
import "../assets/style/ride.css";
import moment from "moment";
import {
  Form,
  Input,
  Button,
  InputNumber,
  DatePicker,
  TimePicker,
  Switch,
} from "antd";
import Vehical from "../../Vehical/Ui/vehicalUi";
import { Typography } from "antd";
import "moment/locale/zh-cn";
// import locale from "antd/es/date-picker/locale/zh_CN";
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
const Rideform = (props) => {
  const { onFinish, onFinishFailed, rideResult } = props;
  function disabledDate(current) {
    // Can not select days before today
    return current < moment().startOf("day");
  }
  return (
    <div>
      <div className="ridemain-div">
        {rideResult === "Ride has been posted" ? (
          <div className="div-card">
          <h4>{rideResult}</h4>
          </div>
        ) : (
          <Form
            {...layout}
            name="basic"
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            className={"rideForm"}
          >
            <Title className={"titleCss"} level={4}>
              Fill your ride info
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
              <Input placeholder="FROM / pick up city" />
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
              <Input placeholder="TO / departure city" />
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
              <Input placeholder="Exact pick up point " />
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
              <DatePicker
                placeholder="enter the date"
                disabledDate={disabledDate}
                style={{ width: "100%" }}
                // locale={locale}
              />
            </Form.Item>
            <Form.Item
              name="pick_up_time"
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
            <Form.Item
              name="available_seats"
              rules={[
                {
                  required: true,
                  message: "Please input the number of passengers !",
                },
              ]}
            >
              <Input
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
              ]}
            >
              <Input
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
              <Input placeholder="Detail description / luggage limit / Exact pick up etc " />
            </Form.Item>
            <Button
              className={"buttonStyle "}
              type="primary"
              htmlType="submit"
              className="ride-btn"
            >
              Confirm
            </Button>
          </Form>
        )}
      </div>
    </div>
  );
};
export default Rideform;
