import './App.css';
import { useState } from "react";
import Navbar from "./components/Navbar.js";
import TextForm from "./components/TextForm.js";
import About from "./components/About.js";
import Alert from "./components/Alert.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      getAlert("Dark mode has been Enabled");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      getAlert("Light mode has been Enabled");
    }
  };

  const getAlert = (message) => {
    setAlert({
      msg: message,
    });
    setTimeout(() => {
      setAlert(null)
    }, 2500);
  };

  return (
    <>
      <Router>
        <Navbar
          title="TextUtilz"
          mode={mode}
          toggleMode={toggleMode}
        />
        <Alert alert={alert} />
        <Routes>
          <Route exact path='/' element={<TextForm heading="Enter your text below 👇🏻" mode={mode} getAlert={getAlert} />} />
        </Routes>
        <Routes>
          <Route exact path='/about' element={<About mode={mode} />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
