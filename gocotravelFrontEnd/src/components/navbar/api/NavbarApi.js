import { callApi } from "./../../../config/callApi";
const NavbarApi = async (data) => {
  try {
    let method = "POST";
    let queryResult = await callApi("/getSingleUser", method, null, data);
    return queryResult.data;
  } catch (e) {
    console.log(e);
  }
};

export default NavbarApi;
