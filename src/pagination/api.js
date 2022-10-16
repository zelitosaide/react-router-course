const BASE_URL = "http://localhost:5000";

export async function getInvoices(page = 1, limit = 5) {
  return await fetch(`${BASE_URL}/invoices?page=${page}&limit=${limit}`);
}

export async function getInvoice(invoiceId) {
  return await fetch(`${BASE_URL}/invoices/${invoiceId}`);
}

