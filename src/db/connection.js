require("dotenv").config();
const { Sequelize } = require("sequelize");

//Creates a connection that can be opened (it dosen't open a connection)
exports.sequelize = new Sequelize(process.env.MYSQL_URI);