import React, { useContext } from "react";
import { EmployeeContext } from "./EmployeeContext";
function Employee() {
  const { employee, setEmployee } = useContext(EmployeeContext);
  return (
    <div>
      <button onClick={() => setEmployee({ name: "huy", position: "intern" })}>
        Log In
      </button>
      <h1>{employee?.position}</h1>
      <h1>{employee?.name}</h1>
      <button onClick={() => setEmployee(null)}>Log out</button>
    </div>
  );
}

export default Employee;
