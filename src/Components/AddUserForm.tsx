import React, { useState } from "react";

import "./AddUserForm.css";

type Props = {
  title: string;
  addUser: (name: string, points: string) => void;
};

const AddUserForm = (props: Props) => {
  const [name, setName] = useState("");
  const [points, setPoints] = useState("");

  const handleSubmit = (event: any) => {
    event.preventDefault();
    const user = { name, points };
    console.log(user);
    props.addUser(name, points);
    // setName("");
    // setPoints("");
  };

  return (
    <div className="adduser">
      <h2>{props.title}</h2>
      <form onSubmit={handleSubmit}>
        <label>User name:</label>
        <input
          required
          type="text"
          placeholder="Name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <label>Story Points:</label>
        <select
          value={points}
          onChange={(event) => setPoints(event.target.value)}
        >
          <option value="?">?</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="5">5</option>
          <option value="8">8</option>
          <option value="13">13</option>
          <option value="20">20</option>
          <option value="40">40</option>
          <option value="100">100</option>
        </select>
        <button type="submit">Add</button>
        <p>
          {name}, Story Points: {points}
        </p>
      </form>
    </div>
  );
};

export default AddUserForm;
