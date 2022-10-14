import { NavLink, Outlet, useLoaderData } from "react-router-dom";

export async function loader({ params }) {
  return {
    items: ["500", "600", "100", "300", "400", "800"],
    salePanel: params.salePanelId
  };
}

export function SalePanel() {
  const { items, salePanel } = useLoaderData();

  return (
    <div>
      <h1>{salePanel}</h1>

      <nav>
        <ul>
          {items.map(function (item) {
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

      <div id="list-item">
        <Outlet />
      </div>
    </div>
  );
}