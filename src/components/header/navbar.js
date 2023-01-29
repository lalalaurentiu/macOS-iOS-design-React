import React from "react";
import Navicon from "./navicon";
import Navlink from "./navlink";

export default function Navbar(props) {
  const navcomponentsLeft = props.navcomponentsLeft.map((navComponent) => {
    return navComponent.name.logoUrl ? (
      <Navicon key={navComponent.id} url={navComponent} />
    ) : (
      <Navlink key={navComponent.id} name={navComponent.name.sectionName} />
    );
  });

  const navcomponentsRight = props.navcomponentsRight.map((navComponent) => {
    return navComponent.name.logoUrl ? (
      <Navicon key={navComponent.id} url={navComponent} />
    ) : navComponent.name.sectionName ? (
      <Navlink key={navComponent.id} name={navComponent.name.sectionName} />
    ) : (
      navComponent.name.func(navComponent.id)
    );
  });

  return (
    <nav className="navbar">
      <div className="nav-left">{navcomponentsLeft}</div>
      <div className="nav-right">{navcomponentsRight}</div>
    </nav>
  );
}
