import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppRoutes } from "./routes/routes.ts";
import "./globals.css";
import App from "./app.tsx";
import Home from "./presentation/home/page.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path={AppRoutes.DEFAULT} element={<App />} />
        <Route path={AppRoutes.HOME} element={<Home />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
