import { callApi } from "../../../config/callApi";
const getSingleUserReportApi = async () => {
  //here rider id is actually confirm user id
  try {
    let method = "GET";
    let queryResult = await callApi("/singleUserReports", method, null, "");
    return queryResult.data;
  } catch (e) {
    console.log(e);
  }
};

export default getSingleUserReportApi;
