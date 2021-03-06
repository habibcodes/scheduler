// returns an array of appts for given day
export function getAppointmentsForDay(state, day) {
  // extract day
  const getDay = state.days.find(searchDay => searchDay.name === day);
  // if there is no data, return empty array
  if(!getDay) {
    return [];
  }
  // filter appt from getDay array
  const filteredAppointments = getDay.appointments.map(id => state.appointments[id]);
  // send out the filtered appointments
  return filteredAppointments;
}

// returns an array of interviewers for given day
export function getInterviewersForDay(state, day) {
  // extract selected day from db
  const getDay = state.days.find(searchDay => searchDay.name === day);
  // if there is no data, return empty array
  if(!getDay) {
    return [];
  }
  // filter interviewers from getDay array
  const filteredInterviewers = getDay.interviewers.map(id => state.interviewers[id]);
  // send out the filtered interviewers
  return filteredInterviewers;
}

// returns specific interview interviewer data
export function getInterview(state, interview) {
  // check for null 
  if (!interview) {
    return null
  };
  // extract interview
  const interviewObject = {
    "student": interview.student,
    "interviewer": state.interviewers[interview.interviewer],
  };
  // return output
  return interviewObject;
}