// import { join } from "lodash";
import classNames from "./styles.css";

console.log(classNames); // {}

function component() {
  let element = document.createElement("div");
  element.classList.add(classNames.a);

  element.innerHTML = ["Hello", "Ts"].join(" ");

  console.log("ts");
  return element;
}

document.body.appendChild(component());
