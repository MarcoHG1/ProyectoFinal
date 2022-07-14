import { MySQLConnector, MongoDBConnector } 
    from "../dependences.ts";

export const connectorMariaDB = new MySQLConnector({
    database: 'quotes',
    host: 'localhost',
    username: 'devDeno',
    password: 'root',
    port: 3306, 
});

export  const connectorMongoDB = new MongoDBConnector({
    // uri:'mongodb://cardoso:t0ps3cr3t@localhost:27017/?authMechanism=SCRAM-SHA-256&authSource=quotes',
    uri:'mongodb://marco:root@127.0.0.1:27017',
    //uri: 'mongodb://cardoso:t0ps3cr3t@localhost:27017',    
    database: 'quotes',
});

