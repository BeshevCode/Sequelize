const yargs = require("yargs");
const { sequelize } = require("./db/connection");
const { addMovie, listMovies, updateMovie, deleteMovie } = require("./movie/functions");
const { addTV, listTV, updateTV, deleteTV } = require("./tv/functions");
const Movie = require("./movie/table");
const Director = require("./director/table");
const { addDirector, listDirectors } = require("./director/functions");

const app = async (yargsObj) => {
  try {
    Director.hasOne(Movie);
    Movie.belongsTo(Director);
    await sequelize.sync({ alter: true });  //Makes sure all defined tables against our sequelize connection exist in the database and if they don't, it will create them. It must run first as if it doesn't, our table it will not exist in the database.
    if (yargsObj.library) {
      if (yargsObj.movie) {
          if (yargsObj.add) {
            //Takes movie key value pairs from yargsObj, sends them to an add function and returns movie.
            await addMovie({title: yargsObj.title, actor: yargsObj.actor}); 
          } else if (yargsObj.list) {
            //Lists all movies from the database.
            await listMovies();
            console.log ("Full collection of movies in the library has been displayed above.")
          } else if (yargsObj.update) {
            //Takes filter and update key value pairs from yargsObj, sends them to an update function and return success/failure message.
            await updateMovie({ newTitle: yargsObj.title }, { title: yargsObj.title });
            console.log (`Movie title ${yargsObj.title} has been Successfully Updated to ${yargsObj.newTitle}`);
          } else if (yargsObj.delete) {
            //Takes filter key value pairs from yargsObj and sends them to delete function, return a success/failure message.
            await deleteMovie({title: yargsObj.title});
            console.log (`${yargsObj.title} has been Successfully Deleted from the database`);
          } else {
            console.log ("Incorrect CRUD Command")
          }
        } else if (yargsObj.director) {
          if (yargsObj.add) {
            await addDirector({fullName: yargsObj.fullName})
          } else if (yargsObj.list) {
            await listDirectors();
            console.log ("Full list of movie Directors in the library has been displayed above.")
          }
        }
      } else if (yargsObj.tv) {
        if (yargsObj.add) {
          //Takes TV shows key value pairs from yargsObj, sends them to an add function and returns TV.
          await addTV({title: yargsObj.title, actor: yargsObj.actor});
        } else if (yargsObj.list) {
          //Lists all TV shows from the database.
          await listTV();
          console.log ("Full collection of TV Shows on the database has been displayed above.")
        } else if (yargsObj.update) {
          //Takes filter and update key value pairs from yargsObj, sends them to an update function and return success/failure message.
          await updateTV({ newTitle: yargsObj.title }, { title: yargsObj.title });
          console.log (`TV title ${yargsObj.title} has been Successfully Updated to ${yargsObj.newTitle}`);
        } else if (yargsObj.delete) {
          //Takes filter key value pairs from yargsObj and sends them to delete function, return a success/failure message.
          await deleteTV({title: yargsObj.title});
          console.log (`${yargsObj.title} has been Successfully Deleted from the database`);
        } else {
          console.log ("Incorrect CRUD Command")
        }
    } else {
      console.log("Table not specified");
    }
  } catch (error) {
    console.log(error);
  }
};


app(yargs.argv);