import React,{useState,useEffect} from 'react';
import SignUpUi from '../Ui/SignUpUi';
import SignUpApi from '../api/SignUpApi';
import {ContextOne} from '../../contexts/contexts';
const formData = new FormData();
const SignUp=(props)=>{
  let  {state,dispatch}  = React.useContext(ContextOne);
  const [file,setFile] = useState([])
  const [afterReg,setAfterReg] = useState(false);
    const onFinish = (values) => {
console.log("yesssss",file)
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
     
      SignUpApi(values).then(result=>{
       
        if(result){
          
            if(result.Message === "welcome"){ setAfterReg(true);}
        }
     console.log(result,"Lets see");
    
      })
        console.log("Success:", values);
      };
    

      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };

    return<SignUpUi onFinish={onFinish} afterReg={afterReg}
    onFinishFailed={onFinishFailed} setFile={setFile}/>

}
export default SignUp;