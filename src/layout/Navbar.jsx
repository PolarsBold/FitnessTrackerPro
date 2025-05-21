import { useAuth } from "../auth/AuthContext";
import { NavLink } from "react-router-dom";

/** Navbar with site navigation links */
export default function Navbar() {
  const { token, logout } = useAuth();
  return (
    <header>
      <p>Fitness Trackr</p>
      <nav>
        <NavLink to={"/"}>Activities</NavLink>
        {token ? (
          <button onClick={() => logout()}>Log out</button>
        ) : (
          <>
            <NavLink to={"/register"}>Register</NavLink>
            <NavLink to={"/login"}>Login</NavLink>
          </>
        )}
      </nav>
    </header>
  );
}
