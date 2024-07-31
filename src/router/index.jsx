import App from "../App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout } from "../layout";
import AddUser from "../pages/addUser";
import ViewUser from "../pages/viewUser";
import UpdateUser from "../pages/updateUser";
import Error from "../pages/error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Layout />,
        children: [
          { path: "adduser", element: <AddUser /> },
          { path: "viewuser", element: <ViewUser /> },
          { path: "updateuser", element: <UpdateUser /> },
        ],
      },
    ],
  },
  {
    path: "/*",
    element: <Error />,
  },
]);

export const RouterConfiguration = () => {
  return <RouterProvider router={router} />;
};
