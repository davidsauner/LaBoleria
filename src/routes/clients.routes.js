import { Router } from "express";
import { createClient,getClientOrder } from "../controllers/clients.controllers.js";
import {validateSchema} from "../middlewares/validate.schema.js"
import clientSchema from "../schemas/client.schema.js"
const router= Router();

router.post('/clients',validateSchema(clientSchema),createClient)
router.get('/clients/:id/orders',getClientOrder)

export default router;

