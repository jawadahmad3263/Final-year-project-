import { callApi } from "./../../../config/callApi";
const EditRideApi = async (data) => {
  try {
    let method = "PUT";
    let queryResult = await callApi("/rideEdit", method, null,data);
    return queryResult.data;
  } catch (e) {
    console.log(e);
  }
};

export default EditRideApi;