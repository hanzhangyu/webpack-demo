import compiler from "./helpers/compiler.js";

test("Inserts dep to module", async () => {
  const stats = await compiler("example.js");
  const output = stats.toJson().modules[0].source;
  expect(output).toBe(
    'console.log("hello loader dep");\n\nconsole.log("example");\n'
  );
});
