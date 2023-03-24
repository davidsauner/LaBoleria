import { Router } from "express";
import { createOrders } from "../controllers/orders.controllers.js";
import { validateSchema } from "../middlewares/validate.schema.js";
import orderSchema from "../schemas/orders.schema.js"
const router = Router()

router.post('/order',validateSchema(orderSchema),createOrders)
router.get('/order')
router.get('/order/:id')


export default router