# Sequelize

The application covers all CRUD operations and allows users to store tv shows and movies with their directors in a MySQL database.

Users can choose to add either movies or tv shows. Examples of how to use the application:


node src/app.js --library --movie --add --title <movieTitle> --actor <movieActor> (--director <movieDirector>)   <!-- Adding movie title, actor(optional) and director to the movie library on the database. -->
or
node src/app.js --tv --add --title <tvTitle> --actor <tvActor>   <!-- Adding tv title and actor(optional) to the database. -->

node src/app.js --library --movie --list   <!-- Displaying all movies in the library that currently exist in the database. -->                                                       
or
node src/app.js --tv --list   <!-- Displaying all tv shows that currently exist in the database. -->

node src/app.js --library --movie --update --newTitle <newMovieActor> --title <existingMovieTitle>   <!-- Updating already existing movie title on the database with a new one. -->
                   
or
node src/app.js --tv --update --newTitle <newTvTitle> --title <existingTvTitle>   <!-- Updating already existing tv show title on the database with a new one. -->
                     

node src/app.js --library --movie --delete --title <existingMovieTitle>   <!-- Deleting a movie from the library in the database. -->                                            
or
node src/app.js --tv --delete --title <existingTvTitle>   <!-- Deleting a tv show from the database. -->