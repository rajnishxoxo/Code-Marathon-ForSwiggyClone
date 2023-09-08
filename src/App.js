import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Cart from "./Components/Cart";
import Body from "./Components/Body";
import { Provider } from "react-redux";
import appStore from "./Utils/CartStore";
import Product from "./Components/Product";
import Login from "./Pages/Login";

const root = ReactDOM.createRoot(document.getElementById("root"));

const App = () => {
  return (
    <div>
      <Provider store={appStore}>
        <Header />

        <Outlet />
      </Provider>
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Body />,
      },
      {
        path: '/cart',
        element: <Cart />,
      },
      {
        path: '/product',
        element: <Product />,
      },
      {
        path: '/login',
        element: <Login />,
      },
    ],
  },
  
]);


root.render(<RouterProvider router={router} />);
