import React, { useState, useEffect } from "react";
import "antd/dist/antd.css";
import { Card, Avatar, Button, Divider, Modal } from "antd";
import AllReportsApi from "../api/getAllReportsApi";
import ReportList from "./ReportListUi";
import ReportPagination from "./reportPagination";
const ReportListCard = (props) => {
  const [reports, setReports] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [reportsPerPage] = useState(5);
  useEffect(() => {
    setLoading(true);
    AllReportsApi().then((result) => {
      if (result) {
        setReports(result);
        setLoading(false);
        console.log("all reports", result);
      }
    });
  }, []);
  //get current report
  const indexOfLastPost = currentPage * reportsPerPage;
  const indexOfFirstPost = indexOfLastPost - reportsPerPage;
  const currentReport = reports.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <div>
      <h1 className="white">Reports List</h1>

      <ReportList reports={currentReport} loading={loading} />
      <ReportPagination
        reportsPerPage={reportsPerPage}
        totalReports={reports.length}
        paginate={paginate}
      />
    </div>
  );
};
export default ReportListCard;
