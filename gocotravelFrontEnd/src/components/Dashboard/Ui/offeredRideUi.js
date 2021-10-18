import React, { useState, useEffect } from "react";
import "../assets/dashboard.css";
import ConfirmedUserUi from "./confirmedUserUi";
import { ContextOne } from "../../contexts/contexts";
import OfferedRideApi from "../api/offeredRideApi";
import OfferedRideList from "./offeredRideList";
import RidesPagination from "../../RideHistory/Ui/ridesPagination";
const OfferedRideUi = (props) => {
  let { state, dispatch } = React.useContext(ContextOne);
  const [offeredRide, setOfferedRide] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [offeredridePerPage] = useState(2);
  useEffect(() => {
    setLoading(true);
    OfferedRideApi().then((result) => {
      if (result.success === true) setOfferedRide(result.post);
      setLoading(false);
    });
  }, []);

  const indexOfLastPost = currentPage * offeredridePerPage;
  const indexOfFirstPost = indexOfLastPost - offeredridePerPage;
  const currentOfferedride = offeredRide.slice(
    indexOfFirstPost,
    indexOfLastPost
  );

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <div style={{overflow:"hidden"}}>
      <h1>All Offered Rides</h1>

      <OfferedRideList offeredride={currentOfferedride} loading={loading} />

      <RidesPagination
        ridesPerPage={offeredridePerPage}
        totalRides={offeredRide.length}
        paginate={paginate}
      />
    </div>
  );
};
export default OfferedRideUi;
