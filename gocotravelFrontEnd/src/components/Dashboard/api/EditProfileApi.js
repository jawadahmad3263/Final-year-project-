import { callApi } from "./../../../config/callApi";
const EditProfileApi = async (data) => {
  const buildFormData=(formData, data, parentKey)=> {
    if (data && typeof data === 'object' && !(data instanceof Date) && !(data instanceof File)) {
      Object.keys(data).forEach(key => {
        buildFormData(formData, data[key], parentKey ? `${parentKey}[${key}]` : key);
      });
    } else {
      const value = data == null ? '' : data;
  
      formData.append(parentKey, value);
    }
  }
  
  const jsonToFormData=(data)=> {
    const formData = new FormData();
    
    buildFormData(formData, data);
    
    return formData;
  }
  const myData=jsonToFormData(data);
console.log("mydata",myData)

  try {
   
        let type = "form"
        let method = "PUT";
    let queryResult = await callApi("/userEditing", method, null, myData,type);

    return queryResult.data;
  } catch (err) {
    console.log(err);
  }
};

export default EditProfileApi;
