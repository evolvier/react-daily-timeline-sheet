import React from "react";
import TimeLine from "react-daily-timeline-sheet";

const workingHours = [
  {
    start: "09:00",
    end: "17:00",
    title: "Work",
    status: "InProgress",
    data: {
      tooltip: "Regular Work Hours",
    },
  },
  // Add more working hours as needed
];

const renderTooltip = (segment: any) => (
  <div
    style={{
      padding: "5px",
      backgroundColor: "#4d4d4c",
      color: "#fff",
      borderRadius: "3px",
    }}
  >
    <strong>{segment.tooltip}</strong>
    {segment.status && <div>Status: {segment.status}</div>}
  </div>
);

const App = () => {
  return (
    <div>
      <h1>My TimeLine</h1>
      <TimeLine
        workingHours={[
          {
            start: "09:00",
            end: "12:00",
            title: "Morning Shift",
            data: { massage: "Regular Work Hours 1" },
          },
          {
            start: "13:00",
            end: "17:00",
            title: "Afternoon Shift",
            data: { massage: "Regular Work Hours 2" },
          },
          {
            start: "18:00",
            end: "21:00",
            title: "Evening Shift",
            data: { massage: "Regular Work Hours 3" },
          },
        ]}
        breakpoint="lg"
        workingColor="#578ff2"
        nonWorkingColor="#e0e0e0"
        height="50px"
        borderRadius="12px"
        timeFormat="12h"
        notWorkingCaption="No working hours today"
        renderTooltip={renderTooltip}
        onClick={(segment) => console.log(segment)}
      />
    </div>
  );
};

export default App;
