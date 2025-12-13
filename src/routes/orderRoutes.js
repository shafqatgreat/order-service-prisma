const express = require('express');
const router = express.Router();
const controller = require('../controllers/orderController');

router.get('/', controller.getAllOrders);
router.get('/:orderId', controller.getOrderByOrderId);
router.post('/', controller.createOrder);
router.put('/:orderId', controller.updateOrder);
router.delete('/:orderId', controller.deleteOrder);

module.exports = router;