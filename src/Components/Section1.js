import React from "react";
import Logo from "../Logo/logo.svg";

export default function Section1() {
  return (
    <div className="section1">
      <div className="ImgContainer">
        <img src={Logo} class="img-fluid LogoSetup" alt="..."></img>
      </div>
      <div className="sectionOne-content text-center">
        <h1 className="FontS" style={{ fontSize: "40px", fontWeight: "600" }}>
          React
        </h1>
        <p className="FontS" style={{ fontSize: "32px" }}>
          The library for web and native user interfaces
        </p>
        <div className="BtnSection">
          <button
            type="button"
            class="btn btn-primary  border border-1 me-3 pe-4 ps-4 pt-2 pb-2 fw-bold fs-5 rounded-pill"
          >
            Learn React
          </button>
          <button
            type="button"
            class="btn btn-light border border-1 pe-3 ps-3 pt-2 pb-2 fw-bold fs-5 rounded-pill"
          >
            API Refrence
          </button>
        </div>
      </div>
    </div>
  );
}
