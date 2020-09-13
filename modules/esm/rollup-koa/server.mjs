import Koa from "koa";
import serve from "koa-static"

const app = new Koa();
const port = process.env.TEST_PORT || 3000
app.use(serve('./site'))
   .use(serve('./target'))
   .listen(port,()=>console.log(`Started on port ${port}`));