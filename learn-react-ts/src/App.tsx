import { useState } from "react";
import Header from "./components/Header";
import Profile from "./components/Profile";
import Status from "./components/Status";
function App() {
  const address = {
    street: "Nguyen Tuan Street",
    city: "Sai Gon",
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
      {/* <Header name = "huy" age = {21}/> */}
      <Profile
        status={<Status status="single" />}
        name="huy"
        age={21}
        isLoggedIn={true}
        address={address}
        skills={skills}
      />
      {/* <Status status="married" /> */}
    </div>
  );
}

export default App;
