import React from "react";
import Logo from "../Logo/logo.svg";
import "..//App.css";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <div>
      <nav
        class={`navbar navbar-expand-lg bg-${props.mode} navbar-${props.mode} `}
      >
        <div class="container-fluid">
          <Link class="navbar-brand" to="Sec">
            <img src={Logo} alt="" width="50" height="50" />
          </Link>
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
            <ul class="navbar-nav  mb-2 mb-lg-0">
              <form class="d-flex">
                <input
                  class={`form-control me-2 searchbar bg-${props.mode}`}
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                ></input>
              </form>
            </ul>
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link class="nav-link active ms-3" aria-current="page" to="/">
                  Learn
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active ms-3" aria-current="page" to="/">
                  Reference
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active ms-3" aria-current="page" to="/">
                  Community
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active ms-3" aria-current="page" to="/">
                  Blog
                </Link>
              </li>
              <li class="nav-item" onClick={props.toggleMode}>
                <Link class="nav-link active ms-3" aria-current="page" to="/">
                  <i class="fa-regular fa-moon fa-xl"></i>
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active ms-3" aria-current="page" to="/">
                  <i class="fa-brands fa-github fa-xl"></i>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
