import React,{useState} from "react";
import "antd/dist/antd.css";
import { Form, Input, Button } from "antd";
import { Typography } from "antd";
import ChangePasswordUi from "./changePasswordUi";
import ForgetPasswordApi from "../api/forgetPasswordApi";

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

const ForgetPasswordUi = (props) => {
  const [nextPage,setNextPage] =  useState("no")
  const [foundEmail,setFoundEmail] =  useState("")
  console.log("nextpage",nextPage)

    const onFinish=(value)=>{
    ForgetPasswordApi(value).then((result)=>{
      // console.log("successfullll",result)
      // if(result.message==="found")
      // setNextPage("yes");
      // else
      setFoundEmail(result.message);
    })
    }
    const onFinishFailed=(err)=>{
      console.log(err)
    }

  return (
<>
    <div>
      {foundEmail==="found"?
    <div className="div-card"><h4>Check Your Email</h4></div>:
    
  
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

    <h1  className="end-text2">Enter Your Email</h1>
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
    {foundEmail==="email not found"?
    <p style={{color: "red"}}>Given Email is not Valid</p>:""

    }
    
      <Button
    
        type="primary"
        htmlType="submit"
        className='b-button'
      >
        Reset Password
      </Button>
     
    </Form>
}
     
 </div> </>);
      
};

export default ForgetPasswordUi;
