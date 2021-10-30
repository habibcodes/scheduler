import React from "react";
import Header from "./Header";
import Show from "./Show";
import Empty from "./Empty";
import useVisualMode from "hooks/useVisualMode";
import "components/Appointment/styles.scss";
import Form from "./Form";



export default function Appointment(props) {
  const EMPTY = "EMPTY";
  const SHOW = "SHOW";
  const CREATE = "CREATE";

  const { mode, transition, back } = useVisualMode(
    props.interview ? SHOW : EMPTY
  );

  // const textDisplay = () => {
  //   if (props.time) {
  //     return `Appointment at ${props.time}`
  //   } else {
  //     return 'No Appointments';
  //   }
  // }

  // console.log(props);



  return (
    <article className="appointment">
      {/* <header id={props.id}>{props.time} </header> */}
      <Header id={props.id} time={props.time} />
      {/* {textDisplay()} */}
      {/* {props.interview ? <Show student={props.interview} /> : <Empty />} */}
      {/* {props.interview ? <Show student={props.interview.student} interviewer={props.interview.interviewer} /> : <Empty />} */}
      {mode === EMPTY && 
        <Empty 
          onAdd={() => transition(CREATE)} 
        />}
        {mode === CREATE && 
          <Form 
          interviewers={props.interviewers}
          onCancel={back}
          />
        }
      {mode === SHOW && (
        <Show
          student={props.interview.student}
          interviewer={props.interview.interviewer}
        />
    )}
    </article>
  );
}