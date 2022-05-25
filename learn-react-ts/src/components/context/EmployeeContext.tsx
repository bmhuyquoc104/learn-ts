import { createContext, useState } from "react";

type Employee = {
  name: string;
  position: string;
};

type EmployeeProviderType = {
  children: React.ReactNode;
};

type EmployeeContextType = {
  employee: Employee | null;
  setEmployee: React.Dispatch<React.SetStateAction<Employee | null>>;
};

export const EmployeeContext = createContext({} as EmployeeContextType);

export const EmployeeProvider = ({ children }: EmployeeProviderType) => {
  const [employee, setEmployee] = useState<Employee | null>(null);
  return (
    <EmployeeContext.Provider value={{ employee, setEmployee }}>
      {" "}
      {children}{" "}
    </EmployeeContext.Provider>
  );
};
