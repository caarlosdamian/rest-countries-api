import React from "react";
import "./App.scss";
import { Controls, Header, Main } from "./sections";

function App() {
  return (
    <main className="App">
      <Header />
      <Controls />
      <Main />
    </main>
  );
}

export default App;