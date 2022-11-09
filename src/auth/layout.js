import { Link, Outlet } from "react-router-dom";

export function Layout() {
  return (
    <div>
      <h1>Layout</h1>
      {/* AuthStatus */}

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
