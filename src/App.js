import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home/Home";
import Main from "./Components/Main/Main";
import About from "./Components/About/About";
import Services from "./Components/Services/Services";
import Blog from "./Components/Blog/Blog";
import Contact from "./Components/Contact/Contact";
import Registration from "./Components/User/Registration";
import Login from "./Components/User/Login";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "/home",
          element: <Home></Home>,
        },
        {
          path: "/about",
          element: <About></About>,
        },
        {
          path: "/services",
          element: <Services></Services>,
        },
        {
          path: "/blog",
          element: <Blog></Blog>,
        },
        {
          path: "/contact",
          element: <Contact></Contact>,
        },
        {
          path: "/register",
          element: <Registration></Registration>,
        },
        {
          path: "/login",
          element: <Login></Login>,
        },
      ],
    },
  ]);
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
