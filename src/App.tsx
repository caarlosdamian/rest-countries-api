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
  useEffect(() => {
    dispatch(getAllCountries());
  }, [dispatch]);

  return (
    <main
      className={`App ${(theme && "dark") || ""}`}
      data-testid="application"
    >
      <RouterProvider router={router} />
    </main>
  );
}

export default App;
