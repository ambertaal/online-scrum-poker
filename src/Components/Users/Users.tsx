import React from "react";

import UserItem from "./UserItem";
import Card from "../UI/Card";
import "./Users.css";

const Users = (props: any) => {
  return (
    <Card className="users">
      {props.items.map((user: any) => (
        <UserItem name={user.name} points={user.points} />
      ))}
    </Card>
  );
};

export default Users;
