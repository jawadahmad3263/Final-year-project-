import { callApi } from "./../../../config/callApi";
const getSingleReportApi = async (reportId) => {
  try {
    let method = "GET";
    let queryResult = await callApi(
      "/getSingleReportById/" + reportId,
      method,
      null
    );
    return queryResult.data;
  } catch (e) {
    console.log(e);
  }
};

export default getSingleReportApi;
