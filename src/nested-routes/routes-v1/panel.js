import { NavLink, Outlet, useLoaderData } from "react-router-dom";

export async function loader({ params }) {
  return params.panelId;
}

export function Panel() {
  const panelId = useLoaderData();

  const navItems = [
    "Overview",
    "Subscriptions",
    "Invoices",
    "Customers",
    "Deposits"
  ];

  return (
    <div id="contact">
      <h1>{panelId.toUpperCase()}</h1>
      <nav>
        <ul>
          {navItems.map(function (item) {
            return (
              <li key={item}>
                <NavLink
                  to={`${item.toLowerCase()}`}
                  className={function ({ isActive, isPending }) {
                    return isActive
                      ? "active"
                      : isPending
                        ? "pending"
                        : ""
                  }}
                >
                  {item}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
      <div id="panel-item">
        <Outlet />
      </div>
    </div>
  );
}