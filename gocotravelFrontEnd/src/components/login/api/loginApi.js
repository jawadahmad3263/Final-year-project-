import { callApi } from "./../../../config/callApi";
const loginApi = async (data) => {
  try {
   
    let method = "POST";
    let queryResult = await callApi("/login", method, null, data);

    return queryResult.data;
  } catch (e) {
    console.log(e);
  }
};

export default loginApi;
