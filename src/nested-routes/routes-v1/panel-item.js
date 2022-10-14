import { NavLink, Outlet, useLoaderData } from "react-router-dom";

export async function loader({ params }) {
  return params.panelItemId;
}

export function PanelItem() {
  const panelItemId = useLoaderData();

  const listItems = ["500", "600", "100", "300", "400", "800"];

  return (
    <div>
      <h1>{panelItemId}</h1>

      <nav>
        <ul>
          {listItems.map(function (item) {
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

      <div id="panel-subitem">
        <Outlet />
      </div>
    </div>
  );
}