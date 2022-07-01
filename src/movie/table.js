const { DataTypes } = require("sequelize");
const { sequelize } = require("../db/connection");

exports.Movie = sequelize.define("Movie", {
	title: {
		type: DataTypes.STRING,
		allowNull: false,
		unique: true,
	},
	rating: {
		type: DataTypes.INTEGER,
		defaultValue: 0,
	},
});

exports.Actor = sequelize.define("Actor", {
	name: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	nationality: {
		type: DataTypes.STRING,
		defaultValue: "Not Specified",
	},

	movie_id: {
		type: DataTypes.INTEGER,
		
		allowNull: false,
	},
});
