const Tv = require("./table");

exports.addTV = async (tvObj) => {
  try {
      const newTv = await Tv.create(tvObj);     //Sequelize opens a connection to the database
      console.log(`Successfully added ${newTv.dataValues.title} to the database.`);
  } catch (error) {
      console.log(error)
  }
};

exports.listTV = async () => {
  try {
    //Display all TV shows stored in the database
    const storedTV = await Tv.findAll();
    for (let i=0; i < storedTV.length; i++) {
      console.log(storedTV[i].dataValues.title);
    }
  } catch (error) {
    console.log(error);
  }
};

exports.updateTV = async (updateObj, filterObj) => {
  try {
    //Find a TV show and update a column  
    const response = await Tv.update(updateObj, { where: filterObj })   //The new information must be placed in the first object and the information that we would like to replace/update with the new one must be in the second object.
    if (response[0] > 0) {
      console.log("Successfully Updated");
    } else {
      console.log("Update Unsuccessful");
    }
  } catch (error) {
    console.log(error);
  }
};

exports.deleteTV = async (filterObj) => {
  try {
    //Find a TV show and delete it
    const response = await Tv.destroy({ where: filterObj });
    if (response > 0) {
      console.log("Successfully Deleted");
    } else {
      console.log("Target data has not been Deleted");
    }
  } catch (error) {
    console.log(error);
  }
};