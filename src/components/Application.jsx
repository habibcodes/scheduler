// imports from React
import React from "react";
// hooks
import { useApplicationData } from '../hooks/useApplicationData';
// selectors
import { getAppointmentsForDay, getInterviewersForDay, getInterview } from "helpers/selectors";
// component dependancies
import DayList from "./DayList";
import Appointment from "./Appointment";
// styling
import "components/Application.scss";

export default function Application(props) {
  // all state data in custom hook is called here----------
  const {
    state,
    setDay,
    bookInterview,
    cancelInterview
  } = useApplicationData();

  // get dailyAppointments via selector----------
  const dailyAppointments = getAppointmentsForDay(state, state.day);
  // get day's interviewers via selector----------
  const interviewers = getInterviewersForDay(state, state.day);

  // map the interviewers----------
  const schedule = dailyAppointments.map((appointment) => {
    const interview = getInterview(state, appointment.interview);
    // returns to render the Appointment component
    return (
      <Appointment 
        key={appointment.id} 
        {...appointment} 
        interview={interview} 
        interviewers={interviewers} 
        bookInterview={bookInterview}
        cancelInterview={cancelInterview}
      />
    )
  })
  
  return (
    <main className="layout">
      <section className="sidebar">
      <img
        className="sidebar--centered"
        src="images/logo.png"
        alt="Interview Scheduler"
      />
      <hr className="sidebar__separator sidebar--centered" />
      <nav className="sidebar__menu">
        {/* This is where the DayList nav renders */}
        <DayList
          days={state.days}
          value={state.day}
          onChange={setDay}
        />
      </nav>
      <img
        className="sidebar__lhl sidebar--centered"
        src="images/lhl.png"
        alt="Lighthouse Labs"
      />
      </section>
      {/* This is where the day's appointments render */}
      <section className="schedule">
        {schedule}
        <Appointment key="last" time="5pm" />
      </section>
    </main>
  );
}
