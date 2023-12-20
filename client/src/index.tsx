import { Auth0Provider } from "@auth0/auth0-react";
import React from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import "./i18n";

const container = document.getElementById("root") as HTMLElement;
const root = createRoot(container);

const auth0Domain = import.meta.env.VITE_AUTH0_DOMAIN_ADDRESS as string;
const auth0ClientId = import.meta.env.VITE_AUTH0_CLIENT_ID as string;

root.render(
  <React.StrictMode>
    <React.Suspense fallback="loading">
      <Auth0Provider
        domain={auth0Domain}
        clientId={auth0ClientId}
        redirectUri={window.location.origin}
      >
        <App />
      </Auth0Provider>
    </React.Suspense>
  </React.StrictMode>
);
