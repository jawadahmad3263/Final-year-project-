import React, { useState, useEffect } from "react";
import "antd/dist/antd.css";
import { Card, Avatar, Button, Divider, Modal } from "antd";
import AllUsersApi from "../api/allUsersApi";
import Userslist from "./UsersList";
import Pagination from "./pagination";
const AllUsersCard = (props) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(5);
  useEffect(() => {
    setLoading(true);
    AllUsersApi().then((result) => {
      setUsers(result);
      setLoading(false);
      console.log("all Users", result);
    });
  }, []);
  // Get current users
  const indexOfLastPost = currentPage * usersPerPage;
  const indexOfFirstPost = indexOfLastPost - usersPerPage;
  const currentUsers = users.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <div>
      <h1 className="white">All Users List</h1>
      <Userslist users={currentUsers} loading={loading} />
      <Pagination
        usersPerPage={usersPerPage}
        totalUsers={users.length}
        paginate={paginate}
      />
    </div>
  );
};
export default AllUsersCard;
