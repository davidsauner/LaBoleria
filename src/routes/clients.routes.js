import { Router } from "express";
import { createClient } from "../controllers/clients.controllers.js";
const router= Router();

router.post('/clients',createClient)
router.get('/clients/:id/orders')

export default router;

