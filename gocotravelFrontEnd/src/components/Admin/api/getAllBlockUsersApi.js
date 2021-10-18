import { callApi } from "./../../../config/callApi";
const AllBlockUsersApi = async () => {
  try {
    let method = "GET";
    let queryResult = await callApi("/getAllBlockUsers", method, null);
    return queryResult.data;
  } catch (e) {
    console.log(e);
  }
};

export default AllBlockUsersApi;
