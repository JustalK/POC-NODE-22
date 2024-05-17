const { glob } = require("node:fs/promises");
const { globSync } = require("node:fs");

(async () => {
  for await (const entry of glob("**/*.js")) console.log(entry);
})();

console.log(globSync("**/*.js"));
