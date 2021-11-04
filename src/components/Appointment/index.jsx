// import React
import React from "react";
// component dependencies for Appointment form
import Header from "./Header";
import Show from "./Show";
import Empty from "./Empty";
import Form from "./Form";
import Status from "./Status";
import Confirm from "./Confirm";
import Error from "./Error";
// custom hooks
import useVisualMode from "hooks/useVisualMode";
// styling
import "components/Appointment/styles.scss";


export default function Appointment(props) {
  // modes
  const EMPTY = "EMPTY";
  const SHOW = "SHOW";
  const CREATE = "CREATE";
  const SAVING = "SAVING";
  const DELETING = "DELETING";
  const CONFIRM = "CONFIRM";
  const EDIT = "EDIT";
  const ERROR_SAVE = "ERROR_SAVE";
  const ERROR_DELETE = "ERROR_DELETE";

  // custom hook called here
  const { mode, transition, back } = useVisualMode(
    props.interview ? SHOW : EMPTY
  );

  // saves created interview from bookInterview
  // and shows book-transition
  function save(name, interviewer) {
    const interview = {
      student: name,
      interviewer      
    };
    transition(SAVING, true);
    props
      .bookInterview(props.id, interview)
      .then(() => transition(SHOW))
      .catch((error) => {
        console.error(error);
        transition(ERROR_SAVE, true)
      });    
  };

  // deletes existing interview
  function deleteInterview() {
    transition(DELETING, true);
    props
      .cancelInterview(props.id)
      .then(() => transition(EMPTY))
      .catch((error) => {
        console.error(error);
        transition(ERROR_DELETE, true)
      });
  };

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

      {/* Renders saving transition and message */}
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

      {/* Render confirm appointment */}
      {mode === CONFIRM && (
        <Confirm
        message="Are you sure you would like to delete?"
        onCancel={back}
        onConfirm={deleteInterview}
        />
      )}

      {/* Renders deleting transition and message */}
      {mode === DELETING && 
        <Status message='Deleting' />
      }

      {/* Render the editting options */}
      {mode === EDIT && 
        <Form
          student={props.interview.student}
          interviewer={props.interview.interviewer.id}
          interviewers={props.interviewers}
          onCancel={back}
          onSave={save}          
        />
      }

      {/* Renders the Error-on Save/Delete messages */}
      {mode === ERROR_SAVE && (
        <Error
          message="Could not save appointment!"
          onClose={back}
        />
      )}
      {mode === ERROR_DELETE && (
        <Error
          message="Could not delete appointment!"
          onClose={back}
        />
      )}

    </article>
  );
}
