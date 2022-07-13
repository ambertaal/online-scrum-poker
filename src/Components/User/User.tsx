import React from "react";
import "./User.css";

type Props = {
  id: number;
  key: number;
  name: string;
  points: number;
};

const User = (props: Props) => {
  return (
    <li className="User">
      <div
        className="percentage_coloring"
        style={{ width: props.points + "%" }}
      />
      <p>
        {props.name} (Story Points: {props.points}){" "}
      </p>
    </li>
  );
};

export default User;
