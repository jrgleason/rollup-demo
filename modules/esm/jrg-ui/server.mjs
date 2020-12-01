import serve from 'koa-static';
import Koa from 'koa';
import cors from "@koa/cors";


var app = new Koa();
app.use(cors());
app.use(serve("target"));
app.on('error', err => {
    console.log.error('server error', err)
});
app.listen("4001")