import React, { useEffect, useState } from "react";
import SearchRideUi from "../Ui/searchRidesUi";
import SearchRideApi from "../api/SearchRidesApi";
const SearchRide = (props) => {
  const [searchLength, setSearchLength] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [loading, setLoading] = useState(false);

  const onFinish = (values) => {
    console.log("Success:", values);
    setLoading(true);
    SearchRideApi(values).then((result) => {
      console.log("yesss", result);
      if (result && result.length > 0) {
        setSearchResult(result);

        setSearchLength("yes");
        console.log("yesss", result);
        setLoading(false);
      } else if (result.length == 0) {
        setSearchLength("Zero post Try change time");
      }
    });
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <SearchRideUi
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      searchResult={searchResult}
      searchLength={searchLength}
      loading={loading}
    />
  );
};
export default SearchRide;
