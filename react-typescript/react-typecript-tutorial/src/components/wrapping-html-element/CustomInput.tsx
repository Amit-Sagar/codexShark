import React from "react";
type InputType = React.ComponentProps<"input">;

const CustomInput = (props: InputType) => {
  return <input type="text" {...props} />;
};

export default CustomInput;
