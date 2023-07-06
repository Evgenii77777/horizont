import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Container } from "./components/container";
import { Header } from "./components/header";
import { ImagesPages } from "./pages/images";
import { MainPages } from "./pages/main";

import "./index.css";
import { Footer } from "./components/footer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Container>
        <Header />
        <Routes>
          <Route path="/" element={<MainPages />} />
          <Route path="/:imagesId" element={<ImagesPages />} />
        </Routes>
        <Footer />
      </Container>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
