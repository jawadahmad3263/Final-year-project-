import { callApi } from "./../../../config/callApi";
const ActiveRideApi = async () => {
  try {
    let method = "GET";
    let queryResult = await callApi("/getSinglePost", method, null);
    return queryResult.data;
  } catch (e) {
    console.log(e);
  }
};

export default ActiveRideApi;
