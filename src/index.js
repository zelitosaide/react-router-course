import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";

import './index.css';

import {
  Root,
  loader as rootLoader,
  action as rootAction
} from './routes/root';
import { ErrorPage } from "./error-page";
import {
  Contact,
  loader as contactLoader,
  action as contactAction
} from './routes/contact';
import {
  EditContact,
  loader as editContactLoader,
  action as editContactAction
} from "./routes/edit-contact";
import { action as destroyAction } from "./routes/destroy";
import { Index } from './routes';

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
            element: <Index />
          },
          {
            path: "contacts/:contactId",
            element: <Contact />,
            loader: contactLoader,
            action: contactAction
          },
          {
            path: "contacts/:contactId/edit",
            element: <EditContact />,
            loader: editContactLoader,
            action: editContactAction
          },
          {
            path: "contacts/:contactId/destroy",
            action: destroyAction,
            errorElement: <div>Oops! There was an error.</div>
          }
        ]
      }
    ]
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <RouterProvider router={router} />
);
