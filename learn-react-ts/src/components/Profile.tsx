import React from "react";

type ProfileProps = {
  name: string;
  age: number;
  isLoggedIn: boolean;
  skills: {
    id: number | string;
    frontend: string;
    backend: string;
  }[];
  address: {
    street: string;
    city: string;
  };
  status: React.ReactNode
};

function Profile({ name, age, skills, address, isLoggedIn,status }: ProfileProps) {
  return (
    <div>
      {isLoggedIn ? (
        <div>
          <h1>Welcome {name} </h1>
          <h2>Age:{age}</h2>
          {skills.map((skill) => (
            <ul key={skill.id}>
              <li>
                Skill: {skill.frontend} {skill.backend}
              </li>
            </ul>
          ))}
          <h2>
            Address: {address.street}, {address.city}{" "}
          </h2>
          <h2>{status}</h2>
        </div>
      ) : (
        <h1> Welcome guest</h1>
      )}
    </div>
  );
}

export default Profile;
