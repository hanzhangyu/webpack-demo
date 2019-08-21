function component() {
  let element = document.createElement("div");

  element.innerHTML = ["Hello", "Ts"].join(" ");

  return element;
}

document.body.appendChild(component());
