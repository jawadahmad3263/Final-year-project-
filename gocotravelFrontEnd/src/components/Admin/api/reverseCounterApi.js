import { callApi } from "./../../../config/callApi";
const reverseCounterApi = async (userId) => {
try {
    console.log("userId",userId);
    let method = "PUT";
    let queryResult = await callApi("/reverseCounter/"+userId, method, null);
    console.log("quer",queryResult);
    return queryResult.data;
  } catch (e) {
    console.log(e);
  }
};

export default reverseCounterApi;