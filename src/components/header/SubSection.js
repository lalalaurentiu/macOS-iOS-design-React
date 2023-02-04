import React from "react";
import { nanoid } from "nanoid";

export default function SubSection(props) {
  const subsections = props.elements.map((subSection) => {
    if (subSection.img) {
      const sunSectionImg = subSection.img.map((subSectionImg) => {
        return subSectionImg.img ? (
          <img
            key={subSectionImg.id}
            className="navicon"
            src={subSectionImg.img}
            alt="subsection"
          />
        ) : (
          <div key={subSectionImg.id}> {subSectionImg.name}</div>
        );
      });

      return subSection.img ? (
        <div
          key={subSection.id}
          style={
            subSection.break
              ? { borderBottom: "1px solid white" }
              : { border: "none" }
          }
        >
          <div> {subSection.name}</div>
          <div className="subsection-images"> {sunSectionImg}</div>
        </div>
      ) : (
        <div
          key={subSection.id}
          style={
            subSection.break
              ? { borderBottom: "1px solid white" }
              : { border: "none" }
          }
        >
          <div> {subSection.name}</div>
        </div>
      );
    } else if (subSection.elements){
        return subSection.elements()
    } else {
      return (
        <div
          key={subSection.id}
          style={
            subSection.break
              ? { borderBottom: "1px solid white" }
              : { border: "none" }
          }
        >
          <div style={
            {width: "100%"}
          }> {subSection.name}</div>
        </div>
      );
    }
  });

  return <div className="subsection-left-element">{subsections}</div>;
}
