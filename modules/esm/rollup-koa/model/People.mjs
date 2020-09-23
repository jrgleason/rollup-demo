import {Table, MySQLConnector} from "../db/index.mjs";

export class People extends Table{
    constructor(connector){
        super("PEOPLE","JRG",connector)
        this.connector = connector || new MySQLConnector();
    }
}