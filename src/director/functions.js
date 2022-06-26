const Director = require("./table");

exports.addDirector = async (directorObj) => {
  try {
    const newDirector = await Director.create(directorObj);
     console.log(`Successfully added ${newDirector.dataValues.fullName} to database.`);
  } catch (error) {
     console.log(error);
  }
};

exports.listDirectors = async () => {
  try {
    const storedDirectors = await Director.findAll();
     console.log(storedDirectors);
  } catch (error) {
     console.log(error);
  }
};