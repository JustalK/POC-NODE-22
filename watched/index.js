async function init() {
  console.log(1);
  await sleep(1000);
  console.log(2);
  await sleep(1000);
}

function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

(async () => {
  try {
    while (true) {
      await init();
    }
  } catch (e) {
    // Deal with the fact the chain failed
  }
  // `text` is not available here
})();
