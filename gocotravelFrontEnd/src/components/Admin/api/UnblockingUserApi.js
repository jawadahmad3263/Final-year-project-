import { callApi } from "./../../../config/callApi";
const UnBlockingUsersApi = async (user_id) => {
  try {
    let method = "PUT";
    let queryResult = await callApi("/unblockUser/"+user_id,method, null);
    return queryResult.data;
  } catch (e) {
    console.log(e);
  }
};

export default UnBlockingUsersApi;