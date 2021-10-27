import React from "react";
import DayListItem from "./DayListItem";

export default function DayList(props) {
  // console.log(props);
  // const {setDay} = props;

const parsedDay = props.days.map(day =>
  <DayListItem 
    key={day.id} 
    // selected={props.day === day.name} 
    selected={props.value === day.name} 
    // setDay={props.setDay} 
    // setDay={() => props.setDay(day.id)}
    setDay={props.onChange}
    {...day} 
  />
);

  return (
    <ul>
      {/* <DayListItem /> */}
      {parsedDay}
    </ul>
  );
}