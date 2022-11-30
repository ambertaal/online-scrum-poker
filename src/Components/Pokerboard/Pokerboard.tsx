import React, { useState } from "react";

import NewUser from "../NewUser/NewUser";
import Users from "../Users/Users";

interface newUser {
  id: number;
  name: string;
  points: string;
}

const DUMMY_USERS = [
  { id: 1, name: "Amber", points: "8" },
  { id: 2, name: "Martin", points: "5" },
  { id: 3, name: "Luuk", points: "20" },
];

const Pokerboard = () => {
  const [users, setUsers] = useState(DUMMY_USERS);

  const addUserHandler = (newUser: newUser) => {
    setUsers([...users, newUser]);
  };

  return (
    <div className="Pokerboard">
      <NewUser onAddUser={addUserHandler} />
      <Users items={users} />
    </div>
  );
};

export default Pokerboard;
