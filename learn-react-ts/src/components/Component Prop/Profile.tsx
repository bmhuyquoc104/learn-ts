import React from "react";

export type ProfileProps = {
  name: string;
  age?:number;
};

function Profile({ name }: ProfileProps) {
  return <h1>{name}</h1>;
}

export default Profile;
