import React from "react";

type HeaderProps = {
  name: string;
  age?: number;
};

function Header({ name, age }: HeaderProps) {
  return (
    <>
      <h1>Name : {name} </h1>
      <h2>Age: {age}</h2>
    </>
  );
}

export default Header;
