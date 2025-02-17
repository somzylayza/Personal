import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import WomenCollection from "./pages/WomenCollection";
import Login from "./pages/Login";
import ShoppingCart from "./pages/ShoppingCart";
import ProductDetails from "./pages/ProductDetails";
import Checkout from "./pages/CheckOut";
import SignUp from "./pages/SignUp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // Wrap everything in Layout
    children: [
      { path: "/", element: <Home /> },
      { path: "/women-collection", element: <WomenCollection /> },
      // { path: "/login", element: <Login /> },
      { path: "/cart", element: <ShoppingCart /> },
      { path: "/product", element: <ProductDetails /> },
      { path: "/checkout", element: <Checkout /> },
      // { path: "/signup", element: <SignUp /> },
    ],
  },

  {
    path:"/login",
    element:<Login/>,
  },

  {
    path:"/signup",
    element:<SignUp/>,
  },


]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
