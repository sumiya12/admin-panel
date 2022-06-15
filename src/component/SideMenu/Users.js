import React from "react";
import { useUser } from "../../contexts/UserContext";
import { useEffect } from "react";
import { userService } from "../../services/userService";
export default function Users() {
  const [user, setUser] = useUser();

  return (
    <div>
      {user?.map((person, i) => {
        <ul>
          <li key={i}>{person}</li>
        </ul>;
      })}
    </div>
  );
}
