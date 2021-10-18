import React, { useState, useEffect } from "react";
import EditProfileUi from "../Ui/editProfileUi";
import EditProfileApi from "../api/EditProfileApi";
import NavbarApi from "../../navbar/api/NavbarApi";
import { ContextOne } from "../../contexts/contexts";
const EditProfile = (props) => {
  let { state, dispatch } = React.useContext(ContextOne);

    const [profileUpdate,setProfileUpdate] = useState(false);
    const [file,setFile] = useState([])

  const onFinish = (values) => {
    values.file = file[0];

    if(values.phone.slice(0,2)==="92")
    values.phone=values.phone;
   else if(values.phone.slice(0,1)==="0")
   {
     let ph = values.phone.slice(1,11)
     console.log("here ph is ",ph)
     values.phone = "+92".concat(ph);
     console.log(" now here ph is ",values.phone);
   }
   
    EditProfileApi(values).then(result=>{
      if(result && result.Message =="Updated"){
    
        setProfileUpdate(true)
        NavbarApi().then((result) => {
          console.log("jakjakj")
          if (result) {
            dispatch({ type: "login", payload: result });
          }
        })
        console.log("Success:", result);  
      }
    })
      
    };
  
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  
  return <EditProfileUi onFinish={onFinish} onFinishFailed={onFinishFailed} profileUpdate={profileUpdate}  setFile={setFile} />;
};
export default EditProfile;
