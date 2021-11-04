// import React and hooks
import React, { useState } from "react";
// component dependencies
import Button from "components/Button";
import InterviewerList from "components/InterviewerList";

export default function Form(props) {
  const [student, setStudent] = useState(props.student || "");
  const [interviewer, setInterviewer] = useState(props.interviewer || null);
  const [error, setError] = useState("");

  // clear setStates
  const reset = () => {
    setStudent("");
    setInterviewer("");
  }
  // resets setStates when cancel clicked
  const cancel = () => {
    reset();
    props.onCancel();
  }
  // prevent empty input before submission
  function validate() {
    if (student === "") {
      setError("Student name cannot be blank");
      return;
    }
    // clear any errors and pass props to onSave 
    setError(""); 
    props.onSave(student, interviewer);
  }
  
  return (
    <main className="appointment__card appointment__card--create">
      <section className="appointment__card-left">        
        <form autoComplete="off" onSubmit={e => e.preventDefault()}>
          <input
            className="appointment__create-input text--semi-bold"
            name="name"
            type="text"
            placeholder="Enter Student Name"
            value={student}
            onChange={(e) => setStudent(e.target.value)}
            data-testid="student-name-input"
          />            
        </form>
        {/* Displays form validation errors */}
        <section className="appointment__validation">
          {error}
        </section>
        {/* Renders interviewers */}
        <InterviewerList 
          interviewers={props.interviewers} 
          value={interviewer} 
          onChange={setInterviewer} 
        />        
      </section>
      <section className="appointment__card-right">
        <section className="appointment__actions">
          <Button danger onClick={cancel}>Cancel</Button>
          <Button confirm onClick={validate}>Save</Button>
        </section>
      </section>
    </main>
  )
}