import React from "react";

export default function Wifi(props){

    const wifiCell1 = React.useRef(null);
    const wifiCell2 = React.useRef(null);
    const wifiCell3 = React.useRef(null);

    let rondomNumber = Math.floor(Math.random() * 3) + 1;

    React.useEffect(() => {
        const interval = setInterval(() => {
            if(rondomNumber === 1){
                wifiCell1.current.classList.remove("wifi-cell-active");
                wifiCell2.current.classList.add("wifi-cell-active");
                wifiCell3.current.classList.add("wifi-cell-active");
            } else if(rondomNumber === 2){
                wifiCell1.current.classList.remove("wifi-cell-active");
                wifiCell2.current.classList.add("wifi-cell-active");
                wifiCell3.current.classList.add("wifi-cell-active");
            } else if(rondomNumber === 3){
                wifiCell1.current.classList.add("wifi-cell-active");
                wifiCell2.current.classList.add("wifi-cell-active");
                wifiCell3.current.classList.add("wifi-cell-active");
            }
        }, 100 * 100);
        return () => clearInterval(interval);
    }, []);
    
    return (
        <div className="wifi">
            <div className="wifi-cell wifi-line3" ref={wifiCell1} ></div>
            <div className="wifi-cell wifi-line2" ref={wifiCell2} ></div>
            <div className="wifi-cell wifi-line1" ref={wifiCell3}></div>
        </div>
    );
}