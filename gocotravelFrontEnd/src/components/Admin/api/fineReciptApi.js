import { callApi } from "./../../../config/callApi";
const fineReciptApi = async (id) => {
  try {
    let method = "GET";
    let queryResult = await callApi("/fineRecipt/" + id, method, null);
    return queryResult.data;
  } catch (e) {
    console.log(e);
  }
};

export default fineReciptApi;
