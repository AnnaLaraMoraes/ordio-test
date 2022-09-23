import { useState } from "react";
import { LateralMenu } from "./pages/lateral-menu/lateral-menu";
import { Header } from "./pages/header/header";

function App() {
  return (
    <div className="flex h-screen">
      <LateralMenu />
      <Header />
    </div>
  );
}

export default App;
