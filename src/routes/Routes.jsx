import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import ErrorPage from "../components/pages/ErrorPage";
import Home from "../components/Home/Home";
import LogIn from "../components/pages/LogIn";
import Register from "../components/pages/Register";
import AllCraft from "../components/pages/AllCraft";
import AddCraft from "../components/pages/AddCraft";
import MyCraftList from "../components/pages/MyCraftList";
import ViewDetails from "../components/pages/ViewDetails";
import UpdateCraft from "../components/pages/UpdateCraft";
import PrivetRoute from "./PrivetRoute";
import CategoryViewDetails from "../components/pages/CategoryViewDetails";

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
        path: "/logIn",
        element: <LogIn />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/allCraft",
        element: <AllCraft />,
        loader: () => fetch("https://drawing-den-server.vercel.app/crafts"),
      },
      {
        path: "/artDetails/:id",
        element: (
          <PrivetRoute>
            <ViewDetails />
          </PrivetRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://drawing-den-server.vercel.app/crafts/${params.id}`),
      },
      {
        path: "/addCraft",
        element: (
          <PrivetRoute>
            <AddCraft />
          </PrivetRoute>
        ),
      },
      {
        path: "/updateCraft/:id",
        element: (
          <PrivetRoute>
            <UpdateCraft />
          </PrivetRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://drawing-den-server.vercel.app/crafts/${params.id}`),
      },
      {
        path: "/myCraftList",
        element: (
          <PrivetRoute>
            <MyCraftList />
          </PrivetRoute>
        ),
      },
      {
        path: "/categoryDetails/:id",
        element: <CategoryViewDetails />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/category/${params.id}`),
      },
    ],
  },
]);

export default router;
