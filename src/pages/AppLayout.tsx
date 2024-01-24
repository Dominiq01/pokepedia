import { useState } from "react";

import CardList from "../components/CardList/CardList";
import Pagination from "../components/Pagination/Pagination";
import ErrorMessage from "../components/ErrorMessage/ErrorMessage";
import Loader from "../components/Loader/Loader";
import Header from "../components/Header/Header";
import Searchbar from "../components/Searchbar/Searchbar";
import { useCards } from "../context/CardsProvider";

const CARDS_PER_PAGE = 8;

const AppLayout = () => {
  const { cards, isLoading, error } = useCards();
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastCard = currentPage * CARDS_PER_PAGE;
  const indexOfFirstCard = indexOfLastCard - CARDS_PER_PAGE;
  const currentCards = cards.slice(indexOfFirstCard, indexOfLastCard);

  const onPageChangeHandler = (num: number) => {
    setCurrentPage(num);
  };

  return (
    <>
      <Header />
      <Searchbar/>
      <main>
        {!isLoading && !error && (
          <>
            <CardList cards={currentCards} />
            <Pagination
              onPageChange={onPageChangeHandler}
              total={cards.length}
              itemsPerPage={CARDS_PER_PAGE}
            />
          </>
        )}
        {error && !isLoading && <ErrorMessage children={error} />}
        {isLoading && <Loader />}
      </main>
    </>
  );
};

export default AppLayout;
