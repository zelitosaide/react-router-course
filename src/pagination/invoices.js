import { useState } from "react";
import { Form, Link, Outlet, useLoaderData } from "react-router-dom";

import { getInvoices } from "./api";

export async function loader({ request }) {
  const url = new URL(request.url);
  const page = url.searchParams.get("page");
  return getInvoices(page, 4);
}

export function Invoices() {
  const { items: invoices, total } = useLoaderData();
  const [page, setPage] = useState(1);

  const invoiceItems = invoices.map(function (item, index) {
    return (
      <li key={index}>
        <Link to={`${item._id}`}>
          {item.name}
        </Link>
      </li>
    );
  });

  return (
    <>
      <div style={{ float: "left", width: "50%", borderRight: "1px solid #888" }}>
        <h4 style={{ fontSize: "12px", padding: 5 }}>
          INVOICE LIST
        </h4>
        {invoices?.length && (
          <ol>
            {invoiceItems}
          </ol>
        )}
        <Form>
          <div style={{ padding: 5 }}>
            <button
              type="submit"
              style={{ marginRight: 5 }}
              name="page"
              value={page}
              onClick={function () {
                if (page > 1) {
                  setPage(prev => prev - 1);
                }
              }}
            >
              Previous
            </button>
            <button
              type="submit"
              name="page"
              value={page}
              onClick={function () {
                if (page < Math.ceil(total / 4)) {
                  setPage(prev => prev + 1);
                }
              }}
            >
              Next
            </button>
          </div>
        </Form>
      </div>
      <div style={{ float: "left", width: "50%" }}>
        <Outlet />
      </div>
    </>
  );
}