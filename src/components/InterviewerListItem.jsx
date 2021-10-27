import React from "react";
import "components/InterviewerListItem.scss";
import classNames from "classnames";

// const interviewer = {
//   id: 1,
//   name: "Sylvia Palmer",
//   avatar: "https://i.imgur.com/LpaY82x.png"
// };

export default function InterviewerListItem({name, avatar, selected, setInterviewer}) {
  // const {id, name, avatar} = props;
  // console.log(props);

  //put classnames library stuff here conditionals for selected/not selected
  const interviewerItemClass = classNames("interviewers__item", {
    "interviewers__item--selected": selected,
    "interviewers__item--selected-image": selected
  })
  // click handler for setInterviewer

  return (
    <li className={interviewerItemClass} onClick={setInterviewer}>
      <img
        className="interviewers__item-image"
        src={avatar}
        alt={name}
      />
      {selected && name}
    </li>
  );
}