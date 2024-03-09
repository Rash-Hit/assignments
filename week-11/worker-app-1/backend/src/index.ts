import { Hono } from "hono";
const app = new Hono();
import { blog } from "./routes/blog";
import { user } from "./routes/user";
import { cors } from "hono/cors";

app.use("/*", cors());
app.get("/", (c) => {
  return c.text("Hello Hono!");
});

app.route("/api/v1/blog", blog);
app.route("/api/v1/user", user);

export default app;
