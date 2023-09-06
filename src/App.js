import React from "react";
import ReactDOM from "react-dom";
import Header from "./Components/Header";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));




const App = () => {
  return (
    <div>
      <Header />
    </div>
  );
};

const router = createBrowserRouter([
    {
        path:'/' ,
        element:<App/>
    }
]);



root.render(<RouterProvider router={router}/>);
