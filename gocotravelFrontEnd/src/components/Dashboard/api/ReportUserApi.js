import { callApi } from "./../../../config/callApi";
const reportUserApi = async (data) => {
try {
    let method = "POST";
    let queryResult = await callApi("/reportUser", method, null,data);
    console.log("quer",queryResult);
    return queryResult.data;
  } catch (e) {
    console.log(e);
  }
};

export default reportUserApi;