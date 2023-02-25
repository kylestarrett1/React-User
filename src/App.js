import React, { useState, Fragment } from "react";

import AddUser from "./components/User/AddUser";
import UserList from "./components/User/UserList";

const App = () => {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (userName, userAge) => {
    setUsersList((prevUsersList) => {
      return [
        ...prevUsersList,
        {
          id: Math.random().toString(),
          username: userName,
          age: userAge,
        },
      ];
    });
  };

  return (
    <Fragment>
      <AddUser onAddUser={addUserHandler} />
      {usersList.length !== 0 ? <UserList users={usersList} /> : ""}
    </Fragment>
  );
};

export default App;
