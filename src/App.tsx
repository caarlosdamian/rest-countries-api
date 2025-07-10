import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppThunkDispatch, rootState } from "./redux/store";
import { getAllCountries } from "./redux/api/api";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import "./App.scss";

function App() {
  const { theme } = useSelector((state: rootState) => state.theme);
  const dispatch = useDispatch<AppThunkDispatch>();

  // const con = document.getElementsByTagName("body")[0];

  useEffect(() => {
    dispatch(getAllCountries());
  }, [dispatch]);

  // useEffect(() => {
  //   if (theme) {
  //     con.classList.add("dark");
  //   } else {
  //     con.classList.remove("dark");
  //   }
  // }, [theme]);

  return (
    <main
      className={`App ${theme ? 'dark': ''}`}
      data-testid="application"
    >
      <RouterProvider router={router} />
    </main>
  );
}

export default App;
