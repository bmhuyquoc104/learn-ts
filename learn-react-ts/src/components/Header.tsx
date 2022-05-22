import React from "react";

type HeaderProps = {
  name: string;
  age?: number;
  styles?: React.CSSProperties;
};

function Header({ name, age, styles }: HeaderProps) {
  return (
    <>
      <h1 style={styles}>Name : {name} </h1>
      <h2>Age: {age}</h2>
    </>
  );
}

export default Header;
