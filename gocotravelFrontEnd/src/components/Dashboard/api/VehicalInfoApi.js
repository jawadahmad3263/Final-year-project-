
import { callApi } from "./../../../config/callApi";
const VehicalInfoApi = async (data) => {
  try {
    let method = "GET";
    let queryResult = await callApi("/gettingVehical", method, null, data,"");
    return queryResult.data;
  } catch (e) {
    console.log(e);
  }
};

export default VehicalInfoApi;