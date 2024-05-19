// Through module
const { mtest } = require("module-test");
mtest();

// Through mjs script
const { test } = require("./test.mjs");
test();
