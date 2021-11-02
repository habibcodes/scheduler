import React from "react";
import Header from "./Header";
import Show from "./Show";
import Empty from "./Empty";
import useVisualMode from "hooks/useVisualMode";
import "components/Appointment/styles.scss";
import Form from "./Form";
import Status from "./Status";
import Confirm from "./Confirm";



export default function Appointment(props) {
  const EMPTY = "EMPTY";
  const SHOW = "SHOW";
  const CREATE = "CREATE";
  const SAVING = "SAVING";
  const DELETING = "DELETING";
  const CONFIRM = "CONFIRM";
  const EDIT = "EDIT";

  const { mode, transition, back } = useVisualMode(
    props.interview ? SHOW : EMPTY
  );

  // saves created interview from bookInterview
  function save(name, interviewer) {
    // console.log(interviewer);
    const interview = {
      student: name,
      interviewer      
    };
    transition(SAVING);
    props.bookInterview(props.id, interview).then(() => transition(SHOW));
    // shows booked
    // transition(SHOW);
  };

  // edit selected interview
  function edit(name, interviewer) {
    const interview = {
      student: name,
      interviewer      
    };
    transition(SAVING);
    props.bookInterview(props.id, interview).then(() => transition(EDIT));
  }

  // deletes existing interview
  function deleteInterview() {
    transition(DELETING);
     props.cancelInterview(props.id).then(() => transition(EMPTY));
  };

  console.log(props.interview);

  return (
    <article className="appointment">
      
      <Header id={props.id} time={props.time} />
      
      {/* Return empty if back is clicked */}
      {mode === EMPTY && 
        <Empty 
          onAdd={() => transition(CREATE)} 
        />}
      {/* Create a new appointment */}
      {mode === CREATE && 
        <Form 
        interviewers={props.interviewers}
        onCancel={back}
        onSave={save}   
        />
      }
      {mode === SAVING && 
        <Status message='Saving' />
      }
      {/* Show scheduled student interviews */}
      {mode === SHOW && (
        <Show
        student={props.interview ? props.interview.student : null}
        interviewer={props.interview ? props.interview.interviewer : null}
        bookInterview={props.bookInterview}
        onDelete={() => transition(CONFIRM)}
        onEdit={() => transition(EDIT)}
        />
        )}
      {mode === CONFIRM && (
        <Confirm
        message="Are you sure you would like to delete?"
        onCancel={back}
        onConfirm={deleteInterview}
        />
      )}
      {mode === DELETING && 
        <Status message='Deleting' />
      }

      {mode === EDIT && 
        <Form
          student={props.interview.student}
          interviewer={props.interview.interviewer.id}
          interviewers={props.interviewers}
          onCancel={back}
          onSave={save}          
        />
      }

    </article>
  );
}
