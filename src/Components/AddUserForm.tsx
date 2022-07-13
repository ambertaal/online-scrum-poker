import React, { useState } from "react";

type Props = {
  title: string;
  addUser: (name: string) => void;
};

const AddUserForm = (props: Props) => {
  const [name, setName] = useState("");

  return (
    <div className="AddUserForm">
      <h1>{props.title}</h1>
      <form
        onSubmit={(event: any) => {
          event.preventDefault();
          props.addUser(name);
          setName("");
        }}
      >
        <p>
          Add new user:
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />{" "}
          <button type="submit">Add</button>
        </p>
      </form>
    </div>
  );
};

export default AddUserForm;
