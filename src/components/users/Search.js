import React, { useState, useContext } from "react";
<<<<<<< HEAD
import { FaSearch, FaTimes } from "react-icons/fa"; 
=======
>>>>>>> origin/main
import GithubContext from "../../context/github/githubContext";
import AlertContext from "../../context/alert/alertContext";

const Search = () => {
  const githubContext = useContext(GithubContext);
  const alertContext = useContext(AlertContext);

  const [text, setText] = useState("");

<<<<<<< HEAD
  const onChange = (e) => setText(e.target.value);

  const onSubmit = (e) => {
=======
  const onChange = e => setText(e.target.value);

  const onSubmit = e => {
>>>>>>> origin/main
    e.preventDefault();
    if (text === "") {
      alertContext.setAlert("Please enter something", "light");
    } else {
      githubContext.searchUsers(text);
      setText("");
    }
  };

  return (
<<<<<<< HEAD
    <div className="search-container">
      <form onSubmit={onSubmit} className="form">
        <div className="input-group">
          <FaSearch className="icon" />
          <input
            type="text"
            name="text"
            placeholder="Search GitHub users..."
            value={text}
            onChange={onChange}
            className="search-input"
          />
        </div>
        <input
          type="submit"
          value="Search"
          className="btn btn-blue btn-block"
        />
      </form>

      {githubContext.users.length > 0 && (
        <button
          className="btn btn-light btn-block clear-btn"
          onClick={githubContext.clearUsers}
        >
          <FaTimes className="icon" /> Clear
=======
    <div>
      <form onSubmit={onSubmit} className="form">
        <input
          type="text"
          name="text"
          placeholder="Search users..."
          value={text}
          onChange={onChange}
        />
        <input
          type="submit"
          value="Search"
          className="btn btn-dark btn-block"
        />
      </form>
      {githubContext.users.length > 0 && (
        <button
          className="btn btn-light btn-block"
          onClick={githubContext.clearUsers}
        >
          Clear
>>>>>>> origin/main
        </button>
      )}
    </div>
  );
};

export default Search;
