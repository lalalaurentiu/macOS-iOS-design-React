import React from "react";
import { SetNavElement } from "./header/utils";
const abreviatemonths = {
  0: "Jan",
  1: "Feb",
  2: "Mar",
  3: "Apr",
  4: "May",
  5: "Jun",
  6: "Jul",
  7: "Aug",
  8: "Sep",
  9: "Oct",
  10: "Nov",
  11: "Dec",
};
const abreviatedays = {
  0: "Sun",
  1: "Mon",
  2: "Tues",
  3: "Wed",
  4: "Thurs",
  5: "Fri",
  6: "Sat",
};

export default function DateTime(props) {
  const { show, onClick, subsections } = SetNavElement(props.components);
  const child = React.useRef(null);

  function getDateTimes() {
    const date = new Date();
    const month = abreviatemonths[date.getMonth()];
    const day = abreviatedays[date.getDay()];
    const dayofmonth = date.getDate();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? "PM" : "AM";
    const hours12 = hours % 12;
    const hours12string = hours12 ? hours12 : 12;
    const minutesstring = minutes < 10 ? "0" + minutes : minutes;
    const time = `${hours12string}:${minutesstring} ${ampm}`;
    const datestring = `${dayofmonth} ${month}`;
    const datetime = `${day} ${datestring} ${time}`;
    return datetime;
  }

  React.useEffect(() => {
    const interval = setInterval(() => {
      child.current.innerHTML = getDateTimes();
    }, 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div onClick={onClick} className="nav-date-time" ref={child}>
      {getDateTimes()}
      <div
        className="subsection-left"
        style={show ? { display: "flex" } : { display: "none" }}
      >
        {subsections}
      </div>
    </div>
  );
}
