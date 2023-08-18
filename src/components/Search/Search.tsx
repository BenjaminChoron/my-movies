import React from "react";

import styles from "./Search.module.css";

function Search({ onSearch }: { onSearch: (search: string) => void }) {
  const [search, setSearch] = React.useState("");
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSearch(search);
    setSearch("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className={styles.searchInput}
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />
      <button type="submit" className={styles.searchButton}>
        Search
      </button>
    </form>
  );
}

export default Search;
