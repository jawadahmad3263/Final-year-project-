import SignUp from "../container/SignUp";
import { callApi } from "./../../../config/callApi";

const SignUpApi = async (data) => {
  const buildFormData = (formData, data, parentKey) => {
    if (
      data &&
      typeof data === "object" &&
      !(data instanceof Date) &&
      !(data instanceof File)
    ) {
      Object.keys(data).forEach((key) => {
        buildFormData(
          formData,
          data[key],
          parentKey ? `${parentKey}[${key}]` : key
        );
      });
    } else {
      const value = data == null ? "" : data;

      formData.append(parentKey, value);
    }
  };

  const jsonToFormData = (data) => {
    const formData = new FormData();

    buildFormData(formData, data);

    return formData;
  };
  const myData = jsonToFormData(data);

  try {
    let method = "POST";
    let type = "form";
    let queryResult = await callApi("/register", method, null, myData, type);
    return queryResult.data;
  } catch (e) {
    console.log(e);
  }
};
export default SignUpApi;
