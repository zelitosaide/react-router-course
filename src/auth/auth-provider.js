import { useState } from "react";

import { AuthContext } from "./auth-context";

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);

  function signin() {}

  function signout() {}

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        signin,
        signout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
