// import React and hooks
import React, {useState, useEffect} from "react";
// Axios API caller import
import axios from 'axios';


export function useApplicationData(props) {
  // state setter----------
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {}
  });

  // day setter----------
  const setDay = day => setState({...state, day});

  // books interview----------
  function bookInterview(id, interview) {
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
              // return response
              setState(prev => ({...prev, appointments}));
            })            
            .then(() => {
              setState(prev => 
                ({...prev, 
                  days: updateSpots(prev.day, prev.days, prev.appointments)}));
            });    
  }

  // cancels interview----------
  function cancelInterview(id, interview) {
    const appointment = {
      ...state.appointments[id],
      interview: null    
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment
    }
   
    return axios
              .delete(`/api/appointments/${id}`)
              .then(() => {
                setState(prev => ({...prev, appointments}));
              })
              .then(() => {
                setState(prev => 
                  ({...prev, 
                    days: updateSpots(prev.day, prev.days, prev.appointments)}));
              })
 }

  // GET request to /api----------
  useEffect(() => {
    Promise.all([
      axios.get('/api/days'),
      axios.get('/api/appointments'),
      axios.get('/api/interviewers')
    ]).then((all) => {
      setState(prev => ({...prev, days: all[0].data, appointments: all[1].data, interviewers: all[2].data }))
      })
    }, []);

    // spots remaining----------
    // first get spots for the day
    const getSpotsForDay = function (dayObj, appointments) {
      let spots = 0;
      for (const id of dayObj.appointments) {
        const appointment = appointments[id];
        if (!appointment.interview) {
          spots++
        }
      }
      return spots;
    };

    // update the spots remaining 
    const updateSpots = function (dayName, days, appointments) {     
        // find the day object
        const dayObj = days.find(day => day.name === dayName);
         // calculate spot fo this day
        const spots = getSpotsForDay(dayObj, appointments);

        // add spots to dayObj
        const newDay = {...dayObj, spots };
      
        // saving it in immutable way to days obj
        const newDays = days.map(day => day.name === dayName ? newDay : day);
 
      return newDays;
    }

    // returns above as object to Application
    return { state, setDay, bookInterview, cancelInterview, updateSpots };
}