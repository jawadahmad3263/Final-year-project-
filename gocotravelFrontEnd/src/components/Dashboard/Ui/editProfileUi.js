import React, { useState } from "react";
import ReactDom from "react-dom";
import "antd/dist/antd.css";
import {
  Form,
  Input,
  Button,
  Checkbox,
  InputNumber,
  Upload,
  Divider,
  message,
} from "antd";
import ImgCrop from "antd-img-crop";
import Password from "antd/lib/input/Password";
import "../../sign_up/assets/style/signup.css";
import { ContextOne } from "../../contexts/contexts";
import { Typography } from "antd";
import ImageUpload from "../../../config/ImageUpload"

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

const EditProfileUi = (props) => {
  let { state, dispatch } = React.useContext(ContextOne);

  const { onFinish, onFinishFailed,profileUpdate,setFile } = props;
  console.log("profileupdate",profileUpdate)
 
  return (
    <div>
      <Form
        {...layout}
        name="basic"
        initialValues={{
          name:state.userData.name,
          phone:state.userData.phone,
          address:state.userData.address,
          cnic:state.userData.cnic,
          city:state.userData.city,
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
              >
        <Title level={4}>Edit Profile</Title>
        <Form.Item
          name="name"
      
          rules={[
            {
             
              min: 3,
              max: 20,
              message: "Please input your fullname!",
              whitespace: true,
            },
            {
              pattern: new RegExp(
                /^[a-zA-Z]+(?:[\s.]+[a-zA-Z]+)*$/i
              ),
              message: "Please input alphabets only!",
            },
          ]}
        >
          <Input
         />
        </Form.Item>
        <Title level={5}>
          Do you want to change password.Please enter your new password
        </Title>

        <Form.Item
          name="password"
        
          rules={[
            {
              
              message: "Please input your password!",
            },
            {
              min: 8,
              message: "Password too short should be minimum of 8 digit!",
            },
            {
              max: 14,
              message: "Password too long should be maximum of 14 digit!",
            },
          ]}
          hasFeedback
        >
          <Input.Password placeholder={"New Password"} />
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
        <Divider />
        <Form.Item
          name="phone"
          rules={[
            {
              
              message: "Please input phone number!",
            },
            {
              min: 11,
              message: "Please input correct phone number!",
            },
            {
              max: 13,
              message: "Please input correct phone number!",
            },
          ]}
        >
          <Input
            
            defaultValue={state.userData.phone} 
            initialValues={state.userData.phone}
            style={{ width: "100%" }}
          />
        </Form.Item>

        <Form.Item
          name="address"
          rules={[
            {
              
              message: "Please input your Address!",
              whitespace: true,
            },
          ]}
        >
          <Input
          defaultValue={state.userData.address} 
          initialValues={state.userData.address}
          />
        </Form.Item>

        <Form.Item
          name="cnic"
          rules={[
            {
              
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
           defaultValue={state.userData.cnic}
           initialValues={state.userData.cnic}
            style={{ width: "100%" }}
          />
        </Form.Item>

        <Form.Item
          name="city"
          rules={[
            {
              
              message: "Please input the city currently living!",
            },
          ]}
        >
          <Input 
          defaultValue={state.userData.city}
          initialValues={state.userData.city}
           />
        </Form.Item>

        <div>
        <ImageUpload setFile={setFile} />
      </div>

        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit" className="dash-btn">
            Edit
          </Button>
        </Form.Item>
      </Form>
      {profileUpdate?
      <div>{
        <p>Your profile has been updated</p>
          }
      </div>:""
       }
    </div>
  );
};

export default EditProfileUi;
