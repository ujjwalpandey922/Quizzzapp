import React from "react";

function Error({ children }) {
  return (
    <div
      style={{
        width: "100%",
        padding: 10,
        marginBottom: 10,
        borderRadius: 4,
        backgroundColor: "red",
        textAlign: "center",
        color: "white",
        textTransform: "capatalized",
      }}
    >
      {children}
    </div>
  );
}

export default Error;
