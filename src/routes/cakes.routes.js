import {Router} from "express";
import { createCakes } from "../controllers/cakes.controllers.js";
import {validateSchema} from "../middlewares/validate.schema.js"
import cakeSchema from "../schemas/cake.schema.js"
const router = Router();

router.post('/cakes',validateSchema(cakeSchema),createCakes)

export default router;