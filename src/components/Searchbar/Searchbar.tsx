import React, { useState } from "react";
import classes from "./Searchbar.module.less";
import Button from "../Button/Button";
import { useCards } from "../../context/CardsProvider";

const Searchbar = () => {
  const { onSearchHandler } = useCards();
  const [query, setQuery] = useState("");

  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!query.trim()) return;
    onSearchHandler(query);
    setQuery("");
  };

  return (
    <form className={classes["searchbar-container"]} onSubmit={onSubmitHandler}>
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search by name..."
        className={classes["searchbar-container__searchbar"]}
        type="text"
      ></input>
      <Button type="submit">Search</Button>
    </form>
  );
};

export default Searchbar;
