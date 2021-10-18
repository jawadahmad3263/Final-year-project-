import { callApi } from "./../../../config/callApi";
const AllReportsApi = async () => {
  try {
    let method = "GET";
    let queryResult = await callApi("/getAllReports", method, null);
    return queryResult.data;
  } catch (e) {
    console.log(e);
  }
};

export default AllReportsApi;
