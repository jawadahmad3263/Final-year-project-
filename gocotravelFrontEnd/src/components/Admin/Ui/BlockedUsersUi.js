import React, { useState, useEffect } from "react";
import "antd/dist/antd.css";
import { Card, Avatar, Button, Divider, Modal } from "antd";
import AllBlockUsersApi from "../api/getAllBlockUsersApi";
import BlockUserslist from "./BlockUserlist";
import Pagination from "./pagination";
const BlockedUsersCard = (props) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(5);
  useEffect(() => {
    setLoading(true);
    AllBlockUsersApi().then((result) => {
      console.log("all Block Users", result);
      setUsers(result);
      setLoading(false);
      console.log("all Users", result);
    });
  }, []);
  const indexOfLastPost = currentPage * usersPerPage;
  const indexOfFirstPost = indexOfLastPost - usersPerPage;
  const currentUsers = users.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <div>
      <h1 className="white">All Blocked Users</h1>
      <BlockUserslist users={currentUsers} loading={loading} />
      <Pagination
        usersPerPage={usersPerPage}
        totalUsers={users.length}
        paginate={paginate}
      />
    </div>
  );
};
export default BlockedUsersCard;
