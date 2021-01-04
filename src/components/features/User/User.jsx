import React from "react";
import { useHistory } from "react-router-dom";
import { useAuth } from "../../../core/auth/auth";

const User = () => {
  let history = useHistory();
  let auth = useAuth();
  return auth.user ? (
    <main>
      Welcome!
      <button
        onClick={() => {
          auth.signout(() => history.push("/"));
        }}
      >
        Sign out
      </button>
    </main>
  ) : (
    <p>You are not logged in.</p>
  );
};

export default User;
