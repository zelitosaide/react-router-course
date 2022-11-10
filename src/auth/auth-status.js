import { useContext } from "react";

import { AuthContext } from "./auth-context";

export function AuthStatus() {
  const auth = useContext(AuthContext);

  if (!auth.currentUser) {
    return <p>You are not logged in.</p>;
  }

  return (
    <p>
      Welcome {auth.currentUser}!{" "}
      <button onClick={function () {}}>Sign out</button>
    </p>
  );
}
