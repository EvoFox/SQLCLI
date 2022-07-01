const yargs = require("yargs");
const { sequelize } = require("./db/connection");
const {
	addMovie,
	listMovie,
	updateMovie,
	deleteMovie,
	addActor,
	listActors,
} = require("./movie/functions");

const app = async (yargsObj) => {
	try {
		await sequelize.sync({ alter: true });
		// Create
		if (yargsObj.add) {
			// Creates a movie entry in the database
			await addMovie({ title: yargsObj.title, rating: yargsObj.rating });
		}
		// Read
		else if (yargsObj.list) {
			// Lists the entries in the database with an optional filter parameter
			await listMovie(yargsObj.where);
		}
		// Update
		else if (yargsObj.update) {
			// Updates a row in the database, with a dynamically created update parameter
			// Build Criteria
			const criteria = { title: yargsObj.update };

			// Build update fields
			let update = {};
			if (yargsObj.title) {
				update = { ...update, title: yargsObj.title };
			}
			if (yargsObj.rating) {
				update = { ...update, rating: yargsObj.rating };
			}

			await updateMovie(criteria, update);
		}
		// Delete
		else if (yargsObj.delete) {
			// Deletes a row in the database with a filter parameter
			const criteria = yargsObj.delete;

			await deleteMovie(criteria);
		} else if (yargsObj.addActor) {
			// Adds a row into a second table, this table is currently not utilised until I figure out the procedure for JOIN's using Sequelize
			await addActor({
				name: yargsObj.addActor,
				nationality: yargsObj.nationality,
				movie_id: yargsObj.movie_id,
			});

			// This section of code is for a planned feature, once I figure out how to write a SELECT query that utilises a JOIN in Sequelize
		} else if (yargsObj.getActorsFrom) {
			await listActors(yargsObj.getActorsFrom);
		} else {
			// List commands
		}
	} catch (error) {
		console.log("An error has occured:", error);
	} finally {
		await sequelize.close();
	}
};

app(yargs.argv);
