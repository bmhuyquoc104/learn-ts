import React, { useState } from "react";

type AuthUser = {
  name: string;
  age: number;
};

function User({ name, age }: AuthUser) {
  const [isLoggedIn, setIsLoggedIn] = useState<null | AuthUser>(null);
  const handleLogin = () => {
    setIsLoggedIn({ name: name, age: age });
  };
  return (
    <>
      {isLoggedIn ? (
        <div>
          <h1>Name: {name}</h1>
          <h1>Age: {age}</h1>
        </div>
      ) : (
        <div>Not logged in yet!</div>
      )}
      <button onClick={handleLogin}>Log In</button>
    </>
  );
}

export default User;
