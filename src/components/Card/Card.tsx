import React, { useState } from "react";
import { Link } from "react-router-dom";
import classes from "./Card.module.less";
import CardModal from "../CardModal/CardModal";

interface CardProps {}

{/* @ts-ignore */}
const Card: React.FC<CardProps> = ({ card }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <CardModal
        isOpen={isOpen}
        src={card?.images?.large}
        alt={card?.name}
        onClose={() => setIsOpen(false)}
      />
      <li
        className={`${classes.card} ${
          card.rarity && card.rarity?.includes("Holo")
            ? classes["card--holo"]
            : ""
        }`}
        onMouseOver={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          backgroundImage: `url(${card?.images?.small})`,
        }}
      >
        {isHovered && (
          <>
            <Link to={`/details/${card.name.toLowerCase()}`}>
              <button className={classes.card__detailsBtn}>
                Pokemon details
              </button>
            </Link>
            <button
              onClick={() => setIsOpen(true)}
              className={`${classes.card__detailsBtn} ${classes["card__detailsBtn--second"]}`}
            >
              Full size
            </button>
          </>
        )}
        <span
          className={`${classes.card__backdrop} ${
            isHovered ? classes["card__backdrop--hover"] : ""
          }`}
        />
      </li>
    </>
  );
};

export default Card;
