import React, { Fragment, useEffect, useContext } from "react";
import Spinner from "../layout/Spinner";
import Repos from "../repos/Repos";
import { Link } from "react-router-dom";
<<<<<<< HEAD
import { FaCheck, FaTimesCircle, FaGithub, FaLink, FaBuilding } from "react-icons/fa"; // Icons for styling
=======
>>>>>>> origin/main
import GithubContext from "../../context/github/githubContext";

const User = ({ match }) => {
  const githubContext = useContext(GithubContext);
  const { getUser, loading, user, repos, getUserRepos } = githubContext;

  useEffect(() => {
    getUser(match.params.login);
    getUserRepos(match.params.login);
    // eslint-disable-next-line
  }, []);

  const {
    name,
    avatar_url,
    company,
    location,
    bio,
    blog,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    hireable
  } = user;

  if (loading) return <Spinner />;

  return (
    <Fragment>
<<<<<<< HEAD
      <Link to="/" className="btn btn-light btn-back">
        Back to Search
      </Link>
      <p className="hireable-status">
        Hireable:{" "}
        {hireable ? (
          <FaCheck className="text-success" />
        ) : (
          <FaTimesCircle className="text-danger" />
        )}
      </p>
=======
      <Link to="/" className="btn btn-light">
        Back to Search
      </Link>
      Hireable:{" "}
      {hireable ? (
        <i className="fas fa-check text-success" />
      ) : (
        <i className="fas fa-times-circle text-danger" />
      )}
>>>>>>> origin/main
      <div className="card grid-2">
        <div className="all-center">
          <img
            src={avatar_url}
            className="round-img"
            alt=""
            style={{ width: "150px" }}
          />
          <h1>{name}</h1>
          <p>Location: {location}</p>
        </div>
        <div>
          {bio && (
            <Fragment>
              <h3>Bio</h3>
              <p>{bio}</p>
            </Fragment>
          )}
<<<<<<< HEAD
          <a href={html_url} className="btn btn-blue my-1" target="_blank" rel="noopener noreferrer">
            <FaGithub className="icon" /> Visit GitHub Profile
=======
          <a href={html_url} className="btn btn-dark my-1">
            Visit GitHub Profile
>>>>>>> origin/main
          </a>
          <ul>
            <li>
              {login && (
                <Fragment>
                  <strong>Username: </strong> {login}
                </Fragment>
              )}
            </li>
            <li>
              {company && (
                <Fragment>
<<<<<<< HEAD
                  <FaBuilding className="icon" /> <strong>Company: </strong> {company}
=======
                  <strong>Company: </strong> {company}
>>>>>>> origin/main
                </Fragment>
              )}
            </li>
            <li>
              {blog && (
                <Fragment>
<<<<<<< HEAD
                  <FaLink className="icon" /> <strong>Website: </strong>
=======
                  <strong>Website: </strong>
>>>>>>> origin/main
                  <a href={`http://${blog}`} target="__blank">
                    {blog}
                  </a>
                </Fragment>
              )}
            </li>
          </ul>
        </div>
      </div>
      <div className="card text-center">
        <div className="badge badge-primary">Followers: {followers}</div>
        <div className="badge badge-light">Following: {following}</div>
<<<<<<< HEAD
        <div className="badge badge-success">Public Repositories: {public_repos}</div>
=======
        <div className="badge badge-success">
          Public Repositories: {public_repos}
        </div>
>>>>>>> origin/main
        <div className="badge badge-dark">Public Gists: {public_gists}</div>
      </div>
      <Repos repos={repos} />
    </Fragment>
  );
};

export default User;
