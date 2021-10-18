import { callApi } from "./../../../config/callApi";
const checkReviewApi = async (post_id) => {
try {
  
    let method = "GET";
    let queryResult = await callApi("/checkReview/"+post_id, method, null);
    console.log("quer",queryResult);
    return queryResult.data;
  } catch (e) {
    console.log(e);
  }
};

export default checkReviewApi;