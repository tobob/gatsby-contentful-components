import React from "react";

export default (props) => (
  <div
    style={{
      display: "flex",
      flexFlow: "row nowrap",
      width: "400px",
      height: "200px",
    }}
  >
    {props.images.map((image) => (
      <img
        style={{
          flex: "1 1 auto",
          border: "1px solid black",
          objectFit: "contain",
        }}
        src={image.file.url}
      />
    ))}
  </div>
);
