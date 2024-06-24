import React from "react";
import Logo from "../../assets/logo.svg?react";
import BookmarkIcon from "../../assets/icon-nav-bookmark.svg?react";
import HomeIcon from "../../assets/icon-nav-home.svg?react";
import MoviesIcon from "../../assets/icon-nav-movies.svg?react";
import TvSeriesIcon from "../../assets/icon-nav-tv-series.svg?react";
import avatar from "../../assets/image-avatar.png";
import styles from "./Navbar.module.scss";
import { Link, useLocation } from "react-router-dom";
import cn from "clsx";

const Navbar = () => {

  const location = useLocation();

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbar__logo}>
        <Logo />
      </div>
      <div className={styles.navbar__links}>
        <Link to={"/"} className={cn(styles.navbar__item, {[styles.navbar__item_active]: location.pathname === '/'})}>
          <HomeIcon />
        </Link>
        <Link to={"/movies"} className={cn(styles.navbar__item, {[styles.navbar__item_active]: location.pathname === '/movies'})}>
          <MoviesIcon />
        </Link>
        <Link to={"/tv-series"} className={cn(styles.navbar__item, {[styles.navbar__item_active]: location.pathname === '/tv-series'})}>
          <TvSeriesIcon />
        </Link>
        <Link to={"/bookmarked"} className={cn(styles.navbar__item, {[styles.navbar__item_active]: location.pathname === '/bookmarked'})}>
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
