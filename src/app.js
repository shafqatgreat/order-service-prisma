require('dotenv').config();
const express = require('express');
const cors = require('cors');

const orderRoutes = require('./routes/orderRoutes');

const app = express();
app.use(cors());
app.use(express.json());

// Health Check
app.get('/', (req,res) => res.json({message: 'Order Service (Prisma) is running'}));

// Routes
app.use('/orders',orderRoutes);

//Start Server

const PORT = process.env.PORT || 4002;
app.listen(PORT, () => console.log('Order Service running on port', {PORT}));

