import Vue from "vue";
import { cube } from "./math";

import Hello from "../node_modules/@paulhan/Comp/Hello.vue";
import {asyncFN} from "../node_modules/@paulhan/Comp";

async function init() {
  await asyncFN();
  console.log("inited");
}

init();

new Vue({
  el: "#app",
  render: h => h(Hello)
});

console.log(Hello);

function component() {
  var element = document.createElement("pre");

  element.innerHTML = ["Hello webpack!", "5 cubed is equal to " + cube(5)].join(
    "\n\n"
  );

  return element;
}

let element = component();
document.body.appendChild(element);
