import React from "react";

export default function BatteryProcentaje(props) {
    const [batteryLevel, setBatteryLevel] = React.useState(props.level);

    React.useEffect(() => {
        const interval = setInterval(() => {
            setBatteryLevel(batteryLevel - 1);
        }, 100 * 100);
        return () => clearInterval(interval);
    }, [batteryLevel]);

  const { level } = props;
  return (
    <div className="battery-procentaje">
        <span>Battery</span>
        <span>{batteryLevel}%</span>
    </div>
  );
}
