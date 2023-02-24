import React from "react";

export default function NavbarSearch(props) {
    const [show, setShow] = React.useState(false);
    const onClick = () => {
        setShow(!show);
    };

    const body = document.querySelector("body");

    const child = React.useRef(null);

    React.useEffect(() => {
      const handleOutsideClick = (e) => {
          if (child.current !== e.target) {
              setShow(false);
          }
      };

      body.addEventListener("click", handleOutsideClick);
      return () => {
          body.removeEventListener("click", handleOutsideClick);
      };
    }, [body]);
    
  return (
    <div className="navbar-search">
      <img onClick={onClick} className="navicon" src="../images/search.svg" alt="search" ref={child} />
      <div className="navbar-search-container" style={
        show ? { display: "flex" } : { display: "none" }
      }>
        <div>
          <img className="navicon" src="../images/search.svg" alt="search" />
          <input type="text" placeholder="Spotlight Search" />
        </div>
      </div>
    </div>
  );
}
