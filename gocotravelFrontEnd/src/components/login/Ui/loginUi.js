import React, { useEffect, useState } from "react";
import { ReactDom } from "react-dom";
import { Link, useHistory, Redirect } from "react-router-dom";
import "antd/dist/antd.css";
import { Form, Input, Button, Checkbox } from "antd";
import "../assets/style/login.css";
import { Typography } from "antd";
import Dashboard from "../../Dashboard/Ui/dashboard";
import { ContextOne } from "../../contexts/contexts";
import ForgetPsswordUi from "./forgetPasswordUi";

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
const LoginUi = (props) => {
  const { onFinish, onFinishFailed, failMessage } = props;

  let { state } = React.useContext(ContextOne);

  const [forget, setForget] = useState("no");

  return (
    <>
      <div className="h">
        <div>
          {forget == "yes" ? (
            <div>
              <ForgetPsswordUi />
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
              className={"login"}
            >
              <div className="title">
                <h1>Login </h1>
              </div>

              <div className="input_fields">
                <Form.Item
                  name="email"
                  rules={[
                    {
                      required: true,
                      type: "email",
                      message: "Please input your email!",
                    },
                  ]}
                >
                  <Input placeholder="Your Email address" />
                </Form.Item>
                {failMessage === "Not a Valid Email" ? (
                  <p style={{ color: "white",fontSize:"20px" }}>Given Email is not Valid</p>
                ) : (
                  ""
                )}
                <Form.Item
                  name="password"
                  rules={[
                    {
                      required: true,
                      message: "Please input your password!",
                    },
                  ]}
                >
                  <Input.Password placeholder="password" />
                </Form.Item>
                {failMessage === "Wrong Password" ? (
                  <p style={{ color: "white",fontSize:"20px" }}>Incorrect password</p>
                ) : (
                  ""
                )}

                <Form.Item {...tailLayout} className="form-btn">
                  <Button type="primary" htmlType="submit" className="b-button">
                    Login
                  </Button>
                  <Button
                    type="primary"
                    onClick={() => setForget("yes")}
                    style={{ marginLeft: "4%" }}
                    className="b-button"
                  >
                    Forget Password
                  </Button>
                </Form.Item>
              </div>
              <div className="end-text">
                Don't have an account?{" "}
                <Button type="link" htmlType="button">
                  <Link to="/signup" className="end-text2">
                    {" "}
                    Register Now!{" "}
                  </Link>
                </Button>
              </div>
            </Form>
          )}
        </div>
      </div>
    </>
  );
};

export default LoginUi;
