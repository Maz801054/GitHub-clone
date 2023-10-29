import React from "react";
import { Link } from "react-router-dom";

export default function ThinkingInReat() {
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
      <h1 className="FontS mt-4 fw-bold">Thinking in React</h1>
      <p className="fs-4 mt-4 text-start FontS">
        You will build a small tic-tac-toe game during this tutorial. This
        tutorial does not assume any existing React knowledge. The techniques
        you’ll learn in the tutorial are fundamental to building any React app,
        and fully understanding it will give you a deep understanding of React
        it will give you a deep understanding of React Finally, you will connect
        your components together so that the data flows through them. In this
        tutorial, we’ll guide you through the thought process of building a
        searchable product data table with React.
      </p>
      <h3 className="FontS mt-4 fw-bold">Start with the mockup </h3>
      <p className="mt-3 fs-6">
        Imagine that you already have a JSON API and a mockup from a designer.
      </p>
      <p className="mt-3 fs-6">
        The JSON API returns some data that looks like this:
      </p>
    </div>
  );
}
