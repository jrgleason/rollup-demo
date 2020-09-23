import mariadb from "mariadb";

class MariaConnector extends SQLConnector{
    constructor() {
        super();
        this.debug = true;
    }
    get connection(){
        console.log(`The password is ${this.password}`)
        // return this.pool.getConnection();
        return mariadb.createConnection(this)
    }
}

export{MariaConnector}