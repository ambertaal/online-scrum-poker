import React from "react";

import Card from "../UI/Card";

const UserItem = (props: any) => {
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
