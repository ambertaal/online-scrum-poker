import React from "react";

import UserItem from "./UserItem";
import Card from "../UI/Card";
import "./Users.css";

const Users = (props: any) => {
  return (
    <Card className="users">
      <UserItem name={props.items[0].name} points={props.items[0].points} />
      <UserItem name={props.items[1].name} points={props.items[1].points} />
      <UserItem name={props.items[2].name} points={props.items[2].points} />
    </Card>
  );
};

export default Users;
