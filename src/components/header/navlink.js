import React from "react";
import { SetNavElement } from "./utils";

export default function Navilink(props) {
  const { show, onClick, subsections } = SetNavElement(props.name);

  return (
    <div onClick={onClick} className="nav-link">
      {props.name.name.sectionName}
      <div
        className="subsection-left"
        style={
          show ? { display: "flex", marginTop: "6px" } : { display: "none" }
        }
      >
        {subsections}
      </div>
    </div>
  );
}
