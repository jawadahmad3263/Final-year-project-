import Vehical from "../container/Vehical";
import { callApi } from "./../../../config/callApi";

const VehicalApi = async (data) => {
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
    let type = "form";
    let method = "POST";
    let queryResult = await callApi("/vehical", method, null, myData, type);
    return queryResult.data;
  } catch (e) {
    console.log(e);
  }
};
export default VehicalApi;
