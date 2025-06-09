import Home from "../pages/Home";
import MyProject from "../pages/MyProject";
export const routes = [
  { path: "/", element: <Home /> },
  { path: "/home", element: <Home /> },
  { path: "/myproject/:title", element: <MyProject /> },
];
