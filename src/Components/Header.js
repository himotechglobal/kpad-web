import React from "react";

import Logo from "./Images/Logo.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <section className="wrap-1">
      <nav class="navbar navbar-expand-lg">
        <div class="container">
          <a class="navbar-brand" href="#">
            <img src={Logo} alt="" />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                Developers
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                Community
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                Blog
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                Foundation
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                ContactUs
                </a>
              </li>
              <li class="nav-item">
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
