import React from "react";
import SubSection from "./SubSection";

export default function Navicon(props) {
  const isShow = false;

  const [show, setShow] = React.useState(isShow);

  const onClick = (e) => {
    setShow(!show);
  };

  const body = document.querySelector("body");

  React.useEffect(() => {
    const handleOutsideClick = (e) => {
      if (!e.target.closest(".navicon")) {
        setShow(false);
      }
    };

    body.addEventListener("click", handleOutsideClick);
    return () => {
      body.removeEventListener("click", handleOutsideClick);
    };
  }, [body]);

  const subsections = props.url.subSection.map((subSection) => {
    return <SubSection key={subSection.id} elements={Array(subSection)} />;
  });

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
