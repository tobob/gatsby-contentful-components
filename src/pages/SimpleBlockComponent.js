import React from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

export default (props) => (
  <div style={{ width: "100%", height: "500px", backgroundColor: props.color }}>
    {documentToReactComponents(JSON.parse(props.header.raw))}
  </div>
);
