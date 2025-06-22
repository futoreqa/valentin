const { DataTypes }          = require('sequelize');
const { sequelize, Product } = require('./product');

const Order = sequelize.define('Order', {
    quantity:     DataTypes.INTEGER,
    orderDate:    DataTypes.DATE,
    customerName: DataTypes.STRING
});

Product.hasMany(Order,   { foreignKey: 'productId' });
Order.belongsTo(Product, { foreignKey: 'productId' });

module.exports = { Order };
