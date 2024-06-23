import React from "react";
import ReactDOM from "react-dom/client";
// import App from './App.jsx'
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./layout/Root.jsx";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import AllArtCraft from './pages/AllArtCraft.jsx';
import AddCraftItem from './pages/AddCraftItem.jsx';
import MyArtCraftList from './pages/MyArtCraftList.jsx';
import AuthProvider from "./provider/AuthProvider.jsx";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import PrivateRoute from "./PrivateRoute/PrivateRoute.jsx";
import ViewDetails from "./pages/ViewDetails.jsx";
import UpdateItem from "./pages/UpdateItem.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import CategoriesSection from "./component/CategoriesSection.jsx";
import ItemByCategory from "./component/ItemByCategory.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/all_art_craft",
        element: <AllArtCraft />,
        loader: () => fetch("https://painting-server-wheat.vercel.app/craft_items")
      },
      {
        path: "/add-craft_item",
        element: <PrivateRoute>
          <AddCraftItem />
        </PrivateRoute>,
      },
      {
        path: "/my_art_craft_list",
        element: <PrivateRoute>
          <MyArtCraftList />
        </PrivateRoute>,
      },
      {
        path: "/view_details/:id",
        element: <PrivateRoute>
          <ViewDetails />
        </PrivateRoute>,
        loader: ({params}) => fetch(`https://painting-server-wheat.vercel.app/view_details/${params.id}`)
      },
      {
        path: "/update_item/:id",
        element: <UpdateItem />,
        loader: ({params}) => fetch(`https://painting-server-wheat.vercel.app/craft_items/${params.id}`)
      },
      {
        path: "/categories/:id",
        element: <ItemByCategory />,
        loader: ({params}) => fetch(`https://painting-server-wheat.vercel.app/categories/${params.id}`)
      }
      
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
      <ToastContainer className='mt-20' theme="colored" />
    </AuthProvider>
  </React.StrictMode>
);
