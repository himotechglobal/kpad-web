import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import "bootstrap-icons/font/bootstrap-icons.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './Components/Pages/Home/Home'
import TermsCondition from './Components/Pages/Terms&Condition/TermsCondition'
import PrivacyPolicy from "./Components/Pages/PrivacyPolicy/PrivacyPolicy"
import PDF from "./Components/PDF"
import PDF1 from "./Components/PDF1"

function App() {
  return (
    <div className="App">
       <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/TermsCondition" element={<TermsCondition />}/>
        <Route path="/PrivacyPolicy" element={<PrivacyPolicy />}/>
        <Route path="/PDF" element={<PDF />}/>
        <Route path="/PDF1" element={<PDF1 />}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;