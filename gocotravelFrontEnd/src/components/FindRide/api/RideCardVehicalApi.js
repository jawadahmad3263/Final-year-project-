import { callApi } from "./../../../config/callApi";
const RideCardVehicalApi = async (car_id) => {
try {
    let method = "GET";
    let queryResult = await callApi("/getPostVehical/"+car_id, method, null);
    console.log("querrrr",queryResult);
    return queryResult.data;
  } catch (e) {
    console.log(e);
  }
};

export default RideCardVehicalApi;