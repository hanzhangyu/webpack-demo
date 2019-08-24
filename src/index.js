// import _ from "lodash";

console.log("src/index.js");

function component() {
  let element = document.createElement("div");

  element.innerHTML = _.join(["Hello", "webpack"], " ");

  return element;
}

document.body.appendChild(component());
