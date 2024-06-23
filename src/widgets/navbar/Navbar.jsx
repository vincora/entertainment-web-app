import React from "react";
import Logo from "../../../public/assets/logo.svg?react";
import BookmarkIcon from "../../../public/assets/icon-nav-bookmark.svg?react";
import HomeIcon from "../../../public/assets/icon-nav-home.svg?react";
import MoviesIcon from "../../../public/assets/icon-nav-movies.svg?react";
import TvSeriesIcon from "../../../public/assets/icon-nav-tv-series.svg?react";
import avatar from "../../../public/assets/image-avatar.png";
import styles from "./Navbar.module.scss";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbar__logo}>
        <Logo />
      </div>
      <div className={styles.navbar__links}>
        <Link to={"/"} className={styles.navbar__item}>
          <HomeIcon />
        </Link>
        <Link to={"/movies"} className={styles.navbar__item}>
          <MoviesIcon />
        </Link>
        <Link to={"/tv-series"} className={styles.navbar__item}>
          <TvSeriesIcon />
        </Link>
        <Link to={"/bookmarked"} className={styles.navbar__item}>
          <BookmarkIcon />
        </Link>
      </div>
      <a href="" className={styles.navbar__avatar}>
        <img src={avatar} alt="" className="navbar__avatar-img" />
      </a>
    </nav>
  );
};

export default Navbar;
