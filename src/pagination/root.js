import { Link, Outlet } from "react-router-dom";

export function Root() {
  const sidebarItems = [
    "Dashboard", "Accounts", "Sales", "Expenses", "Reports"
  ].map(function (item) {
    return (
      <li key={item}>
        <Link to={`${item.toLowerCase()}`}>
          {item}
        </Link>
      </li>
    );
  });

  return (
    <>
      <div style={{ float: "left", width: "250px", borderRight: "1px solid #888" }}>
        <h3 style={{ padding: 5 }}>React Router Bookkeeper</h3>
        <ul>
          {sidebarItems}
        </ul>
      </div>
      <div style={{ float: "left", width: "calc(100% - 250px)" }}>
        <Outlet />
      </div>
    </>
  );
}