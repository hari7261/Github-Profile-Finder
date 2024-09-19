import React, { useState, useContext } from "react";
import { FaSearch, FaTimes } from "react-icons/fa"; 
import GithubContext from "../../context/github/githubContext";
import AlertContext from "../../context/alert/alertContext";

const Search = () => {
  const githubContext = useContext(GithubContext);
  const alertContext = useContext(AlertContext);

  const [text, setText] = useState("");

  const onChange = (e) => setText(e.target.value);

  const onSubmit = (e) => {
    e.preventDefault();
    if (text === "") {
      alertContext.setAlert("Please enter something", "light");
    } else {
      githubContext.searchUsers(text);
      setText("");
    }
  };

  return (
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
        </button>
      )}
    </div>
  );
};

export default Search;
