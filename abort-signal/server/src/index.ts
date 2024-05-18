import { Elysia } from "elysia";

const app = new Elysia()
  .get("/", async () => {
    await Bun.sleep(10000);
    return "TEST";
  })
  .listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
