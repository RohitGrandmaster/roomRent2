import React from "react";

function backGroundImage({ imageUrl }) {
  const divStyle = {
    backgroundImage: `url(${imageUrl})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    zIndex: -1,
  };

  return <div style={divStyle}></div>;
}

export default backGroundImage;
