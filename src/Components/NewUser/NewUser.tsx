import React from "react";

import UserForm from "./UserForm";

interface Props {
  onAddUser: any;
}

interface EnteredUserData {
  name: string;
  points: string;
}

const NewUser = (props: Props) => {
  const saveUserDataHandler = (enteredUserData: EnteredUserData) => {
    const userData = {
      ...enteredUserData,
      id: Math.random().toString(),
    };
    props.onAddUser(userData);
  };

  return (
    <div className="User">
      <div />
      <UserForm onSaveUserData={saveUserDataHandler} />
    </div>
  );
};

export default NewUser;
