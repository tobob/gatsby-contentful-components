import React from "react";
import get from "lodash/get";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

export default (props) => (
  <div style={{ width: "100%", height: "500px", backgroundColor: props.color }}>
    {get(props, "header.raw") &&
      documentToReactComponents(JSON.parse(get(props, "header.raw")))}
  </div>
);
