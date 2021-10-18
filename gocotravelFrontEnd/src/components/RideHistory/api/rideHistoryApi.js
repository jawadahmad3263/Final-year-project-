import { callApi } from "./../../../config/callApi";
const rideHistoryApi = async () => {
try {
    let method = "GET";
    let queryResult = await callApi("/rideHistory", method, null);
    console.log("quer",queryResult);
    return queryResult.data;
  } catch (e) {
    console.log(e);
  }
};

export default rideHistoryApi;