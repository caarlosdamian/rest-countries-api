import { createBrowserRouter } from "react-router-dom";
import { Country } from "../pages/Country/Country";
import { Home } from "../pages/Home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/country/:countryid",
    element: <Country />,
  },
]);
