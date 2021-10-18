import Ride from "../container/Ride";
import { callApi } from "./../../../config/callApi";

const RideApi = async (data) => {
  try {
    let pickup = new Date(data.pick_up_date);
    console.log("pickup..",pickup)
    let againPick = pickup.toDateString();
     
    console.log(againPick, "hola");
    data.pick_up_date = againPick;
    let picktime = new Date(data.pick_up_time);
    picktime = picktime.toTimeString();
    console.log("here time is", picktime);
    data.pick_up_time = picktime;
    let method = "POST";
    let queryResult = await callApi("/postride", method, null, data);
    return queryResult.data;
  } catch (e) {
    console.log(e);
  }
};
export default RideApi;
