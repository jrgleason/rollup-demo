import mysql from "mysql";
import {SQLConnector} from "./SQLConnector.mjs";

export class MySQLConnector extends SQLConnector{
    constructor(
        usePooled = true,
        password,
        host,
        user,
        database
    ) {
        super(password,host, user, database);
        this.isPooled = usePooled;
        if(usePooled){
            this.pool = mysql.createPool(this);
        }
    }

    getPoolConnection(){
        return new Promise((res, rej)=>{
            if(!this.pool){
                rej(`This is not a pooled connection!`);
            } else{
                this.pool.getConnection((err, connection)=>{
                    err ?
                        rej(`Failed to get connection from pool ${err}`) :
                        res(connection);
                });
            }
        })
    }

    getConnection(){
        return this.pool ? this.getPooledConnection() : this.getHardConnection();
    }
    // Wrapping MySQL lib with promises
    getHardConnection(){
        return new Promise((res, rej)=>{
            const connection = mysql.createConnection(this);
            connection.connect( err => err ? rej(err) : res(connection))
        })
    }
    getPooledConnection(){
        return new Promise((res, rej)=>{
            this.pool.getConnection((err, connection)=>{
                err ? rej(err) : res(connection);
            })
        })
    }

    toString(){
        const n = Object.assign(this);
        n.password = "*****";
        n.pool = null;
        return JSON.stringify(n);
    }

    async performQuery(query){
        const connection = await this.getConnection();
        return new Promise((res, rej)=>{
            console.log("Querying DB");
            connection.query(query, (error, results)=>{
                console.log("Results received");
                connection.release();
                error ? rej(error) : res(results);
            });
        });
    }
}