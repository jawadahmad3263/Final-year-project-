import React, {useState} from "react";
import "antd/dist/antd.css";
import { Form, Input, Button, InputNumber} from "antd";
import { Typography } from 'antd';
import { Link } from "react-router-dom";
import ImageUpload from "../../../config/ImageUpload"
import Ride from "../../Ride/Ui/RideUi";
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
const vehicalUi = (props) =>{

  const { onFinish, onFinishFailed ,setFile,vehicalResult} = props;
    
      return (
      <div style={{marginTop:"12%",color:"white"}}>
          {vehicalResult==="Vehical has been posted"?(
    // <div className="div-card"><h4>{vehicalResult}</h4>
    // <Link to="/Ride">Now click here to post a ride</Link>
         <Ride/>)
    :

    
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
          {vehicalResult==="Car number entered is already registered here"?
    <p style={{color: "red"}}>{vehicalResult}:Enter correct Number</p>:""

    }
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
          {vehicalResult==="Given licence number already registered here"?
    <p style={{color: "red"}}>{vehicalResult}:Enter correct Licence Number</p>:""

    }
          <div>
        <ImageUpload setFile={setFile} />
      </div>
      
          <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit" className="ride-btn">
          Post Vehical
        </Button>
      </Form.Item>
        </Form>   
       }  </div>
      );

};

export default vehicalUi;