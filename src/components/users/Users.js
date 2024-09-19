import React, { useContext } from "react";
import UserItem from "./UserItem";
import Spinner from "../layout/Spinner";
import GithubContext from "../../context/github/githubContext";

const Users = () => {
  const githubContext = useContext(GithubContext);
  const { loading, users } = githubContext;

  if (loading) {
    return <Spinner />;
  } else {
    return (
<<<<<<< HEAD
      <div className="users-grid">
=======
      <div className="user-style">
>>>>>>> origin/main
        {users.map(user => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    );
  }
};

export default Users;
