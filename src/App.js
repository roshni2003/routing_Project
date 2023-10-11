import React from "react";
import Header from "./Header";
import Home from "./Homes/Home";
import About from './Abouts/About';
import Table from "./Table";
import Table2 from "./Table2";
import { Routes, Route} from "react-router-dom";




function App() {
  return (
    <div>
      <h2> Wel-come to my app </h2>
      <Header/>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />}/>
        <Route path="/Table" element={<Table />}/>
        <Route path="/Table2" element={<Table2 />}/>
      </Routes>
    </div>
    
  );
}

export default App;

