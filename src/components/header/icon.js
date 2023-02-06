import React from "react";

export default function Icon(props) {
  const [show, setShow] = React.useState(props.show);

  const onClick = (e) => {
    setShow(!show);
  };

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <div className="icon" onClick={setShow} style={show ? { backgroundColor:"#0376ff"} : {}}>
        <img className="navicon" src={props.url} alt="icon" />
      </div>
      <span>{props.name}</span>
    </div>
  );
}
