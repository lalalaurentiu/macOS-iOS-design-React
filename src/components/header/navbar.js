import React from "react";

export default function Navbar(props) {
  const navcomponentsLeft = props.navComponents.map((navComponent) => {
    return navComponent.name.logoUrl ? (
      <img className="nav-logo" src={navComponent.name.logoUrl} alt="logo" />
    ) : (
      <div className="nav-link">{navComponent.name.sectionName}</div>
    );
  });

  return (
    <nav className="navbar">
      <div className="nav-left">{navcomponentsLeft}</div>
    </nav>
  );
}
