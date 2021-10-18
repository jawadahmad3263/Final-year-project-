import { callApi } from "./../../../config/callApi";
const reviewApi = async (data) => {
try {
    let method = "POST";
    let queryResult = await callApi("/riderReview", method, null,data);
    console.log("quer",queryResult);
    return queryResult.data;
  } catch (e) {
    console.log(e);
  }
};

export default reviewApi;