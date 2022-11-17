import React, { useState } from "react";

import Card from "../UI/Card";
import "./UserItem.css";

const UserItem = (props: any) => {
  // function clickHandler() {}

  console.log("UserItem evaluated by React");

  return (
    <Card className="user-item">
      <div className="user-item__description">
        <h2>{props.name}</h2>
        <div className="user-item__points">Story Points: {props.points}</div>
      </div>
    </Card>
  );
};

export default UserItem;
