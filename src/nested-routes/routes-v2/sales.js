import { NavLink, Outlet, useLoaderData } from "react-router-dom";

export async function loader() {
  return [
    "Overview",
    "Subscriptions",
    "Invoices",
    "Customers",
    "Deposits"
  ];
}

export function Sales() {
  const navItems = useLoaderData();

  return (
    <div>
      <h1>Sales</h1>

      <nav>
        <ul>
          {navItems.map(function (item) {
            return (
              <li key={item}>
                <NavLink
                  to={`${item.toLowerCase()}`}
                  className={function ({ isActive, isPending }) {
                    return isActive ? "active" : isPending ? "pending" : ""
                  }}
                >
                  {item}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>

      <div id="sales">
        <Outlet />
      </div>
    </div>
  );
}