// import React modules
import React from "react";
// props validator
import PropTypes from 'prop-types';
// component dependancies
import InterviewerListItem from "./InterviewerListItem";
// styling
import "components/InterviewerList.scss";

export default function InterviewerList(props) {
  // create an array from interviewers, pass in props to component
  const parsedInterviewer = props.interviewers.map(interviewer => 
    <InterviewerListItem 
      key={interviewer.id} 
      selected={props.value === interviewer.id} 
      setInterviewer={() => props.onChange(interviewer.id)} 
      {...interviewer} 
    />
  );

  return (
    <section className="interviewers">
      {/* Renders the full list of interviewers from the db */}
      <h4 className="interviewers__header text--light">Interviewer</h4>
      <ul className="interviewers__list">
        {parsedInterviewer}
      </ul>
    </section>
  );  
}

  // validate proptype given to InterviewerList
  InterviewerList.propTypes = {
    interviewers: PropTypes.array.isRequired
};
