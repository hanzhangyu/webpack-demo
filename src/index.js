import _ from "lodash";
import customSyntax from "./customSyntax";

customSyntax();

const name = "a";
require(`./lib/${name}.lib.js`);

console.log("src/index.js");

function component() {
  let element = document.createElement("div");

  // element.innerHTML = ["Hello", "webpack"].join(" ");
  element.innerHTML = _.join(["Hello", "webpack"], " ");

  return element;
}

document.body.appendChild(component());
