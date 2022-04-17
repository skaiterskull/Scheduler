// "times" has to be in the same day range
// "event" is an array of event and has to be on the same day range
// component is not sizeable (fix)

import { Scheduler } from "../components/Scheduler";
import { SchedulerHead } from "../components/ShedulerHead";
import { eachHourOfInterval } from "date-fns";

function MyApp() {
  const times = eachHourOfInterval({
    start: new Date(2014, 9, 6, 3),
    end: new Date(2014, 9, 6, 23),
  });

  const defaultEvent = [
    {
      start: new Date(2014, 9, 6, 3),
      end: new Date(2014, 9, 6, 23),
      title: "No event at the moment",
      isDefault: true,
    },
  ];

  const event = [
    {
      start: new Date(2014, 9, 6, 12),
      end: new Date(2014, 9, 6, 16),
      title: "Introduction",
    },
    {
      start: new Date(2014, 9, 6, 5),
      end: new Date(2014, 9, 6, 19),
      title: "Speech from presiden and director",
    },
    {
      start: new Date(2014, 9, 6, 7),
      end: new Date(2014, 9, 6, 12),
      title: "Question and answer session",
    },
    {
      start: new Date(2014, 9, 6, 10),
      end: new Date(2014, 9, 6, 12),
      title: "Grand price announcement",
    },
    {
      start: new Date(2014, 9, 6, 10),
      end: new Date(2014, 9, 6, 11),
      title: "Product presentation",
    },
    {
      start: new Date(2014, 9, 6, 12),
      end: new Date(2014, 9, 6, 22),
      title: "Entertainment and tea time",
    },
    {
      start: new Date(2014, 9, 6, 7),
      end: new Date(2014, 9, 6, 10),
      title: "Closing ceremony",
    },
    {
      start: new Date(2014, 9, 6, 20),
      end: new Date(2014, 9, 6, 22),
      title: "Dinner",
    },
  ];

  return (
    <div style={{ overflowX: "auto" }}>
      <SchedulerHead times={times} />
      {event.length
        ? event.map((value, index) => (
            <Scheduler key={index} event={value} times={times} />
          ))
        : defaultEvent.map((value) => (
            <Scheduler event={value} times={times} />
          ))}
    </div>
  );
}

export default MyApp;
