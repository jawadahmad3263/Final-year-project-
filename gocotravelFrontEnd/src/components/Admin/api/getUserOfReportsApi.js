import { callApi } from "./../../../config/callApi";
const getUserOfReportApi = async (id) => {
  //here rider id is actually confirm user id
  try {
    console.log("here in get confirmUser api");
    let method = "GET";
    let queryResult = await callApi(
      "/getUserOfReportById/" + id,
      method,
      null,
      ""
    );
    return queryResult.data;
  } catch (e) {
    console.log(e);
  }
};

export default getUserOfReportApi;
