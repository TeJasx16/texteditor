import React, { useState } from "react";
import Navbar from "./Word Editor/Navbar";
import Sec1 from "./Word Editor/Sec1";

import Alert from "./Word Editor/Alert";



function App() {

  const [mode, setMode] = useState("light");
  const [btntxt, setBtntxt] = useState("Dark");
  const [alert, setAlert] = useState(null);

  const showalert = (msg, type) => {
    setAlert({
      msg: msg,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 700);
  };

  const dmode = () => {
    if (mode === "light") {
      setMode("dark");
      setBtntxt("Light");
      document.body.style.backgroundColor = "#464242";
      document.body.style.color = "white";
      showalert("dark mode on", "light");
    } else {
      setMode("light");
      setBtntxt("Dark");
      document.body.style.color = "black";
      document.body.style.backgroundColor = "white";
      showalert("light mode on", "dark");
    }
  };
  return (
    <>
      <Navbar btntxt={btntxt} mode={mode} dmode={dmode} />
      
      
      <Alert alert={alert} />
      
     
          <Sec1 mode={mode} show={showalert}  />


         
     

     
    </>
  );
}

export default App;
