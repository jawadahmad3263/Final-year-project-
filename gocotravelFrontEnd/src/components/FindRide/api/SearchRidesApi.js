import { callApi } from "./../../../config/callApi";
const SearchRideApi = async (data) => {
  try {
    let pickup = new Date(data.pickUpDate);
    let againPick = pickup.toDateString();

    data.pickUpDate = againPick;
    let picktime = new Date(data.pickUpTime);
    picktime = picktime.toTimeString();

    data.pickUpTime = picktime;

    let method = "GET";
    let queryResult = await callApi(
      "/searchingPost/" +
        data.pick_up_city +
        "/" +
        data.drop_off_city +
        "/" +
        data.pickUpDate +
        "/" +
        data.pickUpTime,
      method,
      null,
      data
    );
    return queryResult.data;
  } catch (e) {
    console.log(e);
  }
};

export default SearchRideApi;
