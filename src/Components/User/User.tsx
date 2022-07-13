import React from "react";
import "./User.css";

type Props = {
  id: number;
  key: number;
  name: string;
  storypoints: number;
};

const User = (props: Props) => {
  return (
    <li className="User">
      <div
        className="percentage_coloring"
        style={{ width: props.storypoints + "%" }}
      />
      <p>
        {props.name} (storypoints: {props.storypoints}){" "}
      </p>
    </li>
  );
};

export default User;
