import { NavLink, Outlet } from "react-router-dom";

export function Root() {
  const sidebarItems = [
    "Dashboard",
    "Accounts",
    "Sales",
    "Expenses",
    "Reports"
  ];

  return (
    <>
      <div id="sidebar">
        <h1>React Router: Nested Routes</h1>
        <nav>
          <ul>
            {sidebarItems.map(function (item) {
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
      </div>
      <div id="detail">
        <Outlet />
      </div>
    </>
  );
}