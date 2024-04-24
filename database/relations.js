const User = require('../api/models/user.model')


//Many to Many
function addRelationsToModels() {
	/*try {

		User.belongsToMany(Game, {
			through: 'Favorites',
    		as: 'Favorite',
			onDelete: 'cascade',
			onUpdate: 'cascade',
			timestamps: false

		})

		Game.belongsToMany(User, {
			through: 'Favorites',
    		as: 'Favorite',
			onDelete: 'cascade',
			onUpdate: 'cascade',
			timestamps: false

		})

		User.belongsToMany(Game, {
			through: 'userGames',

			onDelete: 'cascade',
			onUpdate: 'cascade',
			timestamps: false
		})

		Game.belongsToMany(User, {
			through: 'userGames',

			onDelete: 'cascade',
			onUpdate: 'cascade',
			timestamps: false
		})

		User.belongsToMany(Game, {
			through: Master,
			as: 'MastersGame',
			onDelete: 'cascade',
			onUpdate: 'cascade',
			timestamps: false
		})

		Game.belongsToMany(User, {
			through: Master,
			as: 'MastersGame',
			onDelete: 'cascade',
			onUpdate: 'cascade',
			timestamps: false
		})

		Theme.belongsToMany(Game, {
			through: 'gameThemes',

			onDelete: 'cascade',
			onUpdate: 'cascade',
			timestamps: false
		})

		Game.belongsToMany(Theme, {
			through: 'gameThemes',

			onDelete: 'cascade',
			onUpdate: 'cascade',
			timestamps: false
		})

		Session.belongsTo(Master);
		Master.hasMany(Session);

		Session.belongsTo(Game);
		Game.hasMany(Session);


		Session.belongsToMany(User, {
			through: SessionPlayer,

			onDelete: 'cascade',
			onUpdate: 'cascade',
			timestamps: false
		})

		User.belongsToMany(Session, {
			through: SessionPlayer,

			onDelete: 'cascade',
			onUpdate: 'cascade',
			timestamps: false
		})

		Game.hasOne(Inventory, { onDelete: 'cascade', onUpdate: 'cascade' });
		Inventory.belongsTo(Game, { onDelete: 'cascade', onUpdate: 'cascade' });



		/*User.belongsTo(Country);
		Country.hasMany(User);


		User.hasOne(Address, { onDelete: 'cascade', onUpdate: 'cascade' });
		Address.belongsTo(User, { onDelete: 'cascade', onUpdate: 'cascade' });


		Actor.belongsToMany(Movie, {
			through: 'ActorMovie',
			as: 'ActorMovies',
			onDelete: 'cascade',
			onUpdate: 'cascade',
			timestamps: false
		});
		Movie.belongsToMany(Actor, {
			through: 'ActorMovie',
			as: 'ActorMovies',
			onDelete: 'cascade',
			onUpdate: 'cascade',
			timestamps: false
		});

		console.log('Relations added to all models');
	} catch (error) {
		throw error
	}*/
}

module.exports = addRelationsToModels