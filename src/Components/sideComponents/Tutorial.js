import React from "react";
import { Link } from "react-router-dom";

export default function Tutorial(props) {
  return (
    <div>
      <div className="mt-3">
        <Link to="">
          <span>Learn React &#x203A; </span>
        </Link>
        <Link to="" className="">
          <span className="ms-3">Quick Start &#x203A; </span>
        </Link>
      </div>
      <h1 className="FontS mt-4 fw-bold">Tutorial: Tic-Tac-Toe</h1>
      <p className="fs-5 mt-4">
        You will build a small tic-tac-toe game during this tutorial. This
        tutorial does not assume any <br /> existing React knowledge. The
        techniques you’ll learn in the tutorial are fundamental to building{" "}
        <br /> any React app, and fully understanding it will give you a deep
        understanding of React.
      </p>
      <div
        className={`pt-5 pb-5 Cercal container-fluid`}
        style={{
          width: "65vw",
          height: "auto",
          borderRadius: "20px",
          backgroundColor: props.mode === "light" ? "#f4fbf9" : "#243539",
          color: props.mode === "light" ? "black" : "white",
        }}
      >
        <span className="m-5 fs-2">
          <i class="fa-solid fa-book fa-lg me-3"></i> Note
        </span>
        <p className="ms-5 mt-4" style={{ fontSize: "18px" }}>
          This tutorial is designed for people who prefer to{" "}
          <b>learn by doing</b> and want to quickly try making <br /> something
          tangible. If you prefer learning each concept step by step, start with
          <Link to="">Describing the UI.</Link>
        </p>
      </div>
      <div>
        <ul className="mt-3 text-start">
          The tutorial is divided into several sections:
          <li className="mt-3 fs-6">
            <span>
              <Link to="" style={{ color: "#1B88AB" }}>
                Setup for the tutorial
              </Link>
            </span>{" "}
            will give you <b>a starting point</b> to follow the tutorial.
          </li>
          <li className="mt-3 fs-6">
            <span>
              <Link to="" style={{ color: "#1B88AB" }}>
                Overview
              </Link>
            </span>{" "}
            will give you <b>a starting point</b> to follow the tutorial.
          </li>
          <li className="mt-3 fs-6">
            <span>
              <Link to="" style={{ color: "#1B88AB" }}>
                Setup for the tutorial
              </Link>
            </span>{" "}
            will give you <b>a starting point</b> to follow the tutorial.
          </li>
          <li className="mt-3 fs-6">
            <span>
              <Link to="" style={{ color: "#1B88AB" }}>
                Setup for the tutorial
              </Link>
            </span>{" "}
            will give you <b>a starting point</b> to follow the tutorial.
          </li>
        </ul>
      </div>
    </div>
  );
}
