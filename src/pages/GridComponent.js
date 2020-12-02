import React from "react";

export default (props) => (
  <div
    style={{
      display: "flex",
      flexDirection: "row",
      maxWidth: "100%",
      height: "200px",
    }}
  >
    {props.images.map((image) => (
      <div
        style={{
          border: "3px solid gray",
          width: `${100 / props.images.length}%`,
        }}
      >
        <img
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
          src={image.file.url}
        />
      </div>
    ))}
  </div>
);
