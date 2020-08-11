import { Router } from "https://deno.land/x/oak/mod.ts";

import getTodos from "./controllers/todos/get.js";
import postTodo from "./controllers/todos/post.js";
import deleteTodo from "./controllers/todos/delete.js";

const router = new Router();

router.get("/", ({ response }) => {
  response.body = "Todo List API Using Deno Runtime.";
});

router
  .get("/todos", getTodos)
  .post("/todos", postTodo)
  .delete("/todos/:id", deleteTodo);

export default router;
