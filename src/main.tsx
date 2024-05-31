import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import SuspenseLoading from "./components/SuspenseLoading.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Suspense fallback={<SuspenseLoading />}>
      <Router>
        <App />
      </Router>
    </Suspense>
  </React.StrictMode>
);
