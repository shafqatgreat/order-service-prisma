require("dotenv").config();
const {PrismaClient} = require('@prisma/client');
const {PrismaPg} = require("@prisma/adapter-pg");
const {Pool} = require("pg");

// Pool configuration
const pool = new Pool({
    connectionString: process.env.DATABASE_URL
})

// Pass pool into PrismaPg
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({adapter});


// Get Orders
exports.getAllOrders= async (req,res) =>{
    try{
        const orders= await prisma.order.findMany({orderBy: {createdAt: 'desc'}});
        res.json(orders);
    }catch(err){
        console.error(err);
        res.status(500).json({message: 'Server error'});

    }

};

// GET orders by orderId
exports.getOrderByOrderId= async (req,res) =>{
    try{
        const {orderId}= req.params;
        const order = await prisma.order.findUnique({where: {orderId}});
        if(!order) return res.status(404).json({message: 'Order not found'});
        res.json(order);
    }catch(err)
    {
        console.error(err);
        res.status(500).json({message: 'Server error'});
    }
};
// POST Create Order/Orders
exports.createOrder= async (req,res) =>{
    try{
        const {orderId, userId, items, total, status}= req.body;
        if(!orderId || !userId || !items || total == null)
            {
                return res.status(404).json({messge: 'OrderId,userId,items and total are required'});
            }
        const newOrder = await prisma.order.create({
            data:{
                orderId,
                userId,
                items,
                total,
                status: status || 'Pending'
            }
        });
    res.status(201).json({message: 'Order created', order: newOrder});
    }catch(err)
    {
        console.error(err);
        res.status(500).json({message: 'Server error'});
    }
};

// PUT Update order
exports.updateOrder= async (req,res) =>{
    try{
        const {orderId} = req.params;
        const payload = req.body;

        const updated = await prisma.order.update({
            where: {orderId},
            data: payload
        });
        res.json({message: 'Order updated', order: updated});
    }catch(err)
    {
        console.error(err);
        if (err.code === 'P2025'){
        return res.status(404).json({message: 'Order not found'});
        }
        
        res.status(500).json({message: 'Server error'});
    }
};


// DELETE  Delete Order
exports.deleteOrder= async (req,res) =>{
    try{
        const {orderId}= req.params;
        const deleted = await prisma.order.delete({where: {orderId}});
        res.json({message: 'Order deleted', order: deleted});


    }catch(err)
    {
        console.error(err);
        if(err.code ==='P2025'){
        return res.status(404).json({message: 'Order not found'});    
        }
        res.status(500).json({message: 'Server error'});
    }
};