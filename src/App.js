import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Cart from "./Components/Cart";
import Body from "./Components/Body";
import { Provider } from "react-redux";
import cartStore from "./Utils/CartStore";

const root = ReactDOM.createRoot(document.getElementById("root"));

const App = () => {
  return (
    <div>
      <Provider store={cartStore}>
        <Header />

        <Outlet />
      </Provider>
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },

      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);

root.render(<RouterProvider router={router} />);
