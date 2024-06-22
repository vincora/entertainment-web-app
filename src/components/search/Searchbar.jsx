import React from "react";
import SearchIcon from "../../assets/icon-search.svg";
import styles from "./Searchbar.module.scss";

const Searchbar = () => {
  return (
    <div className={styles.search}>
      <div className={styles.search__icon}>
        <img src={SearchIcon} width='24px' alt="search-icon" />
      </div>
      <input type="text" className={styles.search__input} placeholder="Search for movies or TV series"/>
    </div>
  );
};

export default Searchbar;
