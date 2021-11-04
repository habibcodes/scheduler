// import React
import React from "react";
// component dependencies
import classNames from "classnames";
// styling
import "components/InterviewerListItem.scss";

export default function InterviewerListItem({name, avatar, selected, setInterviewer}) {
  // conditionally render class for interviewers
  const interviewerItemClass = classNames("interviewers__item", {
    "interviewers__item--selected": selected,
    "interviewers__item--selected-image": selected
  })

  return (
    <li 
      className={interviewerItemClass} 
      onClick={setInterviewer}
    >
      {/* Renders interviewer img circle */}
      <img
        className="interviewers__item-image"
        src={avatar}
        alt={name}
      />
      {/* Conditionally render name when selected */}
      {selected && name}
    </li>
  );
}