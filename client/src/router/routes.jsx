import { Navigate, useRoutes } from "react-router-dom";
import Home from "../components/Home";
import Tel from "../components/Tel";
import Email from "../components/Email";
import AddOrEdit from "../components/AddOrEdit";
import About from "../components/About";

function Routes() {
  return useRoutes([
    {
      path: "/home",
      element: <Home />,
    },
    {
      path: "/about",
      element: <About />,
      children: [
        {
          path: "tel",
          element: <Tel />,
        },
        {
          path: "email",
          element: <Email />,
        },
        {
          path: "",
          element: <Navigate replace to={"tel"} />,
        },
      ],
    },
    {
      path: "/add",
      element: <AddOrEdit />,
    },
    {
      path: "/",
      element: <Navigate replace to={"/home"} />,
    },
  ]);
}

export default Routes;
