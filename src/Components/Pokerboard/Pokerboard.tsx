import React, { useState } from "react";
import User from "../User/User";
import AddNameForm from "../AddUserForm";
import "./Pokerboard.css";

type UserObj = {
  id: number;
  name: string;
  points: number;
};

const Pokerboard = () => {
  const [users, setUsers] = useState<UserObj[]>([
    { id: 1, name: "Amber", points: 8 },
    { id: 2, name: "Martin", points: 5 },
    { id: 3, name: "Luuk", points: 20 },
  ]);

  const reset = () => {
    setUsers(
      users.map((user) => {
        return {
          ...user,
          points: 0,
        };
      })
    );
  };

  const addUser = (name: string) => {
    //1. Define a new person
    const newUser = {
      id: Math.max(...users.map((user: any) => user.id)) + 1,
      name: name,
      points: 0,
    };
    //2. Add the new person to the array
    const newUsersArray = [...users, newUser];
    //3. Add the new array to the state
    setUsers(newUsersArray);
  };

  const [visible, setVisible] = React.useState(false);

  return (
    <div className="Pokerboard">
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
              {users.map((user) => {
                return (
                  <User
                    key={user.id}
                    name={user.name}
                    id={user.id}
                    points={user.points}
                  />
                );
              })}
            </ul>
          </div>
        )}
        <div></div>
      </div>

      <AddNameForm title="Userform" addUser={addUser} />
    </div>
  );
};

export default Pokerboard;
