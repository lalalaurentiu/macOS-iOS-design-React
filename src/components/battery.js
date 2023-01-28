import React from "react";

export default function Battery(props) {
  const [batteryLevel, setBatteryLevel] = React.useState(props.level);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setBatteryLevel(batteryLevel - 1);
    }, 100 * 100);
    return () => clearInterval(interval);
  }, [batteryLevel]);

  console.log(batteryLevel);

  let batteryLevelStyle = {
    width: `${batteryLevel}%`,
  };

  return (
    <div className="battery">
      <div className="battery-charging">
        <div
          className="battery-level"
          style={batteryLevelStyle}
        ></div>
      </div>

      <div className="battery-cell"></div>
    </div>
  );
}
