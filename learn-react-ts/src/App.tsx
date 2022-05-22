import { useState } from "react";
import Header from "./components/Header";
import Profile from "./components/Profile";
import Status from "./components/Status";
import Button from "./components/Button";
import Input from "./components/Input";
import User from "./components/state/User";
function App() {
  const address = {
    street: "Nguyen Tuan Street",
    city: "Sai Gon",
  };
  const user = {
    name: "huy",
    age: 22,
  };
  const skills = [
    {
      frontend: "React",
      backend: "NodeJS",
      id: 1,
    },
    {
      frontend: "React",
      backend: "Spring",
      id: 2,
    },
    {
      frontend: "PHP",
      backend: "Lavarel",
      id: 3,
    },
  ];
  return (
    <div className="App">
      {/* <Header styles={{ color: "red" }} name="huy" age={21} /> */}
      <Profile
        status={<Status status="single" />}
        name="huy"
        age={21}
        isLoggedIn={true}
        style={{ textAlign: "center", color: "red" }}
        address={address}
        skills={skills}
      />
      <Button handleClick={(e) => console.log("huy ne")} />
      <Input handleChange={(e) => console.log(e.target.value)} />
      <User name={user.name} age={user.age} />
      {/* <Status status="married" /> */}
    </div>
  );
}

export default App;
