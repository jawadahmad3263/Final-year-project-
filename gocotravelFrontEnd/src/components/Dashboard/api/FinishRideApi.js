import { callApi } from "./../../../config/callApi";
const FinishRideApi = async (post_id) => {
  try {
    let method = "PUT";
    let queryResult = await callApi("/rideComplete/"+post_id, method, null);
    return queryResult.data;
  } catch (e) {
    console.log(e);
  }
};

export default FinishRideApi;   