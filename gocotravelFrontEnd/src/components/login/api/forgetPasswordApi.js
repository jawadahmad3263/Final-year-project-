import { callApi } from "./../../../config/callApi";
const ForgetPasswordApi = async (data) => {
try {
  
    let method = "POST";
    let queryResult = await callApi("/forgetPassword", method, null,data);
    console.log("quer",queryResult);
    return queryResult.data;
  } catch (e) {
    console.log(e);
  }
};

export default ForgetPasswordApi;