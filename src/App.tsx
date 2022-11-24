import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppThunkDispatch, rootState } from "./redux/store";
import { Controls, Header, Main } from "./sections";
import { getAllCountries } from "./redux/api/api";
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
      <Header />
      <Controls />
      <Main />
    </main>
  );
}

export default App;
