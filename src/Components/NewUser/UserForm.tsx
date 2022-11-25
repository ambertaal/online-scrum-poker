import React, { useState } from "react";

import "./UserForm.css";

interface userData {
  name: string;
  points: string;
}

interface Props {
  onSaveUserData: (userData: userData) => void;
}

const UserForm = (props: Props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredPoints, setEnteredPoints] = useState("");

  const nameChangeHandler = (event: any) => {
    setEnteredName(event.target.value);
  };

  const pointsChangeHandler = (event: any) => {
    setEnteredPoints(event.target.value);
  };

  const submitHandler = (event: any) => {
    event.preventDefault();

    const userData = {
      name: enteredName,
      points: enteredPoints,
    };

    props.onSaveUserData(userData);
    setEnteredName("");
    setEnteredPoints("");
  };

  return (
    <div className="adduser">
      <form onSubmit={submitHandler}>
        <label>User name:</label>
        <input
          required
          type="text"
          placeholder="Name"
          value={enteredName}
          onChange={nameChangeHandler}
        />
        <label>Story Points:</label>
        <select value={enteredPoints} onChange={pointsChangeHandler}>
          <option value="2">2</option>
          <option value="?">?</option>
          <option value="3">3</option>
          <option value="5">5</option>
          <option value="8">8</option>
          <option value="13">13</option>
          <option value="20">20</option>
          <option value="40">40</option>
          <option value="100">100</option>
        </select>
        <button type="submit">Add estimate</button>
      </form>
    </div>
  );
};

export default UserForm;
