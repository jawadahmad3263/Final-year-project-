import { callApi } from "./../../../config/callApi";
const RideInfoApi = async (rider_id) => {
try {
    let method = "GET";
    let queryResult = await callApi("/getUserById/"+rider_id, method, null);
    console.log("querrrr",queryResult);
    return queryResult.data;
  } catch (e) {
    console.log(e);
  }
};

export default RideInfoApi;