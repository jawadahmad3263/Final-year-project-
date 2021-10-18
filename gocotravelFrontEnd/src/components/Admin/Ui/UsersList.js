import React, { useState } from "react";
import { Avatar, Button,Modal } from "antd";
import BlockingUsersApi from "../api/blockingUserApi";
import UnBlockingUsersApi from "../api/UnblockingUserApi";
const Userslist = ({ users, loading }) => {
  const [mesg,setMesg] = useState("");
  const [visible,setVisible] = useState(false);
  if (loading) {
    return <h2>Loading...</h2>;
  }
  
  const BlockUser = (user_id) => {
    BlockingUsersApi(user_id).then((result) => {
      if (result) {
      setMesg("User profile has been block");
      setVisible(true);  
    }
    });
  };
  const UnblockUser = (user_id) => {
    UnBlockingUsersApi(user_id).then((result) => {
      if (result) {
      setMesg("User profile is Unblock");
      setVisible(true);  
    }
    });
  };
  const handleOk = () => {
    setVisible(false);
    
  };
  return (

    <ul className="list-group mb-4">
      {users.map((user) => (
        <li key={user._id} className="list-group-item">
          <div>
            <div className="userlist-main-div">
              <div>
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

            <div className="text-align">
              {user.isblock === false ? (
                <Button
                  type={"danger"}
                  onClick={() => {
                    BlockUser(user._id);
                  }}
                >
                  Block User
                </Button>
              ) : (
                <Button
                  type={"primary"}
                  onClick={() => {
                    UnblockUser(user._id);
                  }}
                >
                  Unblock User
                </Button>
              )}
              
            </div>
            <Modal
                    visible={visible}
                    title="Notification"
                    onCancel={handleOk}
                    footer={[
                      <Button
                        key="submit"
                        type="primary"
                        onClick={handleOk}
                        className="ride-btn"
                      >
                        OK
                      </Button>,
                    ]}
                  >
                  <div className="div-card"><h4>{mesg}</h4></div>
            </Modal>
          </div>
        </li>
      ))}
    </ul>
 

  );
};

export default Userslist;
