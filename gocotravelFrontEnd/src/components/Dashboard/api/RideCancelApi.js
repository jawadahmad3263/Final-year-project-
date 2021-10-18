import { callApi } from "./../../../config/callApi";
const RideCancelApi = async (post_id) => {
  try {
    let method = "PUT";
    let queryResult = await callApi("/rideCancel/"+post_id, method, null);
    return queryResult.data;
  } catch (e) {
    console.log(e);
  }
};

export default RideCancelApi;   