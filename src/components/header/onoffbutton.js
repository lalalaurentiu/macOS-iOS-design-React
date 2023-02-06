import React from "react";

export default function OnOffButton() {
  const [show, setShow] = React.useState(true);
  const onClick = () => {
    setShow(!show);
  };
  return (
    <div
      onClick={onClick}
      className="onoffbutton"
      style={show ? { backgroundColor: "#0376ff" } : {}}
    >
      <div
        className="onoffbutton-circle"
        style={show ? { transform: "translate(100%)" } : {}}
      />
    </div>
  );
}
