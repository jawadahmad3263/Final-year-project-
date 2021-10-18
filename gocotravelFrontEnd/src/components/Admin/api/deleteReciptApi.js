import { callApi } from "./../../../config/callApi";
const DeleteReciptApi = async (recipt_id) => {
  try {
    let method = "DELETE";
    let queryResult = await callApi("/deleteRecipt/" + recipt_id, method, null);
    return queryResult.data;
  } catch (e) {
    console.log(e);
  }
};

export default DeleteReciptApi;
