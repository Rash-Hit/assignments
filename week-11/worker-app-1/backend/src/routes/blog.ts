import { Hono } from "hono";
import { verify } from "hono/jwt";
export const blog = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
  Variables: {
    id: string;
  };
}>();

blog.use("/*", async (c, next) => {});

blog.post("/", async (c) => {});

blog.put("/", async (c) => {});

blog.get("/bulk", async (c) => {});

blog.get("/:id", async (c) => {});
