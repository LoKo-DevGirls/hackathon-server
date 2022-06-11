import SQ from "sequelize";
import config from "../config.js";

const { host, user, database, password } = config.db;

const sequelize = new SQ.Sequelize(database, user, password, {
  host,
  dialect: "mysql",
});

export default sequelize;
