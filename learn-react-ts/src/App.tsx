import { useState } from "react";
import Header from "./components/Header";
// import Profile from "./components/Profile";
import Counter from "./components/state/Counter";
import Status from "./components/Status";
import { UseContextProvider } from "./components/context/UserContext";
import { EmployeeProvider } from "./components/context/EmployeeContext";
import User from "./components/context/User";
import Employee from "./components/context/Employee";
import Button from "./components/Button";
import Input from "./components/Input";
import Profile from "./components/Component Prop/Profile";
import List from "./components/generic/List";
import Home from "./components/Component Prop/Home";
import Restrict from "./components/restrict/Restrict";

// import User from "./components/state/User";
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
      name: "Huy",
    },
    {
      frontend: "React",
      backend: "Spring",
      id: 2,
      name: "kenRick",
    },
    {
      frontend: "PHP",
      backend: "Lavarel",
      id: 3,
      name: "Huy2",
    },
  ];
  return (
    <div className="App">
      {/* <Header styles={{ color: "red" }} name="huy" age={21} /> */}
      {/* <Profile
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
      <User name={user.name} age={user.age} /> */}
      {/* <Status status="married" /> */}
      <UseContextProvider>
        <User />
      </UseContextProvider>
      <EmployeeProvider>
        <Employee />
      </EmployeeProvider>
      <Home isLoggedIn={true} component={Profile} />
      <List items={skills} />
      <Restrict value = {10} isPositive = {true} />
    </div>
  );
}

export default App;
