// import React from "react";
// import {Route,Redirect} from "react-router-dom";
// //import Login from "../components/login/containers/Login";
// function ProtectedRoute({
//     component:Component,
//     message:Message,
//     ...rest
// }){
//     console.log("message",Message)
//       return(
//           <Route
//           {...rest}
//           render={(props)=>{
//             <>{console.log(props)?<div>aa</div>:""}
//             <div>{Message===true?
                
//                 <Component {...props}/>:
//                 <Redirect to={{pathname:"/Login", state:{from:props.location}}} />
        
//             }</div></>
//           }}
//           /> );
   
// }
//     export default ProtectedRoute;