import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppThunkDispatch, rootState } from "./redux/store";
import { getAllCountries } from "./redux/api/api";
import "./App.scss";
import { Home } from "./pages/Home/Home";

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
      <Home />
    </main>
  );
}

export default App;
