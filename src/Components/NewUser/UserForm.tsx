import React, { useState } from "react";

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

  const estimationPoints = ["?", 2, 3, 5, 8, 13, 20, 40, 100];

  return (
    <div className="adduser">
      <h1 id="2">Test titel</h1>
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
        {estimationPoints.map((point) => {
          return (
            <>
              <br></br>
              <input
                type="radio"
                id={`estimationPoint_${point}`}
                name="estimationPoints"
                value={point}
                onChange={pointsChangeHandler}
              />
              <label htmlFor={`estimationPoint_${point}`}>{point}</label>
            </>
          );
        })}
        ;<button type="submit">Add estimate</button>
      </form>
    </div>
  );
};

export default UserForm;
