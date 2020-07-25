import { Router } from "https://deno.land/x/oak/mod.ts";

import getTodos from "./controllers/todos/get.js";

const router = new Router();

router.get("/", ({ response }) => {
  response.body = "Todo List API Using Deno Runtime.";
});

router.get("/todos", getTodos);

export default router;
