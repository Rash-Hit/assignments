import { Hono } from "hono";
import { sign, verify } from "hono/jwt";

export const user = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
}>();

user.post("/signup", async (c) => {});

user.post("/signin", async (c) => {});
