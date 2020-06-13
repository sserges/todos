import { Router } from "https://deno.land/x/oak/mod.ts";

const router = new Router();

router.get("/", ({ response }) => {
  response.body = "Todo List API Using Deno Runtime.";
});

export default router;
