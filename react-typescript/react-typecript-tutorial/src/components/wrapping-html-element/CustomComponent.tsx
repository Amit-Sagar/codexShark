import React from "react";
import Greeting from "../props/Greeting";

const CustomComponent = (props: React.ComponentProps<typeof Greeting>) => {
  return (
    <div>
      <h1>Custom Component</h1>
      <h1>{props.name}</h1>
    </div>
  );
};

export default CustomComponent;
