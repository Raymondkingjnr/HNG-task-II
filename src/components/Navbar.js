import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import logo from "../images/tv.png";
import menu from "../images/Menu.png";

const Navbar = ({ search, setSearch, searchMovies }) => {
  return (
    <div className="nav-postion">
      <div className="nav">
        <div className="logo">
          <img src={logo} alt="logo" />
          <h3>Movie Box</h3>
        </div>
        <div className="input_big_screen">
          <form onSubmit={searchMovies}>
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              type="text"
              placeholder="what do you want to watch?"
            />
          </form>
          <div className="icon">
            <AiOutlineSearch />
          </div>
        </div>

        <div className="sign">
          <p>Sign in</p>
          <img src={menu} alt="menu" />
        </div>
      </div>
      <div className="input_small_screen">
        <form onSubmit={searchMovies}>
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            placeholder="what do you want to watch?"
          />
        </form>
        <div className="icon">
          <AiOutlineSearch />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
