const Order = require('../models/order.model')
const User = require('../models/user.model')

const bcrypt = require('bcrypt')


async function getAllOrders(req, res) {
	
	try {
		const orders = await Order.findAll()
		if (orders) {
			return res.status(200).json(orders)
		} else {
			return res.status(404).send('No orders found')
		}
	} catch (error) {
		res.status(500).send(error.message)
	}
}

async function getOneOrder(req, res) {
	try {
		const order = await Order.findByPk(req.params.id)
		if (order) {
			return res.status(200).json(order)
		} else {
			return res.status(404).send('Order not found')
		}
	} catch (error) {
		res.status(500).send(error.message)
	}
}

async function getAllMyOrders(req, res) {
	
	try {
		const orders = await Order.findAll({
            where: {
                userId: res.locals.user.id
            }
        });
		if (orders) {
			return res.status(200).json(orders)
		} else {
			return res.status(404).send('No orders found')
		}
	} catch (error) {
		res.status(500).send(error.message)
	}
}

async function createOrder(req, res) {
	try {
		const order = await Order.create(req.body)
		return res.status(200).json({ message: 'Order created', order: order })
	} catch (error) {
		res.status(500).send(error.message)
	}
}

async function updateOrder(req, res) {
	try {
		const [orderExist, order] = await Order.update(req.body, {
			returning: true,
			where: {
				id: req.params.id,
			},
		})
		if (orderExist !== 0) {
			return res.status(200).json({ message: 'Order updated', order: order })
		} else {
			return res.status(404).send('Order not found')
		}
	} catch (error) {
		return res.status(500).send(error.message)
	}
}


/*async function updateOrder(req, res) {
    try {
        const allowedFields = ['appointment', 'observations', 'hours', 'finish'];
        const dataToUpdate = {};

        // Verificar el rol del usuario que realiza la solicitud
        if (res.locals.user.role === 'mechanic') {
            // Si el usuario es mecánico, solo permitir actualizar ciertos campos
            Object.keys(req.body).forEach(key => {
                if (allowedFields.includes(key)) {
                    dataToUpdate[key] = req.body[key];
                }
            });
        } else {
            // Si no es mecánico, permitir actualizar todos los campos
            dataToUpdate = req.body;
        }

        const [orderExist, order] = await Order.update(dataToUpdate, {
            returning: true,
            where: {
                id: req.params.id,
            },
        });

        if (orderExist !== 0) {
            return res.status(200).json({ message: 'Order updated', order: order });
        } else {
            return res.status(404).send('Order not found');
        }
    } catch (error) {
        return res.status(500).send(error.message);
    }
}*/

async function deleteOrder(req, res) {
	try {
		const order = await Order.destroy({
			where: {
				id: req.params.id,
			},
		})
		if (order) {
			return res.status(200).json('Order deleted')
		} else {
			return res.status(404).send('Order not found')
		}
	} catch (error) {
		return res.status(500).send(error.message)
	}
}


module.exports = {
	getAllOrders,
	getOneOrder,
	createOrder,
	updateOrder,
	deleteOrder,
	getAllMyOrders
}
