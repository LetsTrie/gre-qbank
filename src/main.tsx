import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "katex/dist/katex.min.css";

import App from "./App.tsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Dashboard, Notes, Vocabulary, InterviewQuestion } from "./layouts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "/notes",
        element: <Notes />,
      },
      {
        path: "/vocabulary",
        element: <Vocabulary />,
      },
      {
        path: "/interview-questions",
        element: <InterviewQuestion />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
    <RouterProvider router={router} />
  </React.StrictMode>
);
