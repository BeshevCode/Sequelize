const { DataTypes } = require("sequelize");
const { sequelize } = require("../db/connection");


//Defining our table immediately and passing it to an object not to a Schema like Mongoose.
const Movie = sequelize.define("Movie", {
  title: {     //That is a column named "title"
    type: DataTypes.STRING,     //Column constraints
    allowNull: false,     //Column constraints
    unique: true     //Column constraints
  },
  actor: {     ////That is a column named "actor" 
    type: DataTypes.STRING,     //Column constraints
    defaultValue: "Not specified",     //Column constraints
  },
});

module.exports = Movie;