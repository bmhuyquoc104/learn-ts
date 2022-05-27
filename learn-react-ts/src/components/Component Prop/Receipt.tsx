import React from "react";
import Profile from "./Profile";

const Receipt = (props: React.ComponentProps<typeof Profile>) => {
  return <div>{props.name}</div>;
};

export default Receipt;
