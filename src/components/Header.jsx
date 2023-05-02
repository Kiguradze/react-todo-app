import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <header className="header">
      <div className="container">
        <Link to="/">TO DO</Link>
        <div className="user">
          <p>{user.name}</p>
          <div className="user-img">
            <img src={user.image} alt="" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
