import React from "react";
import InterviewerListItem from "./InterviewerListItem";
import classNames from "classnames";
import "components/InterviewerList.scss";

export default function InterviewerList(props) {
  // console.log(props); // array + setInt func here
  console.log(props.selected);

  const parsedInterviewer = props.interviewers.map(interviewer => <InterviewerListItem 
  key={interviewer.id} 
  selected={props.interviewer === interviewer.id} 
  // setInterviewer={props.setInterviewer}
  setInterviewer={() => props.setInterviewer(interviewer.id)} 
  {...interviewer} 
  />
  );

  return (
    <section className="interviewers">
      <h4 className="interviewers__header text--light">Interviewer</h4>
      <ul className="interviewers__list">
        {parsedInterviewer}
      </ul>
    </section>
  );
}