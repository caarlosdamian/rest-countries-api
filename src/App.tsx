import React from "react";
import { useSelector } from "react-redux";
import { rootState } from "./redux/store";
import { Controls, Header, Main } from "./sections";
import "./App.scss";

function App() {
  const { theme } = useSelector((state: rootState) => state.theme);

  return (
    <main className={`App ${theme && "dark" || ''}`} data-testid="application">
      <Header />
      <Controls />
      <Main />
    </main>
  );
}

export default App;
