import React from "react";
import { StyledDivider } from "./ResponsiveDivider.styles.js";

export default function ResponsiveDivider(props) {
  return (
      <StyledDivider
          orientation="vertical"
          flexItem
          {...props}
      />
  );
}
