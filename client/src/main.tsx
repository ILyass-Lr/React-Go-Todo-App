// src/main.tsx
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "@/components/ui/provider";
import App from "./App";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Provider>
        <App />
      </Provider>
    </QueryClientProvider>
  </React.StrictMode>
);


