const express    = require('express');
const bodyParser = require('body-parser');

const { sequelize } = require('./models/product');
const productRoutes = require('./routes/products');
const orderRoutes   = require('./routes/orders');

const app = express();
app.use(bodyParser.json());

app.use('/products', productRoutes);
app.use('/orders', orderRoutes);

sequelize.sync().then(() => {
    app.listen(3000, () => console.log('Сервер в апе на порту 3000'));
});
