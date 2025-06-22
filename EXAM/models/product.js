const { Sequelize, DataTypes } = require('sequelize');
const sequelize                = new Sequelize('sqlite::memory:');

const Product = sequelize.define('Product', {
    name:        DataTypes.STRING,
    price:       DataTypes.FLOAT,
    description: DataTypes.STRING
});

module.exports = { Product, sequelize };
