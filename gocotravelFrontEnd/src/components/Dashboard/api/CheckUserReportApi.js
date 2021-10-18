import { callApi } from "./../../../config/callApi";
const checkUserReportApi = async (data) => {
  try {
    let post_id = data.post_id;
    let user_id = data.user_id;
    let method = "GET";
    let queryResult = await callApi(
      "/checkReportOnUser/" + post_id + "/" + user_id,
      method,
      null
    );
    console.log("quer", queryResult);
    return queryResult.data;
  } catch (e) {
    console.log(e);
  }
};

export default checkUserReportApi;
