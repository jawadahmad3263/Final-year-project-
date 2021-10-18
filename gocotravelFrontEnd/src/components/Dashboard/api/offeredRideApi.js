import { callApi } from "./../../../config/callApi";
const OfferedRideApi = async () => {
  try {
    let method = "GET";
    let queryResult = await callApi("/getAllPostsOfRider", method, null);
    return queryResult.data;
  } catch (e) {
    console.log(e);
  }
};

export default OfferedRideApi;
