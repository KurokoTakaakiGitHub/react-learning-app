import React from "react";

const ColorfulMessage = (props) => {
  const { color, message } = props;
  const contentStyle = {
    color: color,
    fontSize: "18px"
  };

  return (
    <p style={contentStyle}>
      {message}
      {props.children}
    </p>
  );
};

export default ColorfulMessage;
