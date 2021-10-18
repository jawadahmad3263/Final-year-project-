import BlockedUsersCard from "../Ui/BlockedUsersUi";
import { callApi } from "./../../../config/callApi";
const BlockingUsersApi = async (user_id) => {
  try {
    let method = "PUT";
    let queryResult = await callApi("/blockUser/"+user_id,method, null);
    return queryResult.data;
  } catch (e) {
    console.log(e);
  }
};

export default BlockingUsersApi;