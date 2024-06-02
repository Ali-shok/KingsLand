// SvgComponent.js
import React from "react";
import logoImage from "../img/mylogo.png";

function SvgComponent(props) {
  return (
    <img
      height="75px"
      width="auto"
      style={{
        margin: "0",
      }}
      alt="logo"
      src={logoImage}
    />
  );
}

export default SvgComponent;
