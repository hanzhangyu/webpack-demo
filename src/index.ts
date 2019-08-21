function component() {
  let element = document.createElement("div");

  element.innerHTML = ["Hello", "Ts"].join(" ");

  console.log('ts');
  return element;
}

document.body.appendChild(component());
