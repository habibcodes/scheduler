// import react
import React from "react";
// component dependencies
import classNames from "classnames";
// styling
import "components/DayListItem.scss";

export default function DayListItem({name, selected, spots, setDay}) {
  // applies class conditionally if spots remain or not
  const dayClass = classNames("day-list__item", {
    "day-list__item--selected": selected,
    "day-list__item--full": !spots
  });

  const formatSpots = () => {
    if (spots === 1) {
      return "1 spot remaining";
    } else if (spots === 0) {
      return "no spots remaining";
    } else {
      return `${spots} spots remaining`
    }
  };

  return (
    <li 
      data-testid="day" 
      className={dayClass} 
      onClick={setDay} 
      selected={selected}
    >
      <h2 className="text--regular">{name}</h2>
      <h3 className="text--light">{formatSpots()}</h3>
    </li>
  );
};

