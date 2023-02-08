import React from "react";
import { SetNavElement } from "./header/utils";

export default function Battery(props) {
  const { show, onClick, subsections } = SetNavElement(props.components);
  const [batteryLevel, setBatteryLevel] = React.useState(props.level);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setBatteryLevel(batteryLevel - 1);
    }, 100 * 100);
    return () => clearInterval(interval);
  }, [batteryLevel]);

  let batteryLevelStyle = {
    width: `${batteryLevel}%`,
  };

  return (
    <div className="battery-container">
      <div onClick={onClick} className="battery">
        <div className="battery-charging">
          <div className="battery-level" style={batteryLevelStyle}></div>
        </div>

        <div className="battery-cell"></div>
      </div>
      <div
        className="subsection-left"
        style={show ? { display: "flex" } : { display: "none" }}
      >
        {subsections}
      </div>
    </div>
  );
}
