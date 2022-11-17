import React, { useState } from "react";

import NewUser from "../NewUser/NewUser";
import Users from "../Users/Users";
import "./Pokerboard.css";

interface User {
  id: number;
  name: string;
  points: string;
}

const Pokerboard = () => {
  const [users, setUsers] = useState<User[]>([
    { id: 1, name: "Amber", points: "8" },
    { id: 2, name: "Martin", points: "5" },
    { id: 3, name: "Luuk", points: "20" },
  ]);

  const addUserHandler = (name: string, points: string) => {
    const newUser = {
      id: Math.max(...users.map((user: any) => user.id)) + 1,
      name: name,
      points: points,
    };
    //2. Add the new person to the array
    const newUsersArray = [...users, newUser];
    //3. Add the new array to the state
    setUsers(newUsersArray);
  };

  return (
    <div className="Pokerboard">
      <NewUser onAddUser={addUserHandler} />
      <Users items={users} />
    </div>
  );
};

export default Pokerboard;
