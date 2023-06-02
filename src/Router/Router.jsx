import {
  createBrowserRouter,
} from "react-router-dom";
import Main from "../main/Main";



export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "home",
        element: <div>About</div>,
      },
      {
        path: "pages",
        element: <div>Pages</div>,
      },
      {
        path: "user",
        element: <div>user account</div>,
      },
      {
        path: "vendor",
        element: <div>vendor account</div>,
      },
      {
        path: "track",
        element: <div>track my order</div>,
      },
      {
        path: "contact",
        element: <div>contact</div>,
      },
    ],
  },
]);
