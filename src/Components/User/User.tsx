import React from "react";
import "./User.css";

type Props = {
  id: number;
  key: number;
  name: string;
  points: string;
};

const User = (props: Props) => {
  return (
    <li className="User">
      <div />
      <p>
        {props.name} (Story Points: {props.points}){" "}
      </p>
    </li>
  );
};

export default User;
