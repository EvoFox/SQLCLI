const { Op, where } = require("sequelize");
const { Movie, Actor } = require("./table");

exports.addMovie = async (movieObj) => {
	try {
		const response = await Movie.create(movieObj);
		console.log(response);
	} catch (error) {
		console.error("Error adding movie:\n\n", error);
	}
};

exports.listMovie = async (criteria) => {
	try {
		// Checks if criteria has been set, if not, return all records, otherwise search title for criteria
		let response = null;

		if (criteria === undefined) {
			response = await Movie.findAll();
		} else {
			response = await Movie.findAll({
				where: {
					title: { [Op.like]: `%${criteria}%` },
				},
			});
		}

		for (result in response) {
			console.table(response[result], ["id", "title", "rating"]);
		}
	} catch (error) {
		console.error("Error fetching movies from database:\n\n", error);
	}
};

exports.updateMovie = async (criteria, update) => {
	try {
		console.log(`${update}, { where: ${criteria} }`);
		const response = await Movie.update(update, { where: criteria });
	} catch (error) {
		console.error("An error occured while updating the movie:\n\n", error);
	}
};

exports.deleteMovie = async (criteria) => {
	try {
		const response = await Movie.destroy({
			where: {
				title: criteria,
			},
		});
	} catch (error) {
		console.error("An error occured while deleting the movie:\n\n", error);
	}
};

exports.addActor = async (actorObj) => {
	
	try {
		const response = await Actor.create(actorObj);
		console.log(response);
	} catch (error) {
		console.error("Error adding movie:\n\n", error);
	}
};

exports.listActors = async (criteria) => {
	try {
		console.log(
			Actor.findAll({
				include: [
					{
						model: Movie,
						where: { title: criteria },
					},
				],
			})
		);
		for (result in response) {
			console.table(response[result]);
		}
	} catch (error) {}
};
