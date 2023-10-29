// import React from "react";
// import { Link } from "react-router-dom";
// // import { BrowserRouter, Routes } from "react-router-dom";
// // import Learn from "../Learncompo/Learn";

// export default function Sidenavbar(props) {
//   return (
//     <div>
//       <div className="container-fluid">
//         <div className="d-flex overflow-auto" style={{ height: "90vh" }}>
//           <div className="sidenav">
//             <p className="mt-3">GET STARTED</p>
//             <div class="accordion" id="accordionExample">
//               <div class={`accordion-item`}>
//                 <h2 class="accordion-header" id="headingOne">
//                   <button
//                     class={`accordion-button rounded-pill`}
//                     type="button"
//                     data-bs-toggle="collapse"
//                     data-bs-target="#collapseOne"
//                     aria-expanded="true"
//                     aria-controls="collapseOne"
//                   >
//                     <a href="//">
//                       <b> Quick Start</b>
//                     </a>
//                   </button>
//                 </h2>
//                 <div
//                   id="collapseOne"
//                   class="accordion-collapse collapse show"
//                   aria-labelledby="headingOne"
//                   data-bs-parent="#accordionExample"
//                 >
//                   <div class="accordion-body">
//                     <Link to="Tic">
//                       {" "}
//                       <p className="SideP mt-3">Tutorial: Tic-Tac-Toe </p>
//                     </Link>
//                     <Link to="Thinking">
//                       <p className="SideP mt-3">Thinking in React </p>
//                     </Link>
//                   </div>
//                 </div>
//               </div>
//               <div class="accordion-item">
//                 <h2 class="accordion-header" id="headingTwo">
//                   <button
//                     class="accordion-button collapsed rounded-pill"
//                     type="button"
//                     data-bs-toggle="collapse"
//                     data-bs-target="#collapseTwo"
//                     aria-expanded="false"
//                     aria-controls="collapseTwo"
//                   >
//                     <b>Installation</b>
//                   </button>
//                 </h2>
//                 <div
//                   id="collapseTwo"
//                   class="accordion-collapse collapse"
//                   aria-labelledby="headingTwo"
//                   data-bs-parent="#accordionExample"
//                 >
//                   <div class="accordion-body">
//                     <p className="SideP mt-2">Start a New React Project </p>{" "}
//                     <p className="SideP mt-3">
//                       Add React to an Existing Project{" "}
//                     </p>{" "}
//                     <p className="SideP mt-2">Editor Setup </p>{" "}
//                     <p className="SideP mt-3">Using TypeScript </p>{" "}
//                     <p className="SideP mt-3">React Developer Tools </p>{" "}
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <p className="mt-3">LEARN REACT</p>
//             <div class="accordion" id="accordionExample">
//               <div class="accordion-item">
//                 <h2 class="accordion-header" id="headingOne">
//                   <button
//                     class="accordion-button rounded-pill"
//                     type="button"
//                     data-bs-toggle="collapse"
//                     data-bs-target="#collapseOne"
//                     aria-expanded="true"
//                     aria-controls="collapseOne"
//                   >
//                     <b> Describing the UI</b>
//                   </button>
//                 </h2>
//                 <div
//                   id="collapseOne"
//                   class="accordion-collapse collapse show"
//                   aria-labelledby="headingOne"
//                   data-bs-parent="#accordionExample"
//                 >
//                   <div class="accordion-body">
//                     <p className="SideP mt-2">Your First Component </p>{" "}
//                     <p className="SideP mt-3">
//                       Importing and Exporting Components{" "}
//                     </p>{" "}
//                     <p className="SideP mt-2">Writing Markup with JSX </p>{" "}
//                     <p className="SideP mt-2">
//                       JavaScript in JSX with Curly Braces{" "}
//                     </p>{" "}
//                     <p className="SideP mt-2">Passing Props to a Component </p>{" "}
//                     <p className="SideP mt-2">Conditional Rendering </p>{" "}
//                   </div>
//                 </div>
//               </div>
//               <div class="accordion-item">
//                 <h2 class="accordion-header" id="headingTwo">
//                   <button
//                     class="accordion-button collapsed rounded-pill"
//                     type="button"
//                     data-bs-toggle="collapse"
//                     data-bs-target="#collapseTwo"
//                     aria-expanded="true"
//                     aria-controls="collapseTwo"
//                   >
//                     <b>Adding Interactivity</b>
//                   </button>
//                 </h2>
//                 <div
//                   id="collapseTwo"
//                   class="accordion-collapse collapse"
//                   aria-labelledby="headingTwo"
//                   data-bs-parent="#accordionExample"
//                 >
//                   <div class="accordion-body">
//                     <p className="SideP mt-2">Responding to Events</p>{" "}
//                     <p className="SideP mt-3">State: A Component's Memory </p>{" "}
//                     <p className="SideP mt-2">Render and Commit </p>{" "}
//                     <p className="SideP mt-3">Using TypeScript </p>{" "}
//                     <p className="SideP mt-3">State as a Snapshot </p>{" "}
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div class="accordion" id="accordionExample">
//               <div class="accordion-item">
//                 <h2 class="accordion-header" id="headingOne">
//                   <button
//                     class="accordion-button rounded-pill"
//                     type="button"
//                     data-bs-toggle="collapse"
//                     data-bs-target="#collapseOne"
//                     aria-expanded="true"
//                     aria-controls="collapseOne"
//                   >
//                     <b> Quick Start</b>
//                   </button>
//                 </h2>
//                 <div
//                   id="collapseOne"
//                   class="accordion-collapse collapse show"
//                   aria-labelledby="headingOne"
//                   data-bs-parent="#accordionExample"
//                 >
//                   <div class="accordion-body">
//                     <p className="SideP mt-2">Tutorial:Tic-Tac-Toe </p>{" "}
//                     <p className="SideP mt-3">Thinking in React </p>{" "}
//                   </div>
//                 </div>
//               </div>
//               <div class="accordion-item">
//                 <h2 class="accordion-header" id="headingTwo">
//                   <button
//                     class="accordion-button collapsed rounded-pill"
//                     type="button"
//                     data-bs-toggle="collapse"
//                     data-bs-target="#collapseTwo"
//                     aria-expanded="false"
//                     aria-controls="collapseTwo"
//                   >
//                     <b>Installation</b>
//                   </button>
//                 </h2>
//                 <div
//                   id="collapseTwo"
//                   class="accordion-collapse collapse"
//                   aria-labelledby="headingTwo"
//                   data-bs-parent="#accordionExample"
//                 >
//                   <div class="accordion-body">
//                     <p className="SideP mt-2">Start a New React Project </p>{" "}
//                     <p className="SideP mt-3">
//                       Add React to an Existing Project{" "}
//                     </p>{" "}
//                     <p className="SideP mt-2">Editor Setup </p>{" "}
//                     <p className="SideP mt-3">Using TypeScript </p>{" "}
//                     <p className="SideP mt-3">React Developer Tools </p>{" "}
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div class="accordion" id="accordionExample">
//               <div class="accordion-item">
//                 <h2 class="accordion-header" id="headingOne">
//                   <button
//                     class="accordion-button rounded-pill"
//                     type="button"
//                     data-bs-toggle="collapse"
//                     data-bs-target="#collapseOne"
//                     aria-expanded="true"
//                     aria-controls="collapseOne"
//                   >
//                     <b> Quick Start</b>
//                   </button>
//                 </h2>
//                 <div
//                   id="collapseOne"
//                   class="accordion-collapse collapse show"
//                   aria-labelledby="headingOne"
//                   data-bs-parent="#accordionExample"
//                 >
//                   <div class="accordion-body">
//                     <p className="SideP mt-2">Tutorial:Tic-Tac-Toe </p>{" "}
//                     <p className="SideP mt-3">Thinking in React </p>{" "}
//                   </div>
//                 </div>
//               </div>
//               <div class="accordion-item">
//                 <h2 class="accordion-header" id="headingTwo">
//                   <button
//                     class="accordion-button collapsed rounded-pill"
//                     type="button"
//                     data-bs-toggle="collapse"
//                     data-bs-target="#collapseTwo"
//                     aria-expanded="false"
//                     aria-controls="collapseTwo"
//                   >
//                     <b>Escape Hatches</b>
//                   </button>
//                 </h2>
//                 <div
//                   id="collapseTwo"
//                   class="accordion-collapse collapse"
//                   aria-labelledby="headingTwo"
//                   data-bs-parent="#accordionExample"
//                 >
//                   <div class="accordion-body">
//                     <p className="SideP mt-2">Start a New React Project </p>{" "}
//                     <p className="SideP mt-3">
//                       Add React to an Existing Project{" "}
//                     </p>{" "}
//                     <p className="SideP mt-2">Editor Setup </p>{" "}
//                     <p className="SideP mt-3">Using TypeScript </p>{" "}
//                     <p className="SideP mt-3">React Developer Tools </p>{" "}
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <h6 className="d-flex gap-5 p-1 ps-2 pt-3 pb-3 bg-light rounded-pill likesetup">
//               <b className="lasth">Is this page useful? </b>
//               <div className="iconbar">
//                 <i class="fa-regular fa-thumbs-up me-3"></i>
//                 <i class="fa-regular fa-thumbs-down fa-flip-horizontal"></i>
//               </div>
//             </h6>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
