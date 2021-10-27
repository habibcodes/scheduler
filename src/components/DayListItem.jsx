import React from "react";
import "components/DayListItem.scss";
import classNames from "classnames";

export default function DayListItem({name, selected, spots, setDay}) {
  // const handleClick = () => setDay(); 
  // const {setDay, name} = props;
   
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
  }

  return (
    <li className={dayClass} onClick={setDay} selected={selected}>
      <h2 className="text--regular">{name}</h2>
      <h3 className="text--light">{formatSpots()}</h3>
    </li>
  );
}

// how shortcircut && works //
// If(somethingTrue) && returnsThis
// somethingTrue ? returnThis:somethingTrue;