import { callApi } from "./../../../config/callApi";
const ConfirmUserApi = async (data) => {
  try {
    let method = "PUT";
    let queryResult = await callApi("/confirmUser", method, null,data);
    return queryResult.data;
  } catch (e) {
    console.log(e);
  }
};

export default ConfirmUserApi;   