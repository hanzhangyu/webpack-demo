import _ from "lodash";

function component() {
  var element = document.createElement("div");
  var button = document.createElement("button");
  var br = document.createElement("br");

  button.innerHTML = "Click me and look at the console!";
  element.innerHTML = _.join(["Hello", "webpack"], " ");
  element.appendChild(br);
  element.appendChild(button);

  button.onclick = e =>
    // 懒加载
    import(/* webpackChunkName: "print" */ "./print").then(module => {
      console.log("loaded print");
      var print = module.default;

      print();
    });

  return element;
}

document.body.appendChild(component());

// import(
//   /* webpackChunkName: "lodash" */
//   /* webpackPrefetch: true */
//   "lodash"
// );
//
// console.log("onload");
