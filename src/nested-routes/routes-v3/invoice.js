import { useLoaderData } from "react-router-dom";

import { getInvoice } from "./data";

export async function loader({ params }) {
  return getInvoice(parseInt(params.invoiceId, 10));
}

export function Invoice() {
  const invoice = useLoaderData();

  return (
    <main style={{ padding: "1rem" }}>
      <h2>Total Due: {invoice.amount}</h2>
      <p>
        {invoice.name}: {invoice.number}
      </p>
      <p>Due Date: {invoice.due}</p>
    </main>
  );
}