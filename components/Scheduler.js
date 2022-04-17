import React, { useState } from "react";
import { isSameHour, format, eachHourOfInterval } from "date-fns";

export const Scheduler = ({ event, times }) => {
  const [hover, setHover] = useState(false);

  const eventHour = eachHourOfInterval({
    start: event.start,
    end: event.end,
  });

  if (!event.length) {
    return (
      <div>
        <div
          style={{
            display: "flex",
          }}
        >
          {times.map((value, index) => (
            <div
              style={{
                width: "40px",
                height: "50px",
                display: "Flex",
                borderLeft: "0.1px solid rgba(56, 59, 57, 0.1)",
                borderRight: "0.1px solid rgba(56, 59, 57, 0.1)",
                borderBottom: "0.1px solid rgba(56, 59, 57, 0.1)",
              }}
              key={index}
            >
              {isSameHour(value, event.start) ? (
                <div
                  style={{
                    width: "40px",
                    position: "relative",
                    fontSize: "0.8rem",
                    fontWeight: "bolder",
                    color: "black",
                    whiteSpace: "nowrap",
                  }}
                >
                  {`${event.title.substr(0, 20)} ${
                    event.title.length > 20 ? "..." : ""
                  } (${format(event.start, "h")}${format(
                    event.start,
                    "aa"
                  )}-${format(event.end, "h")}${format(event.end, "aa")})`}

                  <div
                    style={{
                      backgroundColor: hover ? "#078c33" : "#09ed55",
                      width: `${eventHour.length * 41.5}px`,
                      height: "20px",
                      borderRadius: "10px",
                      display: "flex",
                      justifyContent: "end",
                      cursor: "pointer",
                    }}
                    onPointerOver={() => setHover(true)}
                    onPointerOut={() => setHover(false)}
                  >
                    {event.isDefault ? (
                      ""
                    ) : (
                      <span
                        style={{
                          paddingTop: "4px",
                          paddingRight: "10px",
                          fontSize: "0.5rem",
                          opacity: hover ? "1" : "0.7",
                          color: hover ? "white" : "black",
                          cursor: "pointer",
                        }}
                      >
                        &#x2715;
                      </span>
                    )}
                  </div>
                </div>
              ) : (
                <div
                  style={{
                    width: "40px",
                    height: "fi",
                    fontSize: "0.8rem",
                    fontWeight: "bolder",
                    color: "black",
                    whiteSpace: "nowrap",
                  }}
                ></div>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div>
      <div
        style={{
          display: "flex",
        }}
      >
        {times.map((value, index) => (
          <div
            style={{
              width: "40px",
              height: "50px",
              display: "Flex",
              borderLeft: "0.1px solid rgba(56, 59, 57, 0.1)",
              borderRight: "0.1px solid rgba(56, 59, 57, 0.1)",
              borderBottom: "0.1px solid rgba(56, 59, 57, 0.1)",
            }}
            key={index}
          >
            {isSameHour(value, event.start) ? (
              <div
                style={{
                  width: "40px",
                  position: "relative",
                  fontSize: "0.8rem",
                  fontWeight: "bolder",
                  color: "black",
                  whiteSpace: "nowrap",
                }}
              >
                {`${event.title.substr(0, 20)} ${
                  event.title.length > 20 ? "..." : ""
                } (${format(event.start, "h")}${format(
                  event.start,
                  "aa"
                )}-${format(event.end, "h")}${format(event.end, "aa")})`}

                <div
                  style={{
                    backgroundColor: hover ? "#078c33" : "#09ed55",
                    width: `${eventHour.length * 41.5}px`,
                    height: "fit-content",
                    borderRadius: "10px",
                    display: "flex",
                    justifyContent: "end",
                    cursor: "pointer",
                  }}
                  onPointerOver={() => setHover(true)}
                  onPointerOut={() => setHover(false)}
                >
                  <span
                    style={{
                      paddingTop: "3px",
                      paddingBottom: "3px",
                      paddingRight: "10px",
                      fontSize: "0.5rem",
                      opacity: hover ? "1" : "0.7",
                      color: hover ? "white" : "black",
                      cursor: "pointer",
                    }}
                  >
                    &#x2715;
                  </span>
                </div>
              </div>
            ) : (
              <div
                style={{
                  width: "40px",
                  height: "fi",
                  fontSize: "0.8rem",
                  fontWeight: "bolder",
                  color: "black",
                  whiteSpace: "nowrap",
                }}
              ></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
