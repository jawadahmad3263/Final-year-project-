import React from "react";
import { Avatar, Button } from "antd";
import BlockingUsersApi from "../api/blockingUserApi";
import UnBlockingUsersApi from "../api/UnblockingUserApi";
const BlockUserslist = ({ users, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  const UnblockUser = (user_id) => {
    UnBlockingUsersApi(user_id).then((result) => {
      if (result) console.log("user is", result.message);
    });
  };
  return (
    <ul className="list-group mb-4">
      {users.map((user) => (
        <li key={user._id} className="list-group-item">
          <div>
            <div className="userlist-main-div">
              <div style={{ float: "left" }}>
                <Avatar
                  src={user.image}
                  size={{
                    xs: 34,
                    sm: 40,
                    md: 50,
                    lg: 64,
                    xl: 80,
                    xxl: 100,
                  }}
                />
              </div>
              <div className="userdata white">
                {user.name}
                <br />
                {user.email}
                <br />
                {user.phone}
              </div>
            </div>
            <div>
              <div className="text-align">
                <Button
                  type={"primary"}
                  onClick={() => {
                    UnblockUser(user._id);
                  }}
                >
                  Unblock User
                </Button>
              </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default BlockUserslist;
