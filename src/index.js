import { cube } from "./math";

function component() {
  var element = document.createElement("pre");

  element.innerHTML = ["Hello webpack!", "5 cubed is equal to " + cube(5)].join(
    "\n\n"
  );

  return element;
}

let element = component();
document.body.appendChild(element);

class A {
  aa() {
    console.log('aa');
  }
  bb() {
    console.log('bb');
  }
}
new A(); // 只要使用了 new class，那么所有属性都会被保留
