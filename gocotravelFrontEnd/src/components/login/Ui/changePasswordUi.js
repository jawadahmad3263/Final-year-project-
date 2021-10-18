import React, { useState } from "react";
import {useParams} from "react-router-dom";
import "antd/dist/antd.css";
import { Form, Input, Button } from "antd";
import { Typography } from "antd";
import Password from "antd/lib/input/Password";
import ChangePasswordApi from "../api/changePasswordApi";
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
const ChangePasswordUi = (props) => {
  const {token}= useParams();
  const [pchange,setPchange] = useState("");
  console.log("your token here",token);
  const onFinish=(value)=>{
  value.token = token;
  ChangePasswordApi(value).then((result)=>{
    setPchange(result.message);
  })
  }
  const onFinishFailed=(err)=>{
    console.log(err)
  }
  return (

    <>
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
    {pchange!=""?
    <h4>{pchange}</h4>:""
    }
    <Title level={5}>Enter Your New Password </Title>
    
    <Form.Item
        
        name="password"
        rules={[
          {
            required: true,
            message: "Please input your password!",
          },
          {
            min:8,
            message: "Password too short should be minimum of 8 digit!",
          },
          {
            max:14,
            message: "Password too long should be maximum of 14 digit!",
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

    
      <Button
    
        type="primary"
        htmlType="submit"
      >
        Update Password
      </Button>

    </Form>

 </> );
      
};

export default ChangePasswordUi;
