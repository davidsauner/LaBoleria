import { Router } from "express";
import { createOrders } from "../controllers/orders.controllers.js";
const router = Router()

router.post('/orders',createOrders)
router.get('/orders')
router.get('/orders/:id')


export default router