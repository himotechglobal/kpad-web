import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.min.js';
import "bootstrap-icons/font/bootstrap-icons.css";


import '../src/Components/css/style.css';
import '../src/Components/css/style2.css'
import '../src/Components/css/responsive.css'
import '../src/Components/css/responsive1.css'

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './Components/Pages/Home/Home'
import TermsCondition from './Components/Pages/Terms&Condition/TermsCondition'
import PrivacyPolicy from "./Components/Pages/PrivacyPolicy/PrivacyPolicy"
import PDF from "./Components/PDF"
import PDF1 from "./Components/PDF1"
import Padchain from './Components/Pages/padchain/Padchain';
import Paddetails from './Components/Pages/padchain/Paddetails';
import Profile from './Components/Pages/profile/profile';
import ViewProfile from './Components/Pages/profile/viewProfile'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/TermsCondition" element={<TermsCondition />} />
          <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
          <Route path="/PDF" element={<PDF />} />
          <Route path="/PDF1" element={<PDF1 />} />
          <Route path="/iwo/list" element={<Padchain />} />
          <Route exact path="/iwo/details/:slug" element={<Paddetails />} />
          <Route exact path="/profile" name="Profile Page" element={<Profile />} />
          <Route exact path="/profile/view/:account" name="View Profile Page" element={<ViewProfile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;