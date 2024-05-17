const { setTimeout } = require("timers/promises");

const cancelTimeout = new AbortController();
const cancelTask = new AbortController();

async function timeout() {
  try {
    await setTimeout(10000, undefined, { signal: cancelTimeout.signal });
    cancelTask.abort();
  } catch {
    console.log("Canceled before 10s");
    // Whatever
  }
}

async function task() {
  try {
    await someLongRunningTask({ signal: cancelTask.signal });
  } finally {
    console.log("Canceled also");
    cancelTimeout.abort();
  }
}

async function someLongRunningTask(options = {}) {
  const { signal } = { ...options };
  if (signal.aborted === true) throw new Error("Operation canceled");

  const taskDone = new AbortController();
  signal.addEventListener("abort", () => {}, {
    once: true,
    signal: taskDone.signal,
  });

  try {
    if (signal.aborted) {
      throw new Error("Operation canceled");
    }
  } finally {
    taskDone.abort();
  }
}

(async () => {
  await Promise.race([timeout(), task()]);
})();
