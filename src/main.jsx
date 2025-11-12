import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home.jsx";
import {createBrowserRouter,createRoutesFromElements,Route,RouterProvider} from "react-router-dom";
import About from "./pages/About.jsx";
import TicTacToe from "./pages/TicTacToe.jsx";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="home" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="game" element={<TicTacToe />} />
      <Route path="*" element={<h1>404 Not Found</h1>} />
    </Route>
  )
);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
