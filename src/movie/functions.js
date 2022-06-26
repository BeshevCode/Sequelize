const Movie = require("./table");
const Director = require ("../director/table");

exports.addMovie = async (movieObj) => {
  try {
      const director = await Director.findOne({where: {fullName: movieObj.director}});
      const newMovie = await Movie.create({title: movieObj.title, actor: movieObj.actor, DirectorId: director.dataValues.id});     //Sequelize opens a connection to the database
  } catch (error) {
      console.log(error)
  }
};

exports.listMovies = async () => {
  try {
    //Display all movies srtored in the database
    const movies = await Movie.findAll();
     for (let i=0; i < movies.length; i++) {
       console.log(movies[i].dataValues.title, movies[i].dataValues.actor, movies[i].dataValues.DirectorID);
     }
  } catch (error) {
    console.log(error);
  }
};

exports.updateMovie = async (updateObj, filterObj) => {
  try {
    //Find a movie and update a column  
    const response = await Movie.update(updateObj, { where: filterObj })   //The new information must be placed in the first object and the information that we would like to replace/updatet, must be in the second object.
    if (response[0] > 0) {
      console.log("Successfully Updated");
    } else {
      console.log("Update Unsuccessful");
    }
  } catch (error) {
    console.log(error);
  }
};

exports.deleteMovie = async (filterObj) => {
  try {
    //Find a movie and delete it
    const response = await Movie.destroy({ where: filterObj });
    if (response > 0) {
      console.log("Successfully Deleted");
    } else {
      console.log("Target data has not been Deleted");
    }
  } catch (error) {
    console.log(error);
  }
};