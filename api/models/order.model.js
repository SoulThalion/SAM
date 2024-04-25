const { DataTypes } = require('sequelize')
const { sequelize } = require('../../database')

const Order = sequelize.define(
	'order',
	{
		appointment: {
			type: DataTypes.DATE
		  },
		  work: {
			type: DataTypes.STRING,
			allowNull: false
		  },
		  observations: {
			type: DataTypes.STRING
		  },
		  hours: {
			type: DataTypes.INTEGER,
			allowNull: false,
			defaultValue: 0
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