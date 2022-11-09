import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";

import {
  Root,
  loader as rootLoader,
  action as rootAction,
} from "./routes/root";
import { ErrorPage } from "./error-page";
import {
  Contact,
  loader as contactLoader,
  action as contactAction,
} from "./routes/contact";
import {
  EditContact,
  loader as editContactLoader,
  action as editContactAction,
} from "./routes/edit-contact";
import { action as destroyAction } from "./routes/destroy";
import { Index } from "./routes";

// Nested Routes : v1
import { Root as RootV1 } from "./nested-routes/routes-v1/root";
import { Panel, loader as panelLoader } from "./nested-routes/routes-v1/panel";
import {
  PanelItem,
  loader as panelItemLoader,
} from "./nested-routes/routes-v1/panel-item";
import {
  PanelSubitem,
  loader as panelSubitemLoader,
} from "./nested-routes/routes-v1/panel-subitem";

// Nested Routes : v2
import { Root as RootV2 } from "./nested-routes/routes-v2/root";
import { Dashboard } from "./nested-routes/routes-v2/dashboard";
import { Accounts } from "./nested-routes/routes-v2/accounts";
import { Sales, loader as salesNav } from "./nested-routes/routes-v2/sales";
import { Expenses } from "./nested-routes/routes-v2/expenses";
import { Reports } from "./nested-routes/routes-v2/reports";
import {
  SalePanel,
  loader as salePanelLoader,
} from "./nested-routes/routes-v2/sale-panel";
import {
  ListItem,
  loader as listItemLoader,
} from "./nested-routes/routes-v2/listItem";

// Nested Routes : v3
import { Root as Rootv3 } from "./nested-routes/routes-v3/root";
import { Expenses as ExpensesV3 } from "./nested-routes/routes-v3/expenses";
import {
  Invoices as InvoicesV3,
  loader as invoicesLoader,
} from "./nested-routes/routes-v3/invoices";
import {
  Invoice,
  loader as invoiceLoader,
} from "./nested-routes/routes-v3/invoice";

// Pagination
import { Root as PaginationRoot } from "./pagination/root";
import { Accounts as PagAccounts } from "./pagination/accounts";
import { Dashboard as PagDashboard } from "./pagination/dashboard";
import { Sales as PagSales } from "./pagination/sales";
import { Expenses as PagExpenses } from "./pagination/expenses";
import { Reports as PagReports } from "./pagination/reports";
import { Overview } from "./pagination/overview";
import { Subscriptions } from "./pagination/subscriptions";
import { Invoices, loader as pagInvoicesLoader } from "./pagination/invoices";
import { Customers } from "./pagination/customers";
import { Deposits } from "./pagination/deposits";
import {
  Invoice as PagInvoice,
  loader as pagInvoiceLoader,
} from "./pagination/invoice";
import { Auth } from "./auth/auth";

// Auth
import { Root as AuthRoot } from "./auth/root";
import { Layout } from "./auth/layout";
import { PublicPage } from "./auth/public-page";
import { LoginPage } from "./auth/login-page";
import { RequireAuth } from "./auth/require-auth";
import { ProtectedPage } from "./auth/protected-page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    action: rootAction,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          {
            index: true,
            element: <Index />,
          },
          {
            path: "contacts/:contactId",
            element: <Contact />,
            loader: contactLoader,
            action: contactAction,
          },
          {
            path: "contacts/:contactId/edit",
            element: <EditContact />,
            loader: editContactLoader,
            action: editContactAction,
          },
          {
            path: "contacts/:contactId/destroy",
            action: destroyAction,
            errorElement: <div>Oops! There was an error.</div>,
          },
        ],
      },
    ],
  },
]);

// Nested Routes : v1
const nestedRoutesRouterV1 = createBrowserRouter([
  {
    path: "/",
    element: <RootV1 />,
    children: [
      {
        path: ":panelId",
        loader: panelLoader,
        element: <Panel />,
        children: [
          {
            path: ":panelItemId",
            loader: panelItemLoader,
            element: <PanelItem />,
            children: [
              {
                path: ":panelSubitemId",
                loader: panelSubitemLoader,
                element: <PanelSubitem />,
              },
            ],
          },
        ],
      },
    ],
  },
]);

// Nested Routes : v2
const nestedRoutesRouterV2 = createBrowserRouter([
  {
    path: "/",
    element: <RootV2 />,
    children: [
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "accounts",
        element: <Accounts />,
      },
      {
        path: "sales",
        loader: salesNav,
        element: <Sales />,
        children: [
          {
            path: ":salePanelId",
            loader: salePanelLoader,
            element: <SalePanel />,
            children: [
              {
                path: ":listItemId",
                loader: listItemLoader,
                element: <ListItem />,
              },
            ],
          },
        ],
      },
      {
        path: "expenses",
        element: <Expenses />,
      },
      {
        path: "reports",
        element: <Reports />,
      },
    ],
  },
]);

// Nested Routes : v3
const nestedRoutesRouterV3 = createBrowserRouter([
  {
    path: "/",
    element: <Rootv3 />,
    children: [
      {
        path: "expenses",
        element: <ExpensesV3 />,
      },
      {
        path: "invoices",
        loader: invoicesLoader,
        element: <InvoicesV3 />,
        children: [
          {
            path: ":invoiceId",
            loader: invoiceLoader,
            element: <Invoice />,
          },
          {
            index: true,
            element: (
              <main style={{ padding: "1rem" }}>
                <p>Select an invoice</p>
              </main>
            ),
          },
        ],
      },
      {
        path: "*",
        element: (
          <main style={{ padding: "1rem" }}>
            <p>There's nothing here!</p>
          </main>
        ),
      },
    ],
  },
]);

// Pagination
const paginationRoutesRouter = createBrowserRouter([
  {
    path: "/",
    element: <PaginationRoot />,
    children: [
      {
        path: "dashboard",
        element: <PagDashboard />,
      },
      {
        path: "accounts",
        element: <PagAccounts />,
      },
      {
        path: "sales",
        element: <PagSales />,
        children: [
          {
            path: "overview",
            element: <Overview />,
          },
          {
            path: "subscriptions",
            element: <Subscriptions />,
          },
          {
            path: "invoices",
            loader: pagInvoicesLoader,
            element: <Invoices />,
            children: [
              {
                path: ":invoiceId",
                loader: pagInvoiceLoader,
                element: <PagInvoice />,
              },
              {
                index: true,
                element: <p style={{ paddingLeft: 5 }}>Select an invoice</p>,
              },
            ],
          },
          {
            path: "customers",
            element: <Customers />,
          },
          {
            path: "deposits",
            element: <Deposits />,
          },
        ],
      },
      {
        path: "expenses",
        element: <PagExpenses />,
      },
      {
        path: "reports",
        element: <PagReports />,
      },
    ],
  },
]);

// Auth
const authRoutesRouter = createBrowserRouter([
  // {
  //   path: "/",
  //   element: <AuthRoot />,
  //   children: [
  //     {
  //       path: "contact",
  //       element: <div>Contact</div>,
  //     },
  //     {
  //       path: "dashboard",
  //       element: <div>Dashboard</div>,
  //       loader: async function ({ request }) {
  //         fetch("/api/dashboard.json", {
  //           signal: request.signal,
  //         });
  //       },
  //     },
  //     {
  //       element: <div>Auth Layout</div>,
  //       children: [
  //         {
  //           path: "login",
  //           element: <div>Login</div>,
  //           loader: async function redirectIfUser() {},
  //         },
  //         {
  //           path: "logout",
  //           action: async function logoutUser() {},
  //         },
  //       ],
  //     },
  //   ],
  // },
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <PublicPage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/protected",
        element: (
          <RequireAuth>
            <ProtectedPage />
          </RequireAuth>
        ),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={authRoutesRouter} />);
