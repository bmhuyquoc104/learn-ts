import React from "react";

export type ProfileProps = {
  name: string;
};

function Profile({ name }: ProfileProps) {
  return <h1>{name}</h1>;
}

export default Profile;
