import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
<<<<<<< HEAD
import { FaUserCircle } from "react-icons/fa"; // Adding an icon for the user

const UserItem = ({ user: { login, avatar_url, bio } }) => {
  return (
    <div className="card-custom hover">
      <div className="card-custom-img" style={{ backgroundImage: `url(${avatar_url})` }}>
        <div className="overlay">
          <div className="overlay-content">
            <Link className="hover" to={`/user/${login}`}>
              View Details
            </Link>
          </div>
        </div>
      </div>

      <div className="card-custom-content text-center">
        <img src={avatar_url} className="round-img" alt="User" />
        <h2>{login}</h2>
        {bio ? <p>{bio}</p> : <p>No bio available</p>}
        <Link to={`/user/${login}`} className="btn btn-dark btn-sm my-1">
          More <FaUserCircle className="icon" />
        </Link>
      </div>
    </div>
=======

const UserItem = ({ user: { login, avatar_url, html_url, bio } }) => {
  return (
    <div className="card-custom text-center">
      <img
        src={avatar_url}
        className="round-img"
        alt="User"
        style={{ width: "120px", marginTop: "10px" }}
      />
      <h3>{login}</h3>
      <div>
        <Link to={`/user/${login}`} className="btn btn-dark btn-sm my-1">
          More
        </Link>
      </div>
    </div>
    // <div className="card-custom hover">
    //   <div
    //     className="card-custom-img"
    //     style={{ backgroundImage: `url(${avatar_url})` }}
    //   >
    //     <div className="overlay">
    //       <div className="overlay-content">
    //         <Link className="hover" to={`/user/${login}`}>
    //           View Details
    //         </Link>
    //       </div>
    //     </div>
    //   </div>

    //   <div className="card-custom-content">
    //     <a href="#!">
    //       <h2>{login}</h2>
    //       <p>{bio}</p>
    //       {console.log(bio)}
    //     </a>
    //   </div>
    // </div>
>>>>>>> origin/main
  );
};

UserItem.propTypes = {
<<<<<<< HEAD
  user: PropTypes.object.isRequired,
=======
  user: PropTypes.object.isRequired
>>>>>>> origin/main
};

export default UserItem;
