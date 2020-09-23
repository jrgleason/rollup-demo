import Koa from "koa";
import serve from "koa-static";
import mount from "koa-mount";
import {MySQLConnector} from "./db/index.mjs";
import {People} from "./model/People.mjs";
const PORT = process.env.TEST_PORT || 3000
export class Application{
    constructor(port){
        this.port = port || PORT;
        this.connector = new MySQLConnector();
    }
    static GET_ROOT(){
        const root = new Koa();
        root.use(serve('./site'));
        return root;
    }
    static GET_ASSETS(){
        const assets = new Koa();
        assets.use(serve('./target'))
        return assets;
    }
    getServices(){
        const services = new Koa();
        services.use(this.bootstrapServices.bind(this));
        return services;
    }
    async bootstrapServices(ctx){
        const people = new People(this.connector);
        try{
            const result = await people.getAll();
            ctx.body = JSON.stringify(result);
        } catch(err){
            console.error(`There was an error connecting to the db ${err}\n customer has been notified to contact support`)
            ctx.status = 500;
            ctx.body = "There has been an issue please contact support code:1";
        }
    }
    async boot(){
        console.info("Booting...");
        // const connection = await this.connector.connection;
        // console.info(`Connection Confirmed`);
        this.services = new Koa();
        // TODO: Do these really need to be instance?
        this.services.use(this.bootstrapServices.bind(this));
        this.root = Application.GET_ROOT();
        this.assets = Application.GET_ASSETS();
        this.app = new Koa();

        this.app.use(mount("/assets", this.assets));
        this.app.use(mount("/db", this.services))
        this.app.use(mount("/", this.root))
        this.app.listen(this.port, () => console.log(`Started on port ${this.port}`));
    }
}