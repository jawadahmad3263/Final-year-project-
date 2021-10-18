import { callApi } from "./../../../config/callApi";
const RideStartApi = async (post_id) => {
  try {
    let method = "PUT";
    let queryResult = await callApi("/rideStart/"+post_id, method, null);
    return queryResult.data;
  } catch (e) {
    console.log(e);
  }
};

export default RideStartApi;   