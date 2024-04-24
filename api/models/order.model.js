const { DataTypes } = require('sequelize')
const { sequelize } = require('../../database')

const Order = sequelize.define(
	'order',
	{
		appointment: {
			type: DataTypes.DATE,
			allowNull: false
		  },
		  work: {
			type: DataTypes.STRING,
			allowNull: false
		  },
		  hours: {
			type: DataTypes.INTEGER,
			allowNull: false
		  },
		  finish: {
			type: DataTypes.BOOLEAN,
			defaultValue: false
		  }
    },
	{	
		timestamps: false,
	},
)

module.exports = Order