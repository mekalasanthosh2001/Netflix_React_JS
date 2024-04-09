import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NTFhome from "./ntfhome";
import Signupafterpage from "./signupafterpage";

function App() {
  return (
    <>

    <Router>
      <Routes>
        <Route path="/Netflix_React_JS" element={<NTFhome />} />
        <Route path="/Signupafterpage" element={<Signupafterpage />} />
      </Routes>
    </Router>
    </>

  );
}

export default App;
