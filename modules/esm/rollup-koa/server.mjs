import Koa from "koa";

const app = new Koa();
const port = process.env.TEST_PORT || 3000
app.use(ctx=>ctx.body = "Hello World")
   .listen(port,()=>console.log(`Started on port ${port}`));