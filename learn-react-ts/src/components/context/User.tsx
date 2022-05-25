import { useContext } from "react";
import { UserContext } from "./UserContext";
function User() {
  const { user, setUser } = useContext(UserContext);
  return (
    <div>
      <button onClick={() => setUser(null)}>Log out</button>
      <h1>{user?.email}</h1>
      <h1>{user?.name}</h1>
      <button
        onClick={() => setUser({ name: "huy", email: "user@example.com" })}
      >
        Log in
      </button>
    </div>
  );
}

export default User;
