// import React
import React from "react";
// component dependencies
import DayListItem from "./DayListItem";

export default function DayList(props) {
  // create an array from days and 
  // pass it to be rendered
  const parsedDay = props.days.map(day =>
    <DayListItem 
      key={day.id} 
      selected={day.name === props.value}  
      setDay={() => props.onChange(day.name)}
      {...day} 
    />
  );

  return (
    <ul>
      {/* Renders list of DayListItems */}
      {parsedDay}
    </ul>
  );
}