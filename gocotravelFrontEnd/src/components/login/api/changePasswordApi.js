import { callApi } from "./../../../config/callApi";
const ChangePasswordApi = async (data) => {
try {
    let method = "POST";
    let queryResult = await callApi("/changePassword", method, null,data);
    console.log("quer",queryResult);
    return queryResult.data;
  } catch (e) {
    console.log(e);
  }
};

export default ChangePasswordApi;