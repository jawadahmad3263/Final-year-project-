import { callApi } from "./../../../config/callApi";
const ApplytoRideApi = async (id) => {
try {
    let method = "PUT";
    let queryResult = await callApi("/requestedUser/"+id, method, null);
    console.log("quer",queryResult);
    return queryResult.data;
  } catch (e) {
    console.log(e);
  }
};

export default ApplytoRideApi;