import React, { useState, useEffect } from "react";
import axios from "axios";

import "components/Application.scss";
import DayList from "./DayList";
import Appointment from "./Appointment";
import { getAppointmentsForDay, getInterviewersForDay, getInterview } from "helpers/selectors";

export default function Application(props) {
  /* const [day, setDay] = useState("Monday");
  // for /days API call
  const [days, setDays] = useState([]); */
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {}
  });

  const setDay = day => setState({...state, day});
  // const setDays = days => setState(prev => ({...prev, days}));

  const dailyAppointments = getAppointmentsForDay(state, state.day);
  const interviewers = getInterviewersForDay(state, state.day);
  // console.log(interviewers);

  // map appointments
  // const parsedAppointments = dailyAppointments.map((appointment) => <Appointment key={appointment.id} {...appointment} />);

  function bookInterview(id, interview) {
    // console.log(id, interview);
    // creates appointment object
    const appointment = {
      ...state.appointments[id],
      interview: { ...interview }
    };
    // updates existing record with mataching id
    const appointments = {
      ...state.appointments,
      [id]: appointment
    };
    // API call to PUT data in db and
    // call setState with new appointment state object
    return axios
            .put(`/api/appointments/${id}`, {interview})
            .then(() => {
              // console.log(response);
              // return response
              setState(prev => ({...prev, appointments}));
            })    
  }

  // cancel interview
 function cancelInterview(id, interview) {
  //  console.log('cancelInterview id: ', id)
   const appointment = {
     ...state.appointments[id],
     interview: null    
   };
   const appointments = {
     ...state.appointments,
     [id]: appointment
   }
   console.log(appointments);
   return axios
            .delete(`/api/appointments/${id}`)
            .then(() => {
              setState(prev => ({...prev, appointments}));
            })
 }

  // map interviewers
  const schedule = dailyAppointments.map((appointment) => {
    const interview = getInterview(state, appointment.interview);

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


  // GET request to /api
  useEffect(() => {
    Promise.all([
      axios.get('/api/days'),
      axios.get('/api/appointments'),
      axios.get('/api/interviewers')
    ]).then((all) => {
      setState(prev => ({...prev, days: all[0].data, appointments: all[1].data, interviewers: all[2].data }))
      // console.log(all);
      })
    }, []);

  
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
      <section className="schedule">
        {schedule}
        <Appointment key="last" time="5pm" />
      </section>
    </main>
  );
}
