import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import ListedBooks from "./Pages/ListedBooks.jsx";
import PagesToRead from "./Pages/PagesToRead.jsx";
import MainLayout from "./Layouts/MainLayout.jsx";
import Home from "./Pages/Home.jsx";
import Blog from "./Pages/Blog.jsx";
import NotFound from "./Pages/NotFound.jsx";
import Authors from "./Pages/Authors..jsx";
import AboutUs from "./Pages/AboutUs.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("data.json"),
      },

      {
        path: "/listed-books",
        element: <ListedBooks></ListedBooks>,
        loader: () => fetch('/data.json')
      },
      {
        path: "/pages-to-read",
        element: <PagesToRead></PagesToRead>,
      },
      {
        path: "/authors",
        element: <Authors></Authors>,
        loader: () => fetch("/data.json"),
      },
      {
        path: "/about-us",
        element:<AboutUs></AboutUs> ,
      },
      {
        path: '/blog/:id',
        element: <Blog></Blog>,
        loader: () => fetch('/data.json')
      },
      {
        path:'*',
         element:<NotFound />
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
