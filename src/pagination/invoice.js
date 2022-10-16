import { useLoaderData } from "react-router-dom";

import { getInvoice } from "./api";

export async function loader({ params }) {
  return getInvoice(params.invoiceId);
}

export function Invoice() {
  const invoice = useLoaderData();

  return (
    <div>
      <h4 style={{ fontSize: "12px", padding: 5 }}>
        INVOICE DETAILS
      </h4>
      <div style={{ padding: "0 5px" }}>
        <h5 style={{ padding: 0, margin: 0 }}>Total Due: {invoice.amount}</h5>
        <p>
          {invoice.name}: {invoice.number}
        </p>
        <p>Due Date: {invoice.due}</p>
      </div>
    </div>
  );
}