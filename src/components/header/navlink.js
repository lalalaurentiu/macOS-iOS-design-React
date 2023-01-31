import React from "react";
import { SetNavElement } from "./utils";

export default function Navilink(props) {

  const { show, onClick, subsections } = SetNavElement(props.name , ".nav-link");

  return <div onClick={onClick} className="nav-link">
    {props.name.name.sectionName}
    <div className="subsection-left" style={show ? { display: "flex" } : { display: "none" }}>
      {subsections}
    </div>
    </div>;
}
