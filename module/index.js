// region TODO 发现这种写法无效，tree shaking 是对应模块的
// function cube(x) {
//     return x * x * x;
// }
//
// function square(x) {
//     return x * x;
// }
// export { cube, square };
// endregion

export { cube } from "./cube";
export { square } from "./square";

