import React from "react";

import styles from "./Header.module.css";
import Search from "../Search/Search";

function Header({ setQuery }: { setQuery: (search: string) => void }) {
  const handleSearch = (search: string) => {
    setQuery(search);
  };

  return (
    <header className={styles.header}>
      <h1 className={styles.header__title}>My Movies</h1>
      <Search onSearch={handleSearch} />
    </header>
  );
}

export default Header;
