import React from "react";

const Notification = ({ status, content }) => {
  const errorStyle = {
    color: status === "ok" ? "green" : "red",
    background: "lightgrey",
    fontSize: 20,
    borderStyle: "solid",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  };
  if (content) {
    return <li style={errorStyle}>{content}</li>;
  } else {
    return <div></div>;
  }
};

export default Notification;
