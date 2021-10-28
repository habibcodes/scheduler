// returns an array of appts for given day
export function getAppointmentsForDay(state, day) {
  const getDay = state.days.find(searchDay => searchDay.name === day);

  if(!getDay) {
    return [];
  }

  const filteredAppointments = getDay.appointments.map(id => state.appointments[id]);

  return filteredAppointments;
}
