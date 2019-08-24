// import { join } from "lodash";
import classNames from "./styles.css";
import { square } from "../custom-module";

console.log("process.env.ASSET_PATH", process.env.ASSET_PATH);

// const name = "a";
// require(`./lib/${name}.lib.js`);

const libContext = require.context('./lib', false, /^\.\//);
libContext.keys().forEach(key => {
  console.log(key, "resolved");
  libContext(key);
});

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
