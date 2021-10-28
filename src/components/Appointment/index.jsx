import React, { Fragment } from "react";
import Header from "./Header";
import Show from "./Show";
import Empty from "./Empty";
import "components/Appointment/styles.scss";


export default function Appointment(props) {

  // const textDisplay = () => {
  //   if (props.time) {
  //     return `Appointment at ${props.time}`
  //   } else {
  //     return 'No Appointments';
  //   }
  // }

  return (
    <article className="appointment">
      <header id={props.id}>{props.time} </header>
      {/* {textDisplay()} */}
      {/* {props.interview ? <Show student={props.interview} /> : <Empty />} */}
      {props.interview ? <Show student={props.interview.student} interviewer={props.interview.interviewer} /> : <Empty />}
    </article>
  );
}