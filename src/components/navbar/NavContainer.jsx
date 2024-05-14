import React from "react";

export default function NavContainer(props) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        maxWidth: "1280px",
        width: "100%",
        margin: "auto",
        paddingRight: "2rem",
        paddingLeft: "2rem",
        justifyContent: "space-between",
      }}
    >
      {props.children}
    </div>
  );
}
