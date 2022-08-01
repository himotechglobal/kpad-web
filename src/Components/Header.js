import React from "react";

import Logo from "./Images/Logo.png";
import { Link } from "react-router-dom";

function Header() {

    // const mapFunction = [1,2,3,4,5,6,7,8,9,10];
    // const  func =  mapFunction.map((sum)=>{return sum *2 })
    // console.log(func)

    // // Array Prototype

    const name = ["Arshad","Shashi","Saurab","Deepak"];
    // console.log(name.at(1));
    // console.log(name.pop()) // last element removed
    console.log(name.push("Yasir"))


  return (
    <section className="wrap-1">
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img src={Logo} alt="" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                Developers
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                Community
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                Blog
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                Foundation
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                ContactUs
                </a>
              </li>
              <li className="nav-item">
               <div className="bag-2">
               <button className="btn btn-primary">Buy</button>
               </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </section>
  );
}

export default Header;