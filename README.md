![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![Sequelize](https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=Sequelize&logoColor=white)
![MySQL](https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white)

# SQL CLI
This project was undertaken as part of a coding bootcamp, and was an introduction to relational databases, and libraries that allowed a connection to them.

## Installation
After cloning the repository to your local machine, open a terminal and run `npm install` to install the dependancies. Following this, create a new file in the root folder `.env`. Inside of this, copy and paste this line
> MYSQL_URI = (YOUR SQL URI HERE)

## Using this app
Every command should be run from the terminal, with you being scoped into the root folder. They will all begin with `node src/app.js`

### Parameters
* `--add --title="A Movie" (Optional: --rating=0) `
> This command inserts a new record into the database, the parameter `--title` cannot be skipped, as the table REQUIRES it.
* `--list (Optional: --where="A Movie")`
> This command lists the records in the Movie database, with an optional `--where` parameter for filtering to movies LIKE the value the user provides
* `--update="A Movie" (Optional: --title="New Movie Name --rating=[new rating integer]")`
> This command allows the user to update a movie with new parameters, with optional title/rating fields
* `--delete="A Movie"`
> This command allows the user to delete a single movie that matches the title they provide.
* `--addActor="A Name" --movie_id=[An existing movie ID] (Optional: --nationality="Nationality")
> This command allows the user to insert an actor into a secondary table, currently this data cannot be accessed by the application again, as I am researching how to list records using a JOIN statement using Sequelize