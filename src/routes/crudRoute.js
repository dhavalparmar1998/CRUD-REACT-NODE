import { createBrowserRouter } from "react-router-dom";
import App from "../components/App";
import Add from "../components/Add";
import Show from "../components/Show";
import Update from "../components/Update";
import Search from "../components/Search";

const crudRoute = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/add",
        element: <Add />,
      },
      {
        path: "/",
        element: <Show />,
      },
      {
        path: "/edit/:userid",
        element: <Update />,
      },
      {
        path: "/search",
        element: <Search />,
      },
    ],
  },
]);

export default crudRoute;
