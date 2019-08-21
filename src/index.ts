import { join } from "lodash";

function component() {
  let element = document.createElement("div");

  element.innerHTML = join(["Hello", "Ts"], " ");

  console.log('ts');
  return element;
}

document.body.appendChild(component());
