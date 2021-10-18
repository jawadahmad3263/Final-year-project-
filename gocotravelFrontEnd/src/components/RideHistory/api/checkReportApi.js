import { callApi } from "./../../../config/callApi";
const checkReportApi = async (post_id) => {
try {
    let method = "GET";
    let queryResult = await callApi("/checkReport/"+post_id, method, null);
    console.log("quer",queryResult);
    return queryResult.data;
  } catch (e) {
    console.log(e);
  }
};

export default checkReportApi;