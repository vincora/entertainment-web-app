import React from "react";
import logo from "../../assets/logo.svg";
import bookmarkIcon from "../../assets/icon-nav-bookmark.svg";
import homeIcon from "../..//assets/icon-nav-home.svg";
import moviesIcon from "../..//assets/icon-nav-movies.svg";
import tvSeriesIcon from "../..//assets/icon-nav-tv-series.svg";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar_logo"><img src={logo} alt="" /></div>
      <div className="navbar__links-group">
        <a href="" className="navbar__item"><img src={homeIcon} alt="" /></a>
        <a href="" className="navbar__item"><img src={moviesIcon} alt="" /></a>
        <a href="" className="navbar__item"><img src={tvSeriesIcon} alt="" /></a>
        <a href="" className="navbar__item"><img src={bookmarkIcon} alt="" /></a>
      </div>
      <a href="" className="navbar__avatar"><img src="" alt="" className="navbar__avatar-img" /></a>
    </nav>
  );
};

export default Navbar;
