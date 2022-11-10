import { Link, Outlet } from "react-router-dom";
import { AuthStatus } from "./auth-status";

export function Layout() {
  return (
    <div>
      <AuthStatus />

      <ul>
        <li>
          <Link to="/">Public Page</Link>
        </li>
        <li>
          <Link to="/protected">Protected Page</Link>
        </li>
      </ul>
      <h2>Layout Outlet</h2>
      <Outlet />
    </div>
  );
}
