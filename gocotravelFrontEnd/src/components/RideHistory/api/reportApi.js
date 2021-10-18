import { callApi } from "./../../../config/callApi";
const reportApi = async (data) => {
try {
  
    let method = "POST";
    let queryResult = await callApi("/postReport", method, null,data);
    console.log("quer",queryResult);
    return queryResult.data;
  } catch (e) {
    console.log(e);
  }
};

export default reportApi;