const { performance } = require("perf_hooks");
const { getHeapStatistics } = require("node:v8");
const fs = require("node:fs");

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function print(readable, highWaterMark) {
  const start = performance.now();
  readable.setEncoding("utf8");
  let data = "";
  for await (const chunk of readable) {
    data += chunk;
  }
  const end = performance.now();
  const endMemory = getHeapStatistics().used_heap_size;
  console.log(
    `Everything has been read from the stream with ${highWaterMark} highWaterMark in ${
      end - start
    }ms with ${endMemory}`
  );
}

(async () => {
  await print(
    fs.createReadStream(`${__dirname}/file.txt`, {
      highWaterMark: 8 * 1024,
    }),
    "8 * 1024"
  ).catch(console.error);

  // Previous default => 16 * 1024
  // await print(
  //   fs.createReadStream(`${__dirname}/file.txt`, {
  //     highWaterMark: 16 * 1024,
  //   }),
  //   "16 * 1024"
  // ).catch(console.error);

  // Default => 64 * 1024
  // With this value eveything is handle in one loop
  // await print(
  //   fs.createReadStream(`${__dirname}/file.txt`, {
  //     highWaterMark: 64 * 1024,
  //   }),
  //   "64 * 1024"
  // ).catch(console.error);

  sleep(2000);
})();
