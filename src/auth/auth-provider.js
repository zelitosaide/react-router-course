import { useState } from "react";

import { AuthContext } from "./auth-context";

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);

  function signin(user, callback) {
    fetch("..." + user)
      .then(function (response) {
        return response.json();
      })
      .then(function (user) {
        setCurrentUser(user);
        callback();
      });
  }

  function signout(callback) {
    fetch("...")
      .then(function (response) {
        return response.json();
      })
      .then(function () {
        setCurrentUser(null);
        callback();
      });
  }

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
