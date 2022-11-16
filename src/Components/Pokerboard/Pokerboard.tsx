import React, { useState } from "react";
import User from "../User/User";
import AddUserForm from "../AddUserForm";
import "./Pokerboard.css";

type UserObj = {
  id: number;
  name: string;
  points: string;
};

const Pokerboard = () => {
  const [users, setUsers] = useState<UserObj[]>([
    { id: 1, name: "Amber", points: "8" },
    { id: 2, name: "Martin", points: "5" },
    { id: 3, name: "Luuk", points: "20" },
  ]);

  const [visible, setVisible] = useState(false);

  const reset = () => {
    setUsers(
      users.map((user) => {
        return {
          ...user,
          points: "-",
        };
      })
    );
  };

  const addUser = (name: string, points: string) => {
    //1. Define a new person
    const newUser = {
      id: Math.max(...users.map((user: any) => user.id)) + 1,
      name: name,
      points: points,
    };
    //2. Add the new person to the array
    const newUsersArray = [...users, newUser];
    //3. Add the new array to the state
    setUsers(newUsersArray);
  };

  return (
    <div className="Pokerboard">
      <AddUserForm title="Add user" addUser={addUser} />

      <div className="container-estimates">
        <h2>Submit estimate</h2>
        <button>?</button>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>5</button>
        <button>8</button>
        <button>13</button>
        <button>20</button>
        <button>40</button>
        <button>100</button>
      </div>

      <h2>Results</h2>
      <div className="results-buttons">
        <button onClick={reset}>Delete estimates</button>
        <button onClick={() => setVisible(!visible)}>
          {visible ? "Hide" : "Show"}
        </button>
        {visible && (
          <div>
            <ul>
              {users.map((user) => (
                <User
                  key={user.id}
                  name={user.name}
                  id={user.id}
                  points={user.points}
                />
              ))}
            </ul>
          </div>
        )}
        {!visible && (
          <div>
            <p>
              Estimates are hidden. <br />
              Click 'show' to see the estimates.
            </p>
          </div>
        )}
        <div></div>
      </div>
    </div>
  );
};

export default Pokerboard;
