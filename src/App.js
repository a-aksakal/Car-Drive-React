import React from "react";
import HomePage from "./pages/HomePage/HomePage";
import { CarDetailProvider } from "./store/CarDetailContext";
function App() {
  return (
    <CarDetailProvider>
      <HomePage />
    </CarDetailProvider>
  );
}

export default App;
