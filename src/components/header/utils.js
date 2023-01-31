import React from "react";
import SubSection from "./SubSection";

function SetNavElement(propsSubSection, bodyElement /* bodyElement is a css class for identify body parent */ ) {
  const isShow = false;
  const [show, setShow] = React.useState(isShow);
  const onClick = (e) => {
    setShow(!show);
  };

  const body = document.querySelector("body");

  const useEffect = React.useEffect(() => {
    const handleOutsideClick = (e) => {
      if (!e.target.closest(bodyElement)) {
        setShow(false);
      }
    };

    body.addEventListener("click", handleOutsideClick);
    return () => {
      body.removeEventListener("click", handleOutsideClick);
    };
  }, [body]);

  const subsections = propsSubSection.subSection.map((subSection) => {
    return <SubSection key={subSection.id} elements={Array(subSection)} />;
  });

  return {
    show,
    onClick,
    subsections,
    useEffect,
  };
}

export { SetNavElement }
