// import { join } from "lodash";
import classNames from "./styles.css";
import { square } from "../custom-module";

const name = "a";
require(`./lib/${name}.lib.js`);

console.log(classNames); // {}

console.log(square(3));

function component(num: number) {
  let element = document.createElement("div");
  element.classList.add(classNames.a);

  element.innerHTML = ["Hello", "Ts"].join(" ");

  console.log("ts", num);
  return element;
}

document.body.appendChild(component(12));
