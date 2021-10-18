import VehicalInfo from "../Ui/vehicalInfo";
import { callApi } from "./../../../config/callApi";
const getConfirmUserApi = async (rider_id) => {
    //here rider id is actually confirm user id
  try {
    let method = "GET";
    let queryResult = await callApi("/getUserById/"+rider_id, method, null,"");
    return queryResult.data;
  } catch (e) {
    console.log(e);
  }
};

export default getConfirmUserApi;