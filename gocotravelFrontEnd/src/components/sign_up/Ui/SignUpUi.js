import React, { useState } from "react";
import Dropzone from "react-dropzone";
import ReactDom from "react-dom";
import { Link } from "react-router-dom";
import "antd/dist/antd.css";
import { Form, Input, Button, Checkbox, InputNumber, Upload } from "antd";
import ImgCrop from "antd-img-crop";
import Password from "antd/lib/input/Password";
import "../assets/style/signup.css";
import { Typography } from "antd";
import ImageUpload from "../../../config/ImageUpload";
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

const SignUpUi = (props) => {
  const { onFinish, onFinishFailed, setFile, afterReg } = props;

  return (
    <div className="h">
      {afterReg === false ? (
        <div>
          {
            <div className="signupDiv">
              <Form
                {...layout}
                name="basic"
                initialValues={{
                  remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                className={"signupForm"}
              >
                <div className="title">
                  <h1>Sign Up</h1>
                </div>

                <h1 className="end-text2">
                  Fill the Form to become a User of GoCoTravel
                </h1>
                <Form.Item
                  name="name"
                  rules={[
                    {
                      required: true,
                      min: 3,
                      max: 20,
                      message: "Please input your fullname!",
                      whitespace: true,
                    },
                    {
                      pattern: new RegExp(/^[a-zA-Z]+(?:[\s.]+[a-zA-Z]+)*$/i),
                      message: "Please input alphabets only!",
                    },
                  ]}
                >
                  <Input placeholder="Your Full name" />
                </Form.Item>

                <Form.Item
                  name="email"
                  rules={[
                    {
                      required: true,
                      message: "Please input your email address!",
                    },
                    {
                      type: "email",
                      message: "The input is not valid E-mail!",
                    },
                  ]}
                >
                  <Input placeholder="Email" />
                </Form.Item>

                <Form.Item
                  name="password"
                  rules={[
                    {
                      required: true,
                      message: "Please input your password!",
                    },
                    {
                      min: 8,
                      message:
                        "Password too short should be minimum of 8 digit!",
                    },
                    {
                      max: 14,
                      message:
                        "Password too long should be maximum of 14 digit!",
                    },
                  ]}
                >
                  <Input.Password placeholder="Password" />
                </Form.Item>

                <Form.Item
                  name="confirm"
                  dependencies={["password"]}
                  hasFeedback
                  rules={[
                    {
                      message: "Please confirm your password!",
                    },
                    ({ getFieldValue }) => ({
                      validator(_, value) {
                        if (!value || getFieldValue("password") === value) {
                          return Promise.resolve();
                        }

                        return Promise.reject("Confirm password do not match!");
                      },
                    }),
                  ]}
                >
                  <Input.Password placeholder={"Confirm Password"} />
                </Form.Item>

                <Form.Item
                  name="phone"
                  rules={[
                    {
                      required: true,
                      message: "Please input phone number!",
                    },
                    {
                      min: 11,
                      message: "Please input correct phone number!",
                    },
                    {
                      max: 12,
                      message: "Please input correct phone number!",
                    },
                  ]}
                >
                  <Input
                    type="number"
                    placeholder="Mobile Number"
                    style={{ width: "100%" }}
                  />
                </Form.Item>

                <Form.Item
                  name="address"
                  rules={[
                    {
                      required: true,
                      message: "Please input your Address!",
                      whitespace: true,
                    },
                  ]}
                >
                  <Input placeholder="your current Full Address" />
                </Form.Item>

                <Form.Item
                  name="cnic"
                  rules={[
                    {
                      required: true,
                      message: "Please input Cnic number!",
                    },
                    {
                      min: 13,
                      message: "Please input correct Cnic number!",
                    },
                    {
                      max: 13,
                      message: "Please input correct Cnic number!",
                    },
                  ]}
                >
                  <Input
                    type="number"
                    placeholder="Identity Card Number"
                    style={{ width: "100%" }}
                  />
                </Form.Item>

                <Form.Item
                  name="city"
                  rules={[
                    {
                      required: true,
                      message: "Please input the city currently living!",
                    },
                  ]}
                >
                  <Input placeholder="Current city" />
                </Form.Item>

                <h5>Click to upload your profile picture</h5>
                <div>
                  <ImageUpload setFile={setFile} />
                </div>

                <h1 className="end-text ">
                  By creating an account you agree to our{" "}
                  <a style={{ color: "red" }}>Terms & Privacy</a>
                </h1>
                <Form.Item {...tailLayout}>
                  <Button type="primary" htmlType="submit" className="b-button">
                    SignUp
                  </Button>
                </Form.Item>
              </Form>
            </div>
          }
        </div>
      ) : (
        <div  className="div-card">
          
            <h4>
              welcome TO GoCoTravel
              <br />
              Start Your journey Today
              <br />
              <br />
              Click here to<Link to="/Login">Login</Link>
            </h4>
          
        </div>
      )}
    </div>
  );
};

export default SignUpUi;
