const express = require('express');
const dotenv = require('dotenv');

const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');
const connectDB = require('./config/database');
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

connectDB();
app.use(express.json());

app.use('/api/users', userRoutes);
app.use('/api/products', productRoutes);



app.listen(PORT, () => {
    console.log(`Running on http://localhost:${PORT}`);
});
