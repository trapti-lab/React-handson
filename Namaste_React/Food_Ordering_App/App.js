import React from "react";
import ReactDOM from "react-dom/client";
// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "hello form react"
// );
const heading = React.createElement("h1", { id: "parent" }, [
  React.createElement("h1", { id: "child" }, "first child"),
  React.createElement("h1", { id: "child" }, "Second child"),
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
