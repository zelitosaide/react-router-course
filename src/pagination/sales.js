import { Link, Outlet } from "react-router-dom";

export function Sales() {
  const navItems = [
    "Overview", "Subscriptions", "Invoices", "Customers", "Deposits"
  ].map(function (item) {
    return (
      <li key={item} style={{ float: "left", padding: 5, listStyle: "none" }}>
        <Link style={{ textDecoration: "none" }} to={`${item.toLowerCase()}`}>
          {item}
        </Link>
      </li>
    );
  });

  return (
    <>
      <div>
        <h3 style={{ padding: 5 }}>Sales</h3>
        <ul id="nav" style={{ margin: 0, padding: 0, borderBottom: "1px solid #888" }}>
          {navItems}
        </ul>
      </div>
      <div>
        <Outlet />
      </div>
    </>
  );
}