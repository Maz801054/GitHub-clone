import "./App.css";
import Learn from "./Components/Learncompo/Learn";
import Navbar from "./Components/Navbar";
import Section1 from "./Components/Section1";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Tutorial from "./Components/sideComponents/Tutorial";
import ThinkingInReat from "./Components/sideComponents/ThinkingInReat";
import { useState } from "react";

function App() {
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "black";
      document.body.style.color = "white";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "grey";
    }
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "black";
      document.body.style.color = "white";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
    }
  };

  return (
    <div>
      <BrowserRouter>
        <Navbar mode={mode} toggleMode={toggleMode} />
        <Routes>
          <Route path="Sec" element={<Section1 />} />
          <Route
            path="/"
            element={<Learn mode={mode} toggleMode={toggleMode} />}
          >
            <Route
              path="Tic"
              element={<Tutorial mode={mode} toggleMode={toggleMode} />}
            />
            <Route path="Thinking" element={<ThinkingInReat />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
