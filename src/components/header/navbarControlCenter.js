import React from "react";
import Icon from "./icon";
import icon from "./icon";

export default function NavbarControlCenter(props) {
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
    <div className="navbar-control-center">
      <img
        onClick={onClick}
        className="navicon"
        src="../images/toogles.svg"
        alt="control center"
        ref={child}
      />
      <div
        className="navbar-control-center-container subsection-left"
        style={
          show
            ? { display: "flex", transform: "translateX(calc(-100% + 30px))" }
            : { display: "none" }
        }
      >
        <div>
          <div className="control-center-left">
            <Icon name="Wi-Fi" url="../images/navicons/wifi.svg" />
            <Icon name="Bluetooth" url="../images/bluetooth.svg" />
            <Icon name="Airplane Mode" url="../images/navicons/airdrop.svg" />
          </div>
          <div className="control-center-right">
            <div className="control-center-element">
              <img
                className="navicon"
                src="../images/navicons/sleep.svg"
                alt="sleep"
              />
              Sleep
            </div>
            <div className="control-center-element">
              <img
                className="navicon"
                src="../images/navicons/brignes.svg"
                alt="Brignes"
              />
              Keyboard Brightness
            </div>
          </div>
        </div>
        {/* move all inline css to file css */}
        <div style={{width:"100%"}}>
          <div className="control-center-bottom">
            <div>Display</div>
            <div style={{height:"20px", backgroundColor:"gray", margin:"5px 0", borderRadius:"10px", display:"flex", alignItems:"center"}}>
              <img src="../images/navicons/brigness_display.svg" alt="" width={"10px"} height={"10px"} style={{marginLeft:"6px",position:"absolute",}}/>
              <div style={{width:"50%", height:"100%", backgroundColor:"white", borderRadius:"10px 0 0 10px"}}></div>
              <div className="control-center-brigness"></div>
            </div>
          </div>
        </div>
        <div style={{width:"100%"}}>
          <div className="control-center-bottom">
            <div>Sound</div>
            <div style={{height:"20px", backgroundColor:"gray", margin:"5px 0", borderRadius:"10px", display:"flex", alignItems:"center"}}>
              <img src="../images/navicons/sound.svg" alt="" width={"10px"} height={"10px"} style={{marginLeft:"6px",position:"absolute",}}/>
              <div style={{width:"70%", height:"100%", backgroundColor:"white", borderRadius:"10px 0 0 10px"}}></div>
              <div className="control-center-brigness"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
