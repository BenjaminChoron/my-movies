import React from "react";

import styles from "./Header.module.css";

export default function Header() {
  const [search, setSearch] = React.useState("");
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(search);
    setSearch("");
  };

  return (
    <header className={styles.header}>
      <h1 className={styles.header__title}>🎥 My Movies</h1>
      <form onSubmit={handleSubmit}>
        <input
          className={styles.header__searchInput}
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />
        <button type="submit" className={styles.header__searchButton}>
          Search
        </button>
      </form>
    </header>
  );
}
