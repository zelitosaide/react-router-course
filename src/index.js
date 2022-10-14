import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";

import './index.css';



// import {
//   Root,
//   loader as rootLoader,
//   action as rootAction
// } from './routes/root';
// import { ErrorPage } from "./error-page";
// import {
//   Contact,
//   loader as contactLoader,
//   action as contactAction
// } from './routes/contact';
// import {
//   EditContact,
//   loader as editContactLoader,
//   action as editContactAction
// } from "./routes/edit-contact";
// import { action as destroyAction } from "./routes/destroy";
// import { Index } from './routes';

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Root />,
//     errorElement: <ErrorPage />,
//     loader: rootLoader,
//     action: rootAction,
//     children: [
//       {
//         errorElement: <ErrorPage />,
//         children: [
//           {
//             index: true,
//             element: <Index />
//           },
//           {
//             path: "contacts/:contactId",
//             element: <Contact />,
//             loader: contactLoader,
//             action: contactAction
//           },
//           {
//             path: "contacts/:contactId/edit",
//             element: <EditContact />,
//             loader: editContactLoader,
//             action: editContactAction
//           },
//           {
//             path: "contacts/:contactId/destroy",
//             action: destroyAction,
//             errorElement: <div>Oops! There was an error.</div>
//           }
//         ]
//       }
//     ]
//   },
// ]);




// import { Root } from './nested-routes/routes-v1/root';
// import { Panel, loader as panelLoader } from './nested-routes/routes-v1/panel';
// import { PanelItem, loader as panelItemLoader } from './nested-routes/routes-v1/panel-item';
// import { PanelSubitem, loader as panelSubitemLoader } from './nested-routes/routes-v1/panel-subitem';

// Nested Routes : v1

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Root />,
//     children: [
//       {
//         path: ":panelId",
//         loader: panelLoader,
//         element: <Panel />,
//         children: [
//           {
//             path: ":panelItemId",
//             loader: panelItemLoader,
//             element: <PanelItem />,
//             children: [
//               {
//                 path: ":panelSubitemId",
//                 loader: panelSubitemLoader,
//                 element: <PanelSubitem />
//               }
//             ]
//           }
//         ]
//       }
//     ]
//   }
// ]);

import { Root as RootV2 } from './nested-routes/routes-v2/root';
import { Dashboard } from './nested-routes/routes-v2/dashboard';
import { Accounts } from './nested-routes/routes-v2/accounts';
import { Sales, loader as salesNav } from './nested-routes/routes-v2/sales';
import { Expenses } from './nested-routes/routes-v2/expenses';
import { Reports } from './nested-routes/routes-v2/reports';
import { SalePanel, loader as salePanelLoader } from './nested-routes/routes-v2/sale-panel';
import { ListItem, loader as listItemLoader } from './nested-routes/routes-v2/listItem';

// Nested Routes : v3

import { Root as Rootv3 } from './nested-routes/routes-v3/root';
import { Expenses as ExpensesV3 } from './nested-routes/routes-v3/expenses';
import {
  Invoices as InvoicesV3,
  loader as invoicesLoader
} from './nested-routes/routes-v3/invoices';
import { Invoice, loader as invoiceLoader } from './nested-routes/routes-v3/invoice';

const nestedRoutesRouterV2 = createBrowserRouter([
  {
    path: "/",
    element: <RootV2 />,
    children: [
      {
        path: "dashboard",
        element: <Dashboard />
      },
      {
        path: "accounts",
        element: <Accounts />
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
                element: <ListItem />
              }
            ]
          }
        ]
      },
      {
        path: "expenses",
        element: <Expenses />
      },
      {
        path: "reports",
        element: <Reports />
      },
    ]
  }
]);



const nestedRoutesRouterV3 = createBrowserRouter([
  {
    path: "/",
    element: <Rootv3 />,
    children: [
      {
        path: "expenses",
        element: <ExpensesV3 />
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
            )
          }
        ]
      },
      {
        path: "*",
        element: (
          <main style={{ padding: "1rem" }}>
            <p>There's nothing here!</p>
          </main>
        )
      }
    ]
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <RouterProvider router={nestedRoutesRouterV3} />
);