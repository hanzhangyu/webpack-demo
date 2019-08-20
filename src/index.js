import _ from "lodash";
import printMe from "./print.js";
import "./styles.css"; // style 会自动更新

function component() {
  var element = document.createElement("div");
  var btn = document.createElement("button");

  element.innerHTML = _.join(["Hello", "webpack"], " ");

  btn.innerHTML = "点击这里，然后查看 console！";
  btn.onclick = printMe;

  element.appendChild(btn);

  return element;
}

let element = component();
document.body.appendChild(element);

if (module.hot) {
  module.hot.accept("./print.js", function() {
    console.log('Accepting the updated printMe module!');
    // region 重新渲染来更新 事件绑定
    document.body.removeChild(element);
    element = component();
    document.body.appendChild(element);
    // endregion
  });
}
