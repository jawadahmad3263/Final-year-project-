import { callApi } from "./../../../config/callApi";
const RequestedUserApi = async (Rdata) => {
  try {
    let method = "GET";
    const reqUser_id = Rdata.reqUser_id;
    const post_id = Rdata.post_id;
    let queryResult = await callApi(
      "/getRequestedUser/" + reqUser_id + "/" + post_id,
      method,
      null
    );
    return queryResult.data;
  } catch (e) {
    console.log(e);
  }
};

export default RequestedUserApi;
