import {Sequelize} from "sequelize";

const db = new Sequelize('login_todo', 'root', '', {
    host: "127.0.0.2",
    port: "3307",
    dialect: "mysql"
});

export default db;