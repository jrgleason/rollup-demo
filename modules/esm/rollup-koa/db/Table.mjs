export class Table {
    constructor(tablename, schema, connector){
        this.tablename = tablename;
        this.schema = schema;
        this.connector = connector;
    }
    get selectAll(){
        if(this.schema){
            return `SELECT * FROM ${this.schema}.${this.tablename};`
        } else {
            return `SELECT * FROM ${this.tablename};`
        }
    }
    async getAll(){
        return await this.connector.performQuery(this.selectAll);
    }
}