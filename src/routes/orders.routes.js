import { Router } from "express";
import { createOrders,getOrders,getOrdersById } from "../controllers/orders.controllers.js";
import { validateSchema } from "../middlewares/validate.schema.js";
import orderSchema from "../schemas/orders.schema.js"
const router = Router()

router.post('/order',validateSchema(orderSchema),createOrders)
router.get('/orders',getOrders)
router.get('/orders/:id',getOrdersById)


export default router