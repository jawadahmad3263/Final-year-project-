import { callApi } from "./../../../config/callApi";
const ContactAdminApi = async (data) => {
  console.log("data here is ", data);
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
  console.log("yes i m here");
  const myData = jsonToFormData(data);
  console.log("mydata", myData);
  try {
    console.log("here in contact admin api");
    console.log("data here is ", data);
    let method = "POST";
    let type = "form";
    let queryResult = await callApi(
      "/contactAdminApi",
      method,
      null,
      myData,
      type
    );
    return queryResult.data;
  } catch (e) {
    console.log(e);
  }
};

export default ContactAdminApi;
