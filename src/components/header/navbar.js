import React from "react";
import Navicon from "./navicon";
import Navlink from "./navlink";

export default function Navbar(props) {

  const navcomponentsLeft = props.navcomponentsLeft.map((navComponent) => {
    return navComponent.name.logoUrl ? (
      <Navicon url={navComponent.name.logoUrl} />
    ) : (
      <Navlink name={navComponent.name.sectionName} />
    );
  });

  const navcomponentsRight = props.navcomponentsRight.map((navComponent) => {
    return navComponent.name.logoUrl ? (
      <Navicon url={navComponent.name.logoUrl} />
    ) : (
      <Navlink name={navComponent.name.sectionName} />
    );
  });

  return (
    <nav className="navbar">
      <div className="nav-left">{navcomponentsLeft}</div>
      <div className="nav-right">{navcomponentsRight}</div>
    </nav>
  );
}
