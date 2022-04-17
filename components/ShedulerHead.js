import React from "react";
import { format } from "date-fns";

export const SchedulerHead = ({ times }) => {
  return (
    <div
      style={{
        display: "flex",
      }}
    >
      {times.map((value, index) => (
        <div
          style={{
            backgroundColor: "black",
            color: "white",
            width: "40px",
            display: "Flex",
            border: "0.1px solid #383b39",
            fontWeight: "bold",
            paddingTop: "1rem",
            paddingBottom: "0.5rem",
          }}
          key={index}
        >
          <span
            style={{
              fontSize: "0.7rem",
              width: "inherit",
              textAlign: "center",
            }}
          >
            {`${format(value, "h")} ${format(value, "aa")}`}
          </span>
        </div>
      ))}
    </div>
  );
};
