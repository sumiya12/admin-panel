import Dashboard from "./component/Dashboard";
// import { useUser } from "./contexts/UserContext";
import Login from "./component/Login";
import { useState } from "react";
import moment from "moment";
import { useUser } from "./contexts/UserContext";

function App() {
  const [user, setUser] = useUser();

  // setUser(true);
  return <>{!user ? <Login /> : <Dashboard />}</>;
}

export default App;
