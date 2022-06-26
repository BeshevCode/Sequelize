const { DataTypes } = require("sequelize");
const { sequelize } = require("../db/connection");


//Defining our table immediately and passing it to an object not to a Schema like Mongoose.
const Tv = sequelize.define("Tv", {
  title: {     //That is a column named "title"
    type: DataTypes.STRING,     //Column constraints
    allowNull: false,     //Column constraints
    unique: true     //Column constraints
  }
});

module.exports = Tv;