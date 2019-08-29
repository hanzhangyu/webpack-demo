import { Compiler } from "webpack";

class HelloWorldPlugin {
  apply(compiler: Compiler) {
    compiler.hooks.done.tap('Hello World Plugin', (
      stats /* 在 hook 被触及时，会将 stats 作为参数传入。 */
    ) => {
      console.log('【END: Hello World!】');
    });
  }
}

export default HelloWorldPlugin;