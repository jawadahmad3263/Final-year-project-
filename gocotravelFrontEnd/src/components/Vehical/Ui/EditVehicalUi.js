import React, {useState} from "react";
import "antd/dist/antd.css";
import { Form, Input, Button, InputNumber} from "antd";
import { Typography } from 'antd';
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
const EditVehicalUi = (props) =>{

  const { onFinish, onFinishFailed ,setFile,vehicalResult} = props;
    
      return (
        <div>

      <Form
        {...layout}
       name="basic"
       initialValues={{
        remember: true,
       }}
       onFinish={onFinish}
       onFinishFailed={onFinishFailed}
       className={"vehicalForm"}
        >
          <Title className={"titleCss"} level={4}>Fill your Vehical Info</Title>
          <Form.Item
           
           name="car_number"
           rules={[
           {
             required: true,
             message: "Please input car number!",
            },
           ]}
            >
           <Input placeholder="Car Number" />   
          </Form.Item>
          <Form.Item
           
           name="car_type"
           rules={[
           {
             required: true,
             message: "which type of car u have!",
            },
           ]}
            >
           <Input placeholder="enter the car u have/alto/corrolla etc" />   
          </Form.Item>
          <Form.Item
           
           name="car_color"
           rules={[
           {
             required: true,
             message: "Please input the color of your car!",
            },
           ]}
            >
             
           <Input placeholder="Car color" />
       
          </Form.Item>
          <Form.Item
           
           name="licence_number"
           rules={[
           {
             required: true,
             message: "Please input your driving licence number!",
            },
           ]}
            >
             
           <Input placeholder="Your Licence Number" />
       
          </Form.Item>
          <div>
        <ImageUpload setFile={setFile} />
      </div>
      
          <Form.Item {...tailLayout}>
        <Button className='dash-btn'  type="primary" htmlType="submit">
          Change Vehical
        </Button>
      </Form.Item>
        </Form>   
    </div>
      );

};

export default EditVehicalUi;