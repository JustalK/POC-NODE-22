const mainFetch = async () => {
  const resp = await fetch("http://localhost:3000");
  const respBody = await resp.text();
  console.log(respBody);
};

const mainFetchAborted = async () => {
  const resp = await fetch("http://localhost:3000", {
    signal: AbortSignal.timeout(2000),
  });
  const respBody = await resp.text();
  console.log(respBody);
};

(async () => {
  console.log("Normal", new Date());
  await mainFetch();
  console.log("Normal", new Date());
})();

(async () => {
  console.log("With Abort", new Date());
  try {
    await mainFetchAborted();
  } catch (error) {
    if (error.name === "TimeoutError") {
      console.log("Timeout - Aborted");
    }
  }
  console.log("With Abort", new Date());
})();
