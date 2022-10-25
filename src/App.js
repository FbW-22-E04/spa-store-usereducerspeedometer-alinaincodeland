import "./App.css";
import Car from "./components/Car";
import CarContextProvider from "./components/Context";
import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  return (
    <CarContextProvider>
      <div className="App">
        <Car />
      </div>
    </CarContextProvider>
  );
}

export default App;
