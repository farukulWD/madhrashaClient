import React from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const CalendarComponent = () => {
  return (
    <div className="primaryBgColor mt-3 p-4">
      <div className="bg-white mb-2 rounded">
        <h3 className="px-2 py-1 text-2xl font-bold text-center">Calendar</h3>
      </div>
      <div>
        <Calendar></Calendar>
      </div>
    </div>
  );
};

export default CalendarComponent;
