export class SQLConnector{
    constructor(
        password = process.env.SQL_PASSWORD,
        host=process.env.SQL_HOST,
        user=process.env.SQL_USERNAME,
        database = process.env.SQL_DB){
        this.host = host;
        if(!password || !user){
            throw new Error(`You must provide a username and password for the db`);
        }
        this.password = password;
        this.user = user;
        this.database = database;
        this.connectionLimit = 5;
    }
}