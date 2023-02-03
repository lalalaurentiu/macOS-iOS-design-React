import React from "react";

export default function NaviconGo(props) {
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <img
        src={props.url}
        alt="mac-command"
        className="navicon"
      />
      <span>{props.name}</span>
    </div>
  );
};
