import { callApi } from "./../../../config/callApi";
const AllUsersApi = async () => {
  try {
    let method = "GET";
    let queryResult = await callApi("/getAllUsers", method, null);
    return queryResult.data;
  } catch (e) {
    console.log(e);
  }
};

export default AllUsersApi;
