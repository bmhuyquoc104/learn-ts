import React from "react";

type StatusProps = {
  status : "single" | "married" | "others"
}

function Status({status} : StatusProps) {
  return <div>Status: {status}</div>;
}

export default Status;
