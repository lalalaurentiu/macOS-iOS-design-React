import React from "react";
import { SetNavElement } from "./utils";

export default function Navicon(props) {

  const { show, onClick, subsections } = SetNavElement(props.url, ".navicon");

  return (
    <div onClick={onClick} className="navicon">
      <img src={props.url.name.logoUrl} alt="navicon" />
      <div
        className="subsection-left"
        style={show ? { display: "flex" } : { display: "none" }}
      >
        {subsections}
      </div>
    </div>
  );
}
