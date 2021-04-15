import React from "react";
import PropTypes from "prop-types";

const GameCard = (props) => {
  return (
    <div>
      <h3>{props.title}</h3>
      <p> Availble on platforms:</p>
      <p>{props.platsforms}</p>
    </div>
  );
};

GameCard.propTypes = {
  title: PropTypes.string,
  platforms: PropTypes.string,
};

export default GameCard;

// Release date
// Platsforms
// metacritic rating
// image