import {Application} from "./app.mjs";
const app = new Application();
const boot = app.boot()
boot.then(()=>{
    console.log("Application started");
}).catch((err)=>{
    console.error(`There was a fatal error ${err}`);
    process.exit(1);
})