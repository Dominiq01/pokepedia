import React from "react";
import classes from "./CardList.module.less";
import Card from "../Card/Card";

interface CardListProps {
  cards: Array<object>[];
}

{
  /* @ts-ignore */
}
const CardList: React.FC<CardListProps> = ({ cards }) => {
  return (
    <>
    <div className={classes["card-list-container"]}>
      {cards.length > 0 ? (
        <ul className={classes["card-list-container__card-list"]}>
          {/* @ts-ignore */}
          {cards.map((card) => (
            /* @ts-ignore */
            <Card key={card.id} card={card} />
          ))}
        </ul>
      ) : (
        <p className={classes["card-list-container__no-cards"]}>
          No cards found
        </p>
      )}
    </div>
    </>
  );
};

export default CardList;
