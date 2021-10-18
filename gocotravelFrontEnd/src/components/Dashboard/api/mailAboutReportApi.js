import { callApi } from "./../../../config/callApi";
const mailAboutReportApi = async (data) => {
  try {
    let method = "POST";
    let queryResult = await callApi(
      "/mailAbtReportToAdmin",
      method,
      null,
      data
    );
    console.log("quer", queryResult);
    return queryResult.data;
  } catch (e) {
    console.log(e);
  }
};

export default mailAboutReportApi;
