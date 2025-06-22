const express     = require('express');
const router      = express.Router();
const { Order }   = require('../models/order');
const { Product } = require('../models/product');

router.get('/', async (req, res) => {
    const orders = await Order.findAll({ include: Product });
    res.json(orders);
});

router.post('/', async (req, res) => {
    const order = await Order.create(req.body);
    res.json(order);
});

router.put('/:id', async (req, res) => {
    await Order.update(req.body, { where: { id: req.params.id } });
    res.json({ message: 'Order updated' });
});

router.delete('/:id', async (req, res) => {
    await Order.destroy({ where: { id: req.params.id } });
    res.json({ message: 'Order deleted' });
});

module.exports = router;
