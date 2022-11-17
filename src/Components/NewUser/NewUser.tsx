import React from "react";

import UserForm from "./UserForm";
import "./NewUser.css";

type Props = {
  // name: string;
  // points: string;
  onAddUser: any;
};

const NewUser = (props: Props) => {
  const saveUserDataHandler = (enteredUserData: any) => {
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
