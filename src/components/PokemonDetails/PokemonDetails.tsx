import React from "react";
import { Link, useLoaderData } from "react-router-dom";

import classes from "./PokemonDetails.module.less";
import Button from "../Button/Button";
import Loader from "../Loader/Loader";

interface PokemonDetailsProps {}

export const onShowDetailsHandler = async (name: string) => {
  try {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    if (!res.ok) throw new Error("Cannot fetch details");
    const details = await res.json();
    return { details };
  } catch (err) {
    console.log(err);
    return {};
  }
};

const PokemonDetails: React.FC<PokemonDetailsProps> = ({}) => {
  //@ts-ignore
  const { details } = useLoaderData();

  const getStatIcon = (stat: string) => {
    switch (stat) {
      case "hp":
        return "❤️";
      case "attack":
        return "🥊";
      case "defense":
        return "🛡️";
      case "special-attack":
        return "⚔️";
      case "special-defense":
        return "🥋";
      case "speed":
        return "⚡";
    }
  };

  return !details ? (
    <Loader />
  ) : (
    <div className={classes["pokemon-details-container"]}>
      <Link to={"/app"}>
        <Button style={{ alignSelf: "start" }}>&larr; Go back</Button>
      </Link>
      <div className={classes["pokemon-details-container__details"]}>
        <img
          className={classes["pokemon-details-container__details__img"]}
          src={details.sprites.other.dream_world.front_default}
        />
        <h3 className={classes["pokemon-details-container__details__name"]}>
          {details.name}
        </h3>
        <p className={classes["pokemon-details-container__details__weight"]}>
          Weight: {details.weight}
        </p>
        <ul className={classes["pokemon-details-container__details__stats"]}>
          {details.stats.map((stat: any) => (
            <li
              className={
                classes["pokemon-details-container__details__stats__stat"]
              }
            >
              <p>
                {getStatIcon(stat.stat.name)}
                {stat.stat.name}:
              </p>
              <span>{stat.base_stat}</span>
            </li>
          ))}
        </ul>
        <h4
          className={
            classes["pokemon-details-container__details__abilities-title"]
          }
        >
          Abilities:
        </h4>
        <ul
          className={classes["pokemon-details-container__details__abilities"]}
        >
          {details.abilities.map((a: any) => (
            <li>
              <p>{a.ability.name}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PokemonDetails;
